//Hide alerts-Register
$(document).ready(function()
{
//hide area of error messages
	$("#alertErrorNic").hide();
	$("#alertErrorFirstName").hide();
	$("#alertErrorLastName").hide();
	$("#alertErrorContactNumber").hide();
	$("#alertErrorGender").hide();
	$("#alertErrorCategory").hide();
	$("#alertErrorEmail").hide();
	$("#alertErrorPassword").hide();
	
//check the number of characters in NIC
	$("#nic").focusout(function(){
		checkNic();
	});

//check email is valid or not
	$("#email").focusout(function(){
		checkEmail();
	});

//NIC validation
function checkNic(){
	let nicLength = $("#nic").val().length();
	
	if (nicLength == 10 || nicLength == 12){
		$("#alertErrorNic").hide();
	}
	else{
		$("#alertErrorNic").text("NIC should be 10 or 12 characters.");
		$("#alertErrorNic").show();
	}
}
//Email validation
function checkEmail(){
		let email = $("#email").val().trim();
	  	let regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	  
	  	if(regex.test(email)){
	  		$("#alertErrorEmail").hide();
	  	}
	  	else{
	  		$("#alertErrorEmail").text("Please enter a valid email");
	  		$("#alertErrorEmail").show();
	  	}
}
});

























