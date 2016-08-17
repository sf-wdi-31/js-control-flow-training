console.log("login.js loaded");

var userLogin = {userName: "octocat_rules", password: "abacadabra"}

var passwordInput;

var loggedIn = false;

while (!loggedIn){
	passwordInput = prompt("Enter password for user " + userLogin.userName + ".")
	if (passwordInput === userLogin.password){
		console.log("Passwords match!");
    loggedIn = true;
	} else {
		console.log("Passwords do not match. Try Again!");
	}
}
