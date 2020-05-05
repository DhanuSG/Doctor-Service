<%@page import="com.paf.doctor.model.DoctorDAO"%>
<%@page import="com.paf.doctor.bean.Doctor"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    
<%
	if(request.getParameter("nic") != null){
	String nic = request.getParameter("nic");
	String firstName = request.getParameter("firstName");
	String lastName = request.getParameter("lastName");
	String contactNumber = request.getParameter("contactNumber");
	String gender = request.getParameter("gender");
	String category = request.getParameter("category");
	String hospitalName = request.getParameter("hospitalName");
	String email = request.getParameter("email");
	String password = request.getParameter("password");
	
	Doctor d = new Doctor(nic,firstName, lastName, contactNumber, gender, category, hospitalName, email, password);
	String status = DoctorDAO.registerDoctor(d);
	
	session.setAttribute("doctor_registration_status", status);
	}
%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Doctor Registration</title>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" 
integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
<link rel="stylesheet" href="style.css">

<script src="Components/jquery-3.5.0.min.js"></script>
<script src="Components/doctor.js"></script>

</head>
<body>
	<div class="container">
	<div class="row">
	<div class = "col-12">
        <fieldset>
            <h3>
                <span> Doctor Registration</span>
            </h3>

            <form id="doctorRegister" action="doctor-register.jsp">
              
                <!-- NIC -->
                <div class="form-group row">
                    <label for="nic" class="col-sm-2 col-form-label">NIC <span class="required-sign">(*)</span></label>
                    <div class="col-sm-10">
                        <input type="text" name="nic" id="nic" class="form-control">
                        <span class="error_message" id="nic_error"></span>
                    </div>
                </div>
       
				<!-- first name -->
                <div class="form-group row">
                    <label for="firstName" class="col-sm-2 col-form-label">First Name <span class="required-sign">(*)</span></label>
                    <div class="col-sm-10">
                        <input type="text" name="firstName" class="form-control" id="firstName">
                        <span class="error_message" id="fName_error"></span>
                    </div>
                </div>
                
                <!-- last name -->
                <div class="form-group row">
                    <label for="last_name" class="col-sm-2 col-form-label">Last Name <span class="required-sign">(*)</span></label>
                    <div class="col-sm-10">
                        <input type="text" name="lastName" class="form-control" id="lastName">
                        <span class="error_message" id="lName_error"></span>
                    </div>
                </div>
                
                <!-- contact number -->
                <div class="form-group row">
                    <label for="contactNumber" class="col-sm-2 col-form-label">Contact Number <span class="required-sign">(*)</span></label>
                    <div class="col-sm-10">
                        <input type="text" id="contactNumber" name="contactNumber" class="form-control">
           					<span class="error_message" id="contact_error"> </span>
                    </div>
                </div>
                
                <!-- gender -->
                <fieldset class="form-group">
                    <div class="row">
                      <legend class="col-form-label col-sm-2 pt-0">Gender <span class="required-sign">(*)</span></legend>
                      <div class="col-sm-10">
                        <div class="form-check">
                          <input class="form-check-input" id="dob" type="radio" name="gender" value="male" checked>
                          <label class="form-check-label" for="male">
                            Male
                          </label>
                        </div>
                        <div class="form-check">
                          <input class="form-check-input" id="dob" type="radio" name="gender" value="female">
                          <label class="form-check-label" for="female">
                            Female
                          </label>
                        </div>
                        <span class="error_message" id="gender_error"></span>
                      </div>
                    </div>
                </fieldset>
                
                <!-- category -->
                <div class="form-group row">
                    <label for="category" class="col-sm-2 col-form-label">Category <span class="required-sign">(*)</span></label>
                    <div class="col-sm-10">
                        <input type="text" id="category" name="category"  class="form-control">
           				<span class="error_message" id="category_error"> </span>
                    </div>
                </div>
                
                <!-- hospital -->
                <div class="form-group row">
                    <label for="hospitalName" class="col-sm-2 col-form-label">Hospital Name <span class="required-sign">(*)</span></label>
                    <div class="col-sm-10">
                        <select id="hospitalName" name ="hospitalName">
  							<option value="Asiri Hospital">Asiri Hospital</option>
  							<option value="Lanka Hospitals">Lanka Hospitals</option>
  							<option value="Ninewells Hospital">Ninewells Hospital</option>
  							<option value="Winlanka Hospital">Winlanka Hospital</option>
						</select>
                   </div>
                </div>
                
                <!-- email -->
                <div class="form-group row">
                    <label for="email" class="col-sm-2 col-form-label">Email <span class="required-sign">(*)</span></label>
                    <div class="col-sm-10">
                        <input type="email" name="email" id="email" class="form-control">
                        <span class="error_message" id="email_error"></span>
                    </div>
                </div>
                
                <!-- password -->
                <div class="form-group row">
                    <label for="password" class="col-sm-2 col-form-label">Password <span class="required-sign">(*)</span></label>
                    <div class="col-sm-10">
                        <input type="password" name="password" class="form-control" id="password">
                        <span class="error_message" id="password_error"></span>
                    </div>
                </div>
                
                <!--retype password -->
                <div class="form-group row">
                    <label for="retype_password" class="col-sm-2 col-form-label">Confirm Password <span class="required-sign">(*)</span></label>
                    <div class="col-sm-10">
                        <input type="password" name="retype_password" class="form-control" id="confirmPassword">
                        <span class="error_message" id="confirmPassword_error"></span>
                    </div>
                </div>
                
                <!-- sign in button -->
                <div class="form-group row">
                    <div class="col-sm-10">
                      <button type="submit" class="btn btn-success" id="signin-button">Register</button>
                    </div>
                </div>
                
            </form>
            
            <div id="alertSuccess"class="alert alert-success"></div>
            <div id="alertError" class="alert alert-danger"></div>
            
        </fieldset>
    </div>
    </div>

    <div class ="row">
    <div class="col-12" id="displayDoctors">
    abcd
    </div>   
    </div>
  </div>    
</body>
</html>