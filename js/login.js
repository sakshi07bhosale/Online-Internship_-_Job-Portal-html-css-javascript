
const authWrapper = document.querySelector('.auth-wrapper');
const loginTrigger = document.querySelector('.login-trigger');
const registerTrigger = document.querySelector('.register-trigger');


registerTrigger.addEventListener('click', function (e) {
    e.preventDefault();
    authWrapper.classList.add('toggled');
});


loginTrigger.addEventListener('click', function (e) {
    e.preventDefault();
    authWrapper.classList.remove('toggled');
});


const successCard = document.getElementById("loginSuccessCard");
const successText = document.getElementById("successText");

function showSuccessMessage(message) {

    successText.innerText = message;

    successCard.classList.add("show");

    setTimeout(function () {
        successCard.classList.remove("show");
    }, 3000);

}


const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const username = document.getElementById("loginUsername").value;

    showSuccessMessage(username + " login successfully! 🎉");

    loginForm.reset();

});
const passwordElement = document.getElementById('loginPassword');
const toggleElement = document.getElementById('togglePassword');

function toggle() {
    if (passwordElement.type == "password") {
        passwordElement.type = "text";
        toggleElement.src = "hide.png";
    }
    else {
        passwordElement.type = "password";
        toggleElement.src = "./../images/unhide.png";
    }
}

const registerForm = document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const username = document.getElementById("registerUsername").value;

        showSuccessMessage(username + " registered successfully! 🎉");

        registerForm.reset();

    });
    const passwordElement = document.getElementById('registerPassword"');
    const toggleElement = document.getElementById('togglePassword');

    function toggle() {
        if (passwordElement.type == "password") {
            passwordElement.type = "text";
            toggleElement.src = "hide.png";
        }
        else {
            passwordElement.type = "password";
            toggleElement.src = "./../images/unhide.png";
        }

    }
}