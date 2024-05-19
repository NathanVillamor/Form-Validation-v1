// VARIABLES

// Main Hero 
var username = document.querySelector(".username");
var heroname = document.querySelector(".heroName");
var heroBtn1 = document.getElementById("cta1");
var heroBtn2 = document.getElementById("cta2");

// Sign-up Form
var signupEmail = document.getElementById("signupEmail").value;
var signupPassword = document.getElementById("signupPassword").value;
var termsCheck = document.getElementById("termsCheck");
var signupBtn = document.getElementById("signupBtn");

// Login Form
var loginEmail = document.getElementById("loginEmail").value;
var loginPassword = document.getElementById("loginPassword").value;
var passCheck = document.getElementById("passCheck");
var loginBtn = document.getElementById("loginBtn");

var accountEmails = new Array();
var accountPasswords = new Array();

signupBtn.onclick() = function() {

    if (signupEmail != null || signupPassword != null) {

        if (signupEmail.search(/@/i)) {

            accountEmails.push(signupEmail);
            accountPasswords.push(signupPassword);

            alert("Account created successfully!");

        } 
        else {
            alert("Please enter a valid email!");
        }

    } 
    else {
        alert("Please fill the necessary fields!")
    }

}

