const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({   //Used to send email by transport layer(CN concept)
    service : 'gmail',
    auth : {
        user : 'parththikrul0510@gmail.com',
        pass : 'aeqx tlwi zjvo nimn'
    }
});


const mailOptions = {
    from : 'parththikrul0510@gmail.com',
    to : 'swastiksahni90@gmail.com',
    subject : 'Test email from node.js',
    text : 'Muh mein le lavde'
};


transporter.sendMail(mailOptions,(error,info) =>{
    if(error){
        console.log("Error",error);
    }
    else{
        console.log("Email send successfully!");
        console.log(info,response);
    }
});

