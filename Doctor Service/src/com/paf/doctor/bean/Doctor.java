package com.paf.doctor.bean;

public class Doctor {


	private int doctorID;
	private String nic;
	private String firstName;
	private String lastName;
	private String contactNumber;
	private String gender;
	private String category;
	private String hospitalName;
	private String email;
	private String password;
	
public Doctor() {
		
	}
	
	public Doctor(String email, String password) {
		this.email = email;
		this.password = password;
	}
	
	public Doctor(String nic, String firstName, String lastName, String contactNumber, String gender, String category,
			String hospitalName, String email, String password) {
	
		this.nic = nic;
		this.firstName = firstName;
		this.lastName = lastName;
		this.contactNumber = contactNumber;
		this.gender = gender;
		this.category = category;
		this.hospitalName = hospitalName;
		this.email = email;
		this.password = password;
	}
	public int getDoctorID() {
		return doctorID;
	}
	public void setDoctorID(int doctorID) {
		this.doctorID = doctorID;
	}
	public String getNic() {
		return nic;
	}
	public void setNic(String nic) {
		this.nic = nic;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getContactNumber() {
		return contactNumber;
	}
	public void setContactNumber(String contactNumber) {
		this.contactNumber = contactNumber;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public String getHospitalName() {
		return hospitalName;
	}
	public void setHospitalName(String hospitalName) {
		this.hospitalName = hospitalName;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
}
