//Hide alerts-Register
$(document).ready(function()
{
$("#alertSuccess").hide();
$("#alertError").hide();
}); 
 
//Hide alerts-Email
$(document).ready(function()
{
$("#alertErrorEmail").hide();
}); 

//Form validation
var status = validateForm();
// If not valid
if (status != true)
{
 $("#alertError").text(status);
 $("#alertError").show();
return;
}

//Display success message
$("#alertSuccess").text("Registered successfully.");
$("#alertSuccess").show();

$("#doctorRegister")[0].reset();

//Validate form elements
function validateForm(){
	
	//email
		let email = $("#email").val().trim();
	  	let regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	  
	  	if(regex.test(email)){
	  		$("#alertErrorEmail").hide();
	  	}
	  	else{
	  		$("#alertErrorEmail").text("Please enter a valid email");
	  		$("#alertErrorEmail").show();
	  	}

	  	
};

























