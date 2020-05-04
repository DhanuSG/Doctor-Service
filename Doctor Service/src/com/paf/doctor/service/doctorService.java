package com.paf.doctor.service;
import com.paf.doctor.bean.Doctor;
import com.paf.doctor.model.DoctorDAO;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;

@Path("/doctor")
public class doctorService {

	@POST
	@Path("/doctor_registration")
	@Consumes(MediaType.APPLICATION_FORM_URLENCODED)
	@Produces(MediaType.TEXT_PLAIN)
	public String registerDoctor(@FormParam("nic") String nic,
			@FormParam("firstName") String firstName,
			@FormParam("lastName") String lastName,
			@FormParam("contactNumber") String contactNumber,
			@FormParam("gender") String gender,
			@FormParam("category") String category,
			@FormParam("hospitalName") String hospitalName,
			@FormParam("email") String email,
			@FormParam("password") String password) {
		
		String status = null;
		
		Doctor d = new Doctor(nic, firstName, lastName, contactNumber, gender, category, hospitalName, email, password);
		
		status = DoctorDAO.registerDoctor(d);
		
		return status;
	}
	
	@POST
	@Path("/doctor_login")
	@Consumes(MediaType.APPLICATION_FORM_URLENCODED)
	@Produces(MediaType.TEXT_PLAIN)
	public String loginPatient(@FormParam("email") String email,
			@FormParam("password") String password) {
		
		String status = "Invalid user";
		
		Doctor d = new Doctor(email, password);
		
		status = DoctorDAO.doctorLogin(d);
		
		return status;
	}
	
	@PUT
	@Path("/doctor_update")
	@Consumes(MediaType.APPLICATION_FORM_URLENCODED)
	@Produces(MediaType.TEXT_PLAIN)
	public String updateDoctor(
			@FormParam("nic") String nic,
			@FormParam("firstName") String firstName,
			@FormParam("lastName") String lastName,
			@FormParam("contactNumber") String contactNumber,
			@FormParam("gender") String gender,
			@FormParam("category") String category,
			@FormParam("hospitalName") String hospitalName,
			@FormParam("email") String email,
			@FormParam("password") String password){
		
		Doctor d = new Doctor(nic, firstName, lastName, contactNumber, gender, category, hospitalName, email, password);
		
		String output = DoctorDAO.updateDoctor(d);
		
		return output;
	}
	
	@GET
	@Path("/doctor_list")
	@Produces(MediaType.TEXT_HTML)
	public String getDoctorList() {
		
		return DoctorDAO.doctorList();
		
	}
	
	@DELETE
	@Path("/delete_doctor")
	@Consumes(MediaType.APPLICATION_FORM_URLENCODED)
	@Produces(MediaType.TEXT_PLAIN)
	public String deleteDoctor(@FormParam("nic") String nic) {
		
		Doctor d = new Doctor();
		
		d.setNic(nic);
		
		String output = DoctorDAO.deleteDoctor(d);
		
		return output;
	}
	
}
