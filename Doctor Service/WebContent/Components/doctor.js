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
	
//Check the number of characters in NIC
	$("#nic").focusout(function(){
		checkNic();
	});

//Check email is valid or not
	$("#email").focusout(function(){
		checkEmail();
	});

//Check contact number validation 
	$("#contactNumber").focusout(function(){
		checkContactNumber();
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
		checkPassword();
	});	
	
//check confirmed password validation
	$("#confirmPassword").focusout(function(){
		checkConfirmPassword();
	});	
	
//NIC validation
function checkNic(){
	let nicLength = $("#nic").val().length;
	
	if (nicLength == 10 || nicLength == 12){
		$("#nic_error").hide();
	}
	else{
		$("#nic_error").text("NIC should be 10 or 12 characters.");
		$("#nic_error").show();
	}
}

//Email validation
function checkEmail(){
		let email = $("#email").val().trim();
	  	let regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	  
	  	if(regex.test(email)){
	  		$("#email_error").hide();
	  	}
	  	else{
	  		$("#email_error").text("Please enter a email");
	  		$("#email_error").show();
	  	}
}

//Contact Number validation
function checkContactNumber(){
	let contactNumberLength = $("#contactNumber").val().length;
  
  	if(contactNumberLength == 10){
  		$("#contact_error").hide();
  	}
  	else{
  		$("#contact_error").text("Please enter a valid contact number");
  		$("#contact_error").show();
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
  	}
  	else{
  		$("#password_error").text("Password should be contain atleast 6 characters ");
  		$("#password_error").show();
  	}	
}

function checkConfirmPassword(){
	if ($("#password").val() != $("#confirmPassword").val()){
		$("#confirmPassword_error").text("Password do not match");
  		$("#confirmPassword_error").show();
	}
	else{
		$("#confirmPassword_error").hide();
	}
}

});

























