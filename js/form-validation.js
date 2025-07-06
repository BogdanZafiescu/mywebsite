/*
The following code handles form validation and submission
for the contact form.

*/

// Selecting form fields
const fields = document.querySelectorAll('.field');
const submitButton = document.querySelector('.submit');
const nameField = document.getElementById('name');
const emailField = document.getElementById('email');
const phoneField = document.getElementById('phone');
const messageField = document.getElementById('message');
const form = document.querySelector('.contact_form');

// Regular expressions for email and phone number validation
const emailRegex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
const phoneRegex = /^\+?\d{1,3}\s?\(?\d{1,4}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;

// Function to add failure styles to a field
function addFailColors(field) {
    field.value = '';
    field.classList.add('contact__placeholder');
}

// Function to add success styles to a field
function addSuccessColors(field) {
    field.style.backgroundColor = '#CDFF2E';
    field.style.color = 'black';
}

// Function to reset field styles
function resetColors(field) {
    field.style.backgroundColor = 'transparent';
    field.style.color = 'white';
    field.classList.remove('contact__placeholder');
}

// Reset field styles
fields.forEach((field) => {
    resetColors(field);
    setTimeout(() => {
        field.value = '';
    }, 100);
});

// Validation function for user input
let validate = () => {
    let isValid = true;
    
    

    // Check if the user has entered a name
    if (nameField.value === '') {
        nameField.placeholder = 'Oops! You forgot to tell me your name.';
        addFailColors(nameField);
        isValid = false;
    } else {
        addSuccessColors(nameField);
    }

    // Check if the email field is empty and matches the email format
    if (emailField.value === '') {
        emailField.placeholder = 'Uh-oh! Looks like you forgot to fill in your email.';
        addFailColors(emailField);
        isValid = false;
    } else if (!emailField.value.match(emailRegex)) {
        emailField.placeholder = 'Caution: incorrect email format (use this form: simple@example.com)!';
        addFailColors(emailField);
        isValid = false;
    } else {
        addSuccessColors(emailField);
    }

    // Check if the phone number field is invalid
    if (phoneField.value && !phoneField.value.match(phoneRegex)) {
        phoneField.placeholder = 'Phone number is invalid!';
        addFailColors(phoneField);
        isValid = false;
    } else if (phoneField.value && phoneField.value.match(phoneRegex)) {
        addSuccessColors(phoneField);
    }

    // Check if the user has entered a message within the character limit
    if (messageField.value.length > 256) {
        messageField.placeholder = 'Your message is too long. The message has to be at most 256 characters.';
        addFailColors(messageField);
        isValid = false;
    } else if (messageField.value === '') {
        addFailColors(messageField);
        isValid = false;
        messageField.placeholder = 'Please enter a message here.';
    } else {
        addSuccessColors(messageField);
    }

    // Submit the form if all input is valid
    if (isValid) {
        form.submit();
    }
};

// Event listeners for handling placeholder text and styling when there is no content 
//or it's has been deleted
fields.forEach((inputField, idx) => {
    inputField.addEventListener('input', (event) => {
        if (inputField.value === '') {
            resetColors(inputField);
            if (idx === 0) {
                inputField.placeholder = 'Enter your name here.';
            } else if (idx === 1) {
                inputField.placeholder = 'Email address goes here.';
            } else if (idx === 2) {
                inputField.placeholder = 'Your phone number goes here (optional).';
            } else {
                inputField.placeholder = 'Enter message here.';
            }
        }
    });
});

// Event listener for form submission
form.addEventListener('submit', (event) => {
    event.preventDefault();
    validate();
});
