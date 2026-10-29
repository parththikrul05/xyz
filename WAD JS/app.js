function sanitize(str) {
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

function validateName(name) {
    const regex = /^[a-zA-Z\s]+$/;
    return regex.test(name) && name.trim().length > 0;
}

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function validateAge(age) {
    const regex = /^\d+$/;
    if (!regex.test(age)) return false;
    
    const ageNum = parseInt(age, 10);
    return ageNum >= 1 && ageNum <= 100;
}

function validatePassword(password) {
    const regex = /^(?=.*\d)(?=.*[^a-zA-Z0-9]).{8,}$/;
    return regex.test(password);
}

document.getElementById('submitBtn').addEventListener('click', function() {
    const name = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;
    const password = document.getElementById('password').value;
    const bio = document.getElementById('bio').value;

    if (!validateName(name)) {
        alert("Error: Full Name must contain only letters and spaces.");
        return;
    }
    
    if (!validateEmail(email)) {
        alert("Error: Please enter a valid Email address.");
        return;
    }
    
    if (!validateAge(age)) {
        alert("Error: Age must be a number between 1 and 100.");
        return;
    }
    
    if (!validatePassword(password)) {
        alert("Error: Password must be at least 8 characters long, containing at least one number and one special character.");
        return;
    }

    // If everything is valid, sanitize data before processing/displaying
    const sanitizedName = sanitize(name);
    const sanitizedBio = sanitize(bio);
    
    alert(`Success! Registration complete for ${sanitizedName}.\n\nSanitized Bio preview:\n${sanitizedBio}`);
});

document.getElementById('clearBtn').addEventListener('click', function() {
    if (confirm("Are you sure you want to clear the form?")) {
        document.getElementById('regForm').reset();
    }
});