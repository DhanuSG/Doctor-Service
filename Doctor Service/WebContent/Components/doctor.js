$(document).ready(function()
{
//Hide area of error messages
	$("#nic_error").hide();
	$("#fName_error").hide();
	$("#lName_error").hide();
	$("#contact_error").hide();
	$("#gender_error").hide();
	$("#category_error").hide();
	$("#email_error").hide();
	$("#password_error").hide();
	$("#confirmPassword_error").hide();
	
//variables for validation
	let vNic = true;
	let vEmail = true;
	let vContactNumber = true;
	let vPassword = true;
	let vConfirmPassword = true;
	
//Check the number of characters in NIC
	$("#nic").focusout(function(){
		checkNic();
	});

//Check email is valid or not
	$("#email").focusout(function(){
		vEmail = checkEmail();
	});

//Check contact number validation 
	$("#contactNumber").focusout(function(){
		vContactNumber = checkContactNumber();
	});	
	
//Check name validation
	$("#firstName").focusout(function(){
		checkFirstName();
	});	
	
	$("#lastName").focusout(function(){
		checkLastName();
	});	

//Check category validation
	$("#category").focusout(function(){
		checkCategory();
	});	
	
//check password validation
	$("#password").focusout(function(){
		vPassword = checkPassword();
	});	
	
//check confirmed password validation
	$("#confirmPassword").focusout(function(){
		vConfirmPassword = checkConfirmPassword();
	});	
	
	$(document).on("click", "#btnRegister", function(event){
		let nicStatus = nicRequired();
		let fNameStatus = fNameRequired();
		let lNameStatus = lNameRequired();
		let contactNumberStatus = contactNumberRequired();
		let genderStatus = genderRequired();
		let categoryStatus = categoryRequired();
		let emailStatus = emailRequired;
		let passwordStatus = passwordRequired();
		let confirmPasswordStatus = confirmPasswordRequired();
	
		$("#doctorRegister").submit(function(){
			if(nicStatus == false || fNameStatus == false || lNameStatus == false || contatctNumberStatus == false
				|| genderStatus == false || categoryStatus == false || emailStatus == false 
				|| passwordStatus == false || confirmPasswordStatus == false){
			return false;
			} else if(vNic == false || vEmail == false || vPassword == false || vConfirmPassword == false ||
				vContactNumber == false){
				return false;
			} else{
				return true;
			}
		});
	});
});
		
//NIC validation
function checkNic(){
	let nicLength = $("#nic").val().length;
	
	if (nicLength == 10 || nicLength == 12){
		$("#nic_error").hide();
		return true;
	}
	else{
		$("#nic_error").text("NIC should be 10 or 12 characters.");
		$("#nic_error").show();
		return false;
	}
}

//Email validation
function checkEmail(){
		let email = $("#email").val().trim();
	  	let regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	  
	  	if(regex.test(email)){
	  		$("#email_error").hide();
	  		return true;
	  	}
	  	else{
	  		$("#email_error").text("Please enter a email");
	  		$("#email_error").show();
	  		return false;
	  	}
}

//Contact Number validation
function checkContactNumber(){
	let contactNumberLength = $("#contactNumber").val().length;
  
  	if(contactNumberLength == 10){
  		$("#contact_error").hide();
  		return true;
  	}
  	else{
  		$("#contact_error").text("Please enter a valid contact number");
  		$("#contact_error").show();
  		return false;
  	}
}

//Name validation
function checkFirstName(){
	
	if ($("#firstName").val().trim() == ""){
		$("#fName_error").text("First name cannot be empty");
		$("#fName_error").show();
	 } 
}

function checkLastName(){
	if($("#lastName").val().trim() == ""){
		$("#lName_error").text("Last name cannot be empty");
		$("#lName_error").show();
	}
}

//Category validation
function checkCategory(){
	if ($("#category").val().trim() == ""){
		$("#category_error").text("Category cannot be empty");
		$("#category_error").show();
	 } 
}

//Password validation
function checkPassword(){
	let passwordLength = $("#password").val().length;
	  
  	if(passwordLength >= 6){
  		$("#password_error").hide();
  		return true;
  	}
  	else{
  		$("#password_error").text("Password should be contain atleast 6 characters ");
  		$("#password_error").show();
  		return false;
  	}	
}

function checkConfirmPassword(){
	if ($("#password").val() != $("#confirmPassword").val()){
		$("#confirmPassword_error").text("Password do not match");
  		$("#confirmPassword_error").show();
  		return true;
	}
	else{
		$("#confirmPassword_error").hide();
		return false;
	}
}

//NIC required 
function nicRequired(){
	if ($("#nic").vla().trim() == ""){
		$("#nic_error").text("This field is required");
		$("#nic_error").show();
		return false;
	}else{
		$("#nic_error").hide();
		return true;
	}
}

function fNameRequired(){
	if ($("#fName").vla().trim() == ""){
		$("#fName_error").text("This field is required");
		$("#fName_error").show();
		return false;
	}else{
		$("#fName_error").hide();
		return true;
	}
}




























