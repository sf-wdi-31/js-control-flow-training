console.log("login.js loaded");

var userLogin = {userName: "octocat_rules", password: "abacadabra"}

var passwordInput;

var loggedIn = false;

let failures = 0;

while (!loggedIn && failures < 3){
	passwordInput = prompt("Enter password for user " + userLogin.userName + ".")
	if (passwordInput === userLogin.password){
		console.log("Passwords match!");
    loggedIn = true;
	} else {
		console.log("Passwords do not match. Try Again!");
    failures += 1;
    // failures = failures + 1;
    // failures++;
	}
}
if (failures === 3) {
  alert("you failed");
}
