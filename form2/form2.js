/**
*HTML Form validation using HTML JS
*@author Samuel Okoth Wanjare
*@file javascript form validation file
*/

/*\
|*|Am tired at this point in js form validation
\*/
//select all the input elements by name
let fname = document.forms["myForm"]["firstname"].value;
let lname = document.forms["myForm"]["lastname"].value;
let email = document.forms["myForm"]["email"].value;
let phone = document.forms["myForm"]["phone"].value;
let password = document.forms["myForm"]["passcode"].value;
let confirm_password = document.forms["myForm"]["confirm_passcode"].value;

//Select all the error ids to display individual errors
let fnameError = document.querySelector('#error1');
let lnameError = document.querySelector('#error2');
let emailError = document.querySelector('#error3');
let phoneError = document.querySelector('#error4');
let passError = document.querySelector('#error5');
let confirmPassError = document.querySelector('#error6');

//Error messages
let error1 = "Name cannot be empty";

//utilities
var passFormat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8, 15}$/ ;
var mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ ;
var phoneFormat = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/ ;

//Form validation function
const validate = () => {
	//prevent default javascript form submit

	if (fname === "" || fname === null) {
		fnameError.innerHTML = "Name cannot be blank!";
		fname.focus();
		return false ;
	}
    if(fname.length<2){
        fnameError.innerHTML = "Name cannot be less than 2 characters long!";
        fname.focus();
        return false ;
    }

	 //last name validation
	 if (lname === null || lname === "") {
		lnameError.innerHTML = "Last Name cannot be blank!";
		lname.focus();
		return false ;
	}
    if(fname.length<2){
        lnameError.innerHTML = "Last Name cannot be less than 2 characters long!";
        lname.focus();
        return false ;
    }

	 //email validation
	 if (!email.match(mailFormat)) {
        emailError.innerHTML = "Invalid email format!";
	 	emailError.style.border = none;
	 	email.style.border = "2px solid red";
	 }

	 //phone Number validation
	 if (!phone.match(phoneFormat)) {
	 	phoneError.textContent = "Invalid phone format";
	 	phone.style.border = "2px solid red";
	 	phone.focus();
	 	return false;
	 }

	 //password validation
	 if (!password.match(passFormat)) {
	 	passError.textContent = "Password Must contain atleast one uppercase, lowercase, symbol and a number";
	 	password.style.border = "2px solid red";
	 	password.focus();
	 	return false;
	 }

	 if (password !== confirm_password) {
	 	confirmPassError.innerHTML = "Password does NOT match!";
	 	confirm_password.style.border = "2px solid red";
	 	confirm_password.focus();
	 }

	 return true;
}






/**
 * Time
*/
let timeDisplay = document.querySelector('#time');
let time = new Date().toDateString();
timeDisplay.innerHTML = time;

let yearDisplay = document.querySelector('#date');
let year = new Date().getFullYear();
yearDisplay.innerHTML = year;

let hrDisplay = document.querySelector('#hr');
let hr = new Date().toTimeString();
hrDisplay.innerHTML = hr;
hrDisplay.style.color = "yellow";
hrDisplay.style.boxShadow = "3px 3px 3px white";

