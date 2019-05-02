
![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)


# Control Flow Training

Fork and clone this repository and start by opening the entire project in your text editor and opening `index.html` in the browser.


Be mindful of infinite loops, especially common with `while`. They can crash your browser!

Consider adding a temporary counter variable to limit the maximum number of iterations:

```js
// numIterations ensures this while loop doesn't go on forever
var numIterations = 0;
while (true && numIterations < 100){
  console.log("still going!");
  numIterations++;
}
```


### Security Questions

Work in the security_questions.js file.

1. Create an array called `securityQuestions`. Each element of `securityQuestions` will be an object with two keys: `question` and `expectedAnswer`.

1. Populate (fill) `securityQuestions` with at least three such objects. Feel free to just make them up. For example, one security question object might be:  

	```js
	{ question: "What was your first pet's name?", expectedAnswer: "FlufferNutter" }
	```


1. Write code that goes through each of the security questions in your array doing the following:   
  * use `window.prompt` (short name: `prompt`) to create a popup in the browser with the question    
  * check whether the user's input matches the expected answer    
  		* if the answer does match, ask the next question
  		* if the answer doesn't match, stop asking questions and pop up an alert message.




### Login

Work in the login.js file.

1. Create a `userLogin` object with one key for a user's name and one key for the user's password. (Just make up a user name and password.)  

2. Write code that prompts the user for their password with a message customized to the user. For example, if the user name you created is `octocat_rules`, the message should be `"Enter password for user octocat_rules."`

3. Extend your previous code to check whether the password entered by the user actually matches the password in the `userLogin` object. The code should let the user know whether the passwords matched with console logs or a JavaScript `alert`.

4. If the passwords don't match, prompt the user to enter their password again.  If the passwords match, make sure your code doesn't prompt the user again.

Bonus: Modify your user login to give the user only three chances to enter the correct password.


### Sing!


Work in the sing.js file.

1. Write code that console logs the "Bottles of beer on the wall" song:

		5 bottles of beer on the wall,
		5 bottles of beer!
		Take one down and pass it around,
		4 bottles of beer on the wall!


2. Bonus: fix "1 bottles of beer". It should say "1 bottle of beer". 

3. Bonus: change "0 bottles..." to "No more bottles...".

4. Bonus: Use a JavaScript `prompt` to ask the user how many verses they want to hear.
