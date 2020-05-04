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
              
                <div class="form-group row">
                    <label for="nic" class="col-sm-2 col-form-label">NIC</label>
                    <div class="col-sm-10">
                        <input type="text" id = "nic" name="nic" class="form-control">      
           				<div id="alertErrorNic" class="alert alert-danger"></div>         				
                    </div>
                </div>
       
                <div class="form-group row">
                    <label for="firstName" class="col-sm-2 col-form-label">First Name</label>
                    <div class="col-sm-10">
                        <input type="text" id="firstName" name="firstName" class="form-control">
           					<div id="alertErrorFirstName" class="alert alert-danger"> </div>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="lastName" class="col-sm-2 col-form-label">Last Name</label>
                    <div class="col-sm-10">
                        <input type="text" id="lastName" name="lastName" class="form-control">
           					<div id="alertErrorLastName" class="alert alert-danger"> </div>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="contactNumber" class="col-sm-2 col-form-label">Contact Number</label>
                    <div class="col-sm-10">
                        <input type="text" id="contactNumber" name="contactNumber" class="form-control">
           					<div id="alertErrorContactNumber" class="alert alert-danger"> </div>
                    </div>
                </div>
                <fieldset class="form-group">
                    <div class="row">
                      <lable for="gender" class="col-sm-2 col-form-label"> Gender </lable>
                      <div class="col-sm-10">
                        <div class="form-check">
                          <input class="form-check-input" type="radio" id="male" name="gender" value="male" checked>
                          <label class="form-check-label" for="male">
                            Male
                          </label>
                        </div>
                        <div class="form-check">
                          <input class="form-check-input" type="radio" id="female" name="gender" value="female">
                          <label class="form-check-label" for="female">
                            Female
                          </label>
                        </div>
                      </div>
                    </div>
                </fieldset>
                <div class="form-group row">
                    <label for="category" class="col-sm-2 col-form-label">Category</label>
                    <div class="col-sm-10">
                        <input type="text" id="category" name="category"  class="form-control">
           					<div id="alertErrorCategory" class="alert alert-danger"> </div>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="hospitalName" class="col-sm-2 col-form-label">Hospital Name</label>
                    <div class="col-sm-10">
                        <select id="hospitalName" name ="hospitalName">
  							<option value="Asiri Hospital">Asiri Hospital</option>
  							<option value="Lanka Hospitals">Lanka Hospitals</option>
  							<option value="Ninewells Hospital">Ninewells Hospital</option>
  							<option value="Winlanka Hospital">Winlanka Hospital</option>
						</select>
                   </div>
                </div>
                <div class="form-group row">
                    <label for="email" class="col-sm-2 col-form-label">Email</label>
                    <div class="col-sm-10">
                        <input type="email" id="email" name="email"  class="form-control">
           					<div id="alertErrorEmail" class="alert alert-danger"> </div>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="password" class="col-sm-2 col-form-label">Password</label>
                    <div class="col-sm-10">
                        <input type="password" id="password" name="password" class="form-control">
           					<div id="alertErrorPassword" class="alert alert-danger"> </div>
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-sm-10">
                      <button type="submit" id="btnRegister" class="btn btn-success">Register</button>
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