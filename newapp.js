const http = require('http');
const querystring = require('querystring');

const server = http.createServer((request, response) => {

    // Display the form
    if (request.method === 'GET' && request.url === '/') {

        response.writeHead(200, { 'Content-Type': 'text/html' });

        response.write(`
            <h1>User Information Form</h1>
            <form method="POST" action="/submit">
                Name:
                <input type="text" name="name">
                <br><br>
                Email:
                <input type="text" name="email">
                <br><br>

                <input type="submit" value="Submit">

            </form>
        `);

        response.end();
    }

    // Process the form
    else if (request.method === 'POST' && request.url === '/submit') {

        let body = '';

        request.on('data', (chunk) => {
            body += chunk.toString();
        });

        request.on('end', () => {

            const data = querystring.parse(body);

            const name = data.name;
            const email = data.email;

            let errors = [];

            // Validate Name
            if (!name || name.trim() === '') {
                errors.push('Name is required.');
            }

            // Validate Email
            if (!email || !email.includes('@')) {
                errors.push('Valid email is required.');
            }

            response.writeHead(200, { 'Content-Type': 'text/html' });

            if (errors.length > 0) {

                response.write('<h1>Validation Failed</h1>');

                errors.forEach((error) => {
                    response.write(`<p>${error}</p>`);
                });

            } else {

                response.write('<h1>Registration Successful</h1>');
                response.write(`<p>Name: ${name}</p>`);
                response.write(`<p>Email: ${email}</p>`);
            }

            response.end();
        });
    }

});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});