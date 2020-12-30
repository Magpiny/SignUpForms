/*\
|*|@uthor Samuel Okoth Wanjare
|*|tel: +254701987730 +254722260625
|*|@github /Magpiny
|*|@twitter @samuelwanjare
|*|@linkedin samuelwanjare
|*|Contacts above should be used for code inquiries and improvements ONLY 
|*|@functions validate(), timer()
|*|You can use this source code and share it freely however you want
|*|As long as the first 12 commented lines are present
|*|Thank you
\*/

//html header
let h1 = document.querySelector("h1");
h1.innerHTML ="job seekers' details form";


//validate form
let validate  = function(){

	//select all input fields
	let fname = document.forms["myform"]["fname"];
	let lname = document.forms["myform"]["lname"];
	let email = document.forms["myform"]["email"];
	let passp = document.forms["myform"]["passport"];
	let file  = document.forms["myform"]["file"];
	let date  = document.forms["myform"]["date"];
	let site  = document.forms["myform"]["site"];
	let image = document.forms["myform"]["image"];

	//get all input field's values
	let vFname = fname.value;
	let vLname = lname.value;
	let vEmail = email.value;
	let vPasp  = passp.value;
	let vFile  = file.value;
	let vDate  = date.value;
	let vSite  = site.value;
	let vImage = image.value;

	//select all error elements by id
	let error1 = document.querySelector('#error1');
	let error2 = document.querySelector('#error2');
	let error3 = document.querySelector('#error3');
	let error4 = document.querySelector('#error4');
	let error5 = document.querySelector('#error5');
	let error6 = document.querySelector('#error6');
	let error7 = document.querySelector('#error7');
	let error8 = document.querySelector('#error8');

	//Check for form errors
	if (vFname=="" || vFname.length <2 || vFname== null ) {
		error1.innerHTML = "First Name cannot be blank or less than two characters!!";
		fname.focus();
		return false;
	}

	if (vLname=="" || vLname.length <2 || vLname== null ) {
		error2.innerHTML = "Last Name cannot be blank or less than two characters!!";
		lname.focus();
		return false;
	}

	if (vEmail=="" || vEmail== null || email.validity.typeMismatch ) {
		error3.innerHTML = "Invalid email address!";
        // email.setCustomValidity("Invalid email address!!");
		email.focus();
		return false;
	}

	if (vPasp ==" " || vPasp.length<6 || vPasp.length > 12 || isNaN(vPasp) ) {
		error4.innerHTML = "Passport/ID Number must be 6 to 12 whole numbers!! ";
        // email.setCustomValidity("Invalid email address!!");
		passp.focus();
		return false;
	}

	if (vFile =="" ) {
		error5.innerHTML = "We only accept .doc, .docx & pdf files for this field";
        // email.setCustomValidity("Invalid email address!!");
		file.focus();
		return false;
	}

	if (vDate =="" || vAge== null ) {
		error6.innerHTML = "Date field cannot be empty!";
        // email.setCustomValidity("Invalid email address!!");
		date.focus();
		return false;
	}

	if (vSite =="" || vSite== null ) {
		error7.innerHTML = "Not a valid url";
        // email.setCustomValidity("Invalid email address!!");
		site.focus();
		return false;
	}

	if (vImage =="" ) {
		error8.innerHTML = "Kindly provide an image";
        // email.setCustomValidity("Invalid email address!!");
		image.focus();
		return false;
	}

    console.log(vFname);
	return true;
}






//timer elements
document.querySelector('footer').innerHTML=`&copy; ${new Date().getFullYear()} by Magpiny&trade; ` ;

//time function
let timer = () => {
	let h4 = document.querySelector('h4');
	let time = new Date().toLocaleTimeString();
	h4.innerHTML = time;
};
//update time every second
setInterval(timer, 1000)
