//Hide alerts-Register
$(document).ready(function()
{
$("#alertSuccess").hide();
$("#alertError").hide();
}); 
 
//Hide alerts-Nic
 $(document).ready(function()
{
$("#alertSuccessNic").hide();
$("#alertErrorNic").hide();
}); 
 
//Adding event handler to Register button 
$(document).on("click", "#btnRegister", function(event)
{
});
 
//Clear status messages 
 $("#alertSuccess").text("");
 $("#alertSuccess").hide();
 $("#alertError").text("");
 $("#alertError").hide();

// Form validation
var status = validateForm();
//If not valid
if (status != true)
{
$("#alertError").text(status);
$("#alertError").show();
return;
}
