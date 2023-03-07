function fnValidate() {
    
const firstnameInput = document.getElementById("fname");
const lastnameInput = document.getElementById("lname");
const dob = document.getElementById("dob");
const gender = document.getElementById("gender");
const phone = document.getElementById("phone");
const street = document.getElementById("street");
const city = document.getElementById("city");
const email = document.getElementById("email");
const nic_passport = document.getElementById("nic_passport");
const psw = document.getElementById("psw");
const psw-repeat = document.getElementById("password");
const rules = document.getElementById("rules");


document.querySelector("form").addEventListener("submit", function(event) {

  const lettersOnly = /^[A-Za-z]+$/;
  
    if (!firstnameInput.value.match(lettersOnly)) {
        alert("First Name must contain only letters.");
        event.preventDefault();
        return false;
    }
 
    if (!lastnameInput.value.match(lettersOnly)) {
        alert("Last Name must contain only letters.");
        event.preventDefault();
        return false;
    }
 
    return true;
    });
  
var dob = new Date(document.getElementById("dob").value);
var ageInMs = Date.now() - dob.getTime();
var ageDate = new Date(ageInMs);
var age = Math.abs(ageDate.getUTCFullYear() - 1970);

    if (age < 18) {
    alert("You must be at least 18 years old to submit this form.");
    return false;
    }
    return true; 
  
var selectBox = document.getElementById("options");
var selectedValue = selectBox.options[selectBox.selectedIndex].value;
  
    if (selectedValue == "option2") {
    document.getElementById("hiddenList").style.display = "block";
    } else {
    document.getElementById("hiddenList").style.display = "none";
    }

var password = document.getElementById("psw").value;
			var regex = /^(?=.*[A-Z])(?=.*\d)[^\s]{8,}$/;
			if (regex.test(password)) {
				alert("Valid password!");
			} else {
				alert("Invalid password!");
			}
			
var psw = document.getElementById("psw").value;
var psw-repeat = document.getElementById("psw-repeat").value;
if (psw !== psw-repeat) {
alert("Passwords do not match.");
return;
  }

var email = document.getElementById("email").value;
			var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
			if (regex.test(email)) {
				alert("Valid email address!");
			} else {
				alert("Invalid email address!");
			}
	
var phone = document.getElementById("phone").value;
			var regex = /^5\d{0,7}$/;
			if (regex.test(mobileNumber)) {
				alert("Valid Phone number!");
			} else {
				alert("Invalid Phone number!");
			}	     
}