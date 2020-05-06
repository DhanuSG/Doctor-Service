package com.paf.doctor.model;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;

import com.paf.doctor.bean.Doctor;

public class DoctorDAO {

	public static Connection getConnection( ) {
		
		Connection con = null;
		
		try {
			Class.forName("com.mysql.jdbc.Driver");
			con = DriverManager.getConnection("jdbc:mysql://localhost:3306/doctorService", "root", "root");
		
		} catch(Exception e) {
			e.printStackTrace();
		}
		
		return con;
	}
	
	public static String registerDoctor(Doctor doctor) {
		
		String output = null;
		
		try {
			Connection con = getConnection();
		
			String query = "insert into doctor_registration(nic,firstName,lastName,contactNumber,gender,category,hospitalName,email,password) values(?, ?, ?, ?, ?, ?, ?, ?, ?)";
			
			PreparedStatement ps = con.prepareStatement(query);
			
			ps.setString(1, doctor.getNic());
			ps.setString(2, doctor.getFirstName());
			ps.setString(3, doctor.getLastName());
			ps.setString(4, doctor.getContactNumber());
			ps.setString(5, doctor.getGender());
			ps.setString(6, doctor.getCategory());
			ps.setString(7, doctor.getHospitalName());
			ps.setString(8, doctor.getEmail());
			ps.setString(9, doctor.getPassword());
			
			ps.executeUpdate();
			
			output = "Doctor Registered Successfully";
			
		} catch (Exception e) {
			e.printStackTrace();
			
			output = "Error in registration process";
		}
		
		return output;
		
	}
	
	public static String doctorLogin(Doctor doctor) {
		
		String status = "invalid user";
		
		try {
			Connection con = getConnection();
			
			String query = "select password from doctor_registration where email = ?";
			
			PreparedStatement ps = con.prepareStatement(query);
			
			ps.setString(1, doctor.getEmail());
			
			ResultSet rs = ps.executeQuery(query);
			
			while(rs.next()) {
				System.out.println("ddd");
				 if (doctor.getPassword() == rs.getString("password") ) {
					 status = "valid user";
				 }
			}
			
			
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		
		return status;
		
	}
	
	public static String updateDoctor(Doctor doctor) {
		String status = null;
		
		try {
			Connection con = getConnection();
			
			String query = "update doctor_registration set firstName=?, lastName=?, contactNumber=?, gender=?, category=?, hospitalName=?,"
					+ "email=?, password=? where nic=?";
			
			PreparedStatement ps = con.prepareStatement(query);
					
			ps.setString(1, doctor.getFirstName());
			ps.setString(2, doctor.getLastName());
			ps.setString(3, doctor.getContactNumber());
			ps.setString(4, doctor.getGender());
			ps.setString(5, doctor.getCategory());
			ps.setString(6, doctor.getHospitalName());
			ps.setString(7, doctor.getEmail());
			ps.setString(8, doctor.getPassword());
			ps.setString(9, doctor.getNic());
			
			ps.executeUpdate();
			
			status = "Doctor Update Successfully";
		} catch (Exception e) {
			e.printStackTrace();
			status = "Error in update process";
		}
		
		return status;
	}
	
	public static String deleteDoctor(Doctor doctor) {
		String status = null;
		
		try {
			Connection con = getConnection();
			
			String query = "delete from doctor_registration where nic=?";
			
			PreparedStatement ps = con.prepareStatement(query);
			
			ps.setString(1, doctor.getNic());
			
			ps.execute();
			
			status = "Doctor deleted successfuly";
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
			status = "Error in deleting process.";
		}
		
		return status;
		
	}
	
	public static String doctorList() {
		
		String output = "";
		
		try {
			Connection con = getConnection();
			
			output += "<head>" + 
					"<link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css\"" + 
					"integrity=\"sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh\" crossorigin=\"anonymous\">" + 
					"</head>" + 
					"<body>" +
					"<table border=\"1\"><tr><th>NIC</th><th>First Name</th><th>Last Name</th><th>Contact Number</th>" +
					"<th>Gender</th>" + "<th>Category</th>" + "<th>Hospital Name</th>" + "<th>Email</th>" + "<th>Password</th>" +
					"<th>Update</th><th>Remove</th></tr>";
			
			String query = "select nic, firstName, lastName, contactNumber, gender, category, hospitalName, email, password from doctor_registration";
			Statement statement = con.createStatement();
			ResultSet rs = statement.executeQuery(query);
			
			while(rs.next()) {
				String nic = rs.getString("nic");
				String firstName = rs.getString("firstName");
				String lastName = rs.getString("lastName");
				String contactNumber = rs.getString("contactNumber");
				String gender = rs.getString("gender");
				String category = rs.getString("category");
				String hospitalName = rs.getString("hospitalName");
				String email = rs.getString("email");
				String password = rs.getString("password");
				
				output += "<tr><td>" + nic + "</td>";
				output += "<td>" + firstName + "</td>";
				output += "<td>" + lastName + "</td>";
				output += "<td>" + contactNumber + "</td>";
				output += "<td>" + gender + "</td>";
				output += "<td>" + category + "</td>";
				output += "<td>" + hospitalName + "</td>";
				output += "<td>" + email + "</td>";
				output += "<td>" + password + "</td>";
				output += "<td><button type=\"button\" class=\"btn btn-primary\" id=\"updateButton\">Update</button></td>";
				output += "<td><button type=\"button\" class=\"btn btn-danger\" id=\"removeButton\">Remove</button></td>";
				output += "</tr>";
			}
		}catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		
		output+= "</table></body>";
		return output;
	}
	
}
