// VARIABLES

var signupFormContainer = document.querySelector(".signup-container");
var loginFormContainer = document.querySelector(".login-container");
var mainHero = document.querySelector(".main-hero");

// Main Hero 
var username = document.querySelector(".username");
var heroname = document.querySelector(".heroName");
var heroBtn1 = document.getElementById("cta1");
var heroBtn2 = document.getElementById("cta2");

// Sign-up Form
var signupEmail = document.getElementById("signupEmail");
var signupPassword = document.getElementById("signupPassword");
var termsCheck = document.getElementById("termsCheck");
var signupBtn = document.getElementById("signupBtn");

// Login Form
var loginEmail = document.getElementById("loginEmail");
var loginPassword = document.getElementById("loginPassword");
var passCheck = document.getElementById("passCheck");
var loginBtn = document.getElementById("loginBtn");

// Temporary Database of Accounts and Passwords
var accountEmails = new Array();
var accountPasswords = new Array();

// Signup Form-Validation
signupBtn.onclick = function() {

    if (signupEmail != "" && signupPassword != "") {

        const emailChar = /@./;

        if (emailChar.test(signupEmail.value)) {

            accountEmails.push(signupEmail.value);
            accountPasswords.push(signupPassword.value);

            signupFormContainer.style.display = 'none';
            loginFormContainer.style.display = 'flex';
        
            alert("Account created successfully!");

        } 
        else {
            alert("Please enter a valid email!");
        }

    } 
    else {

        alert("Please fill the necessary fields!");

    }

}

// LOGIN 
loginBtn.onclick = function() {

    if (accountEmails.includes(loginEmail.value) && accountPasswords.includes(loginPassword.value)) {

        username.textContent = loginEmail.value;
        heroname.textContent = loginEmail.value;



        alert("Login Successful!");

        loginFormContainer.style.display = 'none';
        mainHero.style.display = 'flex';
    }
    else {
        alert("Wrong details. Please try again.")
    }

}

