$(document).ready(function()
{
	if ($("#alertSuccess").text().trim() == "")
	{
		$("#alertSuccess").hide();
	}
	
	$("#alertError").hide();
	
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
});

	$(document).on("click", "#btnRegister", function(event){
		
		$("#alertSuccess").text("");
		$("#alertSuccess").hide();
		$("#alertError").text("");
		$("#alertError").hide();


		var status = validateItemForm();

		if (status != true) {
			$("#alertError").text(status);
			$("#alertError").show();
			return;
		}

		// If valid------------------------
		var method = ($("#hidField").val() == "save") ? "POST" : "PUT";

		$.ajax({
			url : "DoctorAPI",
			type : method,
			data : $("#doctorRegister").serialize(),
			dataType : "text",
			complete : function(response, status) {
				registerComplete(response.responseText, status);
			}
		});
	});
	
	$(document).on(
			"click",
			".btnUpdate",
			function(event) {
				$("#hidField").val(
						$(this).closest("tr").find('#hidFieldUpdate').val());
				$("#nic").val($(this).closest("tr").find('td:eq(0)').text());
				$("#firstName").val($(this).closest("tr").find('td:eq(1)').text());
				$("#lastName").val($(this).closest("tr").find('td:eq(2)').text());
				$("#contactNumber").val($(this).closest("tr").find('td:eq(3)').text());
			//	$("#genderMale").val($(this).closest("tr").find('td:eq(3)').text());
				$("#category").val($(this).closest("tr").find('td:eq(5)').text());
			//	$("#hospitalName").val($(this).closest("tr").find('td:eq(6)').text());
				$("#email").val($(this).closest("tr").find('td:eq(7)').text());
				$("#password").val($(this).closest("tr").find('td:eq(8)').text());
			});
	
	function registerComplete(response, status)
	{
		if (status == "success")
		{
			var resultSet = JSON.parse(response);
			if (resultSet.status.trim() == "success")
			{
				$("#alertSuccess").text("Successfully saved.");
				$("#alertSuccess").show();
				$("#divItemsGrid").html(resultSet.data);
			} 
			else if (resultSet.status.trim() == "error")
			{
				$("#alertError").text(resultSet.data);
				$("#alertError").show();
			}
		} 
		else if (status == "error")
		{
			$("#alertError").text("Error while saving.");
			$("#alertError").show();
		} 
		else
		{
			$("#alertError").text("Unknown error while saving..");
			$("#alertError").show();
		}
		
		$("#hidField").val("save");
		$("#doctorRegister")[0].reset();
	}
	
	$(document).on("click", ".btnRemove", function(event)
			{
				$.ajax(
				{
					url : "DoctorAPI",
					type : "DELETE",
					data : "nic=" + $(this).data("nic"),
					dataType : "text",
					complete : function(response, status)
					{
						deleteComplete(response.responseText, status);
					}
				});
			});

	// Delete
	function deleteComplete (response, status)
	{
		if (status == "success")
		{
			var resultSet = JSON.parse(response);
			
			if (resultSet.status.trim() == "success")
			{
				$("#alertSuccess").text("Successfully deleted.");
				$("#alertSuccess").show();
				$("#divItemsGrid").html(resultSet.data);
			} 
			else if (resultSet.status.trim() == "error")
			{
				$("#alertError").text(resultSet.data);
				$("#alertError").show();
			}
		} 
		else if (status == "error")
		{
			$("#alertError").text("Error while deleting.");
			$("#alertError").show();
		} 
		else
		{
			$("#alertError").text("Unknown error while deleting..");
			$("#alertError").show();
		}
	}


	// Validation
	function validateItemForm()
	{
		// NIC is required
		if ($("#nic").val().trim() == "")
		{
			return "Insert NIC";
		}
		
		// name is required
		if ($("#firstName").val().trim() == "")
		{
			return "Insert first name";
		}
		
		// last name is required
		if ($("#lastName").val().trim() == "")
		{
			return "Insert last name";
		}
		
		// contact number is required
		if ($("#contactNumber").val().trim() == "")
		{
			return "Insert contact number";
		}
		
		// category is required
		if ($("#category").val().trim() == "")
		{
			return "Insert category";
		}
		
		// email is required
		if ($("#email").val().trim() == "")
		{
			return "Insert Item Price.";
		}
		
		// password is required
		if ($("#password").val().trim() == "")
		{
			return "Insert Item Description.";
		}
		
		return true;
	}	
		
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
	else{
		$("#fName_error").hide();
	}		
}

function checkLastName(){
	if($("#lastName").val().trim() == ""){
		$("#lName_error").text("Last name cannot be empty");
		$("#lName_error").show();
	}
	else {
		$("#lName_error").hide();
	}
}

//Category validation
function checkCategory(){
	if ($("#category").val().trim() == ""){
		$("#category_error").text("Category cannot be empty");
		$("#category_error").show();
	 } 
	else{
		$("#category_error").hide();
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