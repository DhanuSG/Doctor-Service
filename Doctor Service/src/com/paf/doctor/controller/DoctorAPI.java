package com.paf.doctor.controller;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.paf.doctor.bean.Doctor;
import com.paf.doctor.model.DoctorDAO;

@WebServlet("/DoctorAPI")
public class DoctorAPI extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
   
    public DoctorAPI() {
        super();
      
    }

    private static Map getParasMap(HttpServletRequest request) {
		Map<String, String> map = new HashMap<String, String>();
    	
		try {
			Scanner scanner = new Scanner(request.getInputStream(), "UTF-8");
			String queryString = scanner.hasNext() ? scanner.useDelimiter("\\A").next() : "";
			scanner.close();
			
			String[] params = queryString.split("&");
			for(String param : params) {
				String[] p = param.split("=");
				map.put(p[0], p[1]);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		
    	return map;
    }
    
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
				String nic = request.getParameter("nic");
				String firstName = request.getParameter("firstName");
				String lastName = request.getParameter("lastName");
				String contactNumber = request.getParameter("contactNumber");
				String gender = request.getParameter("gender");
				String category = request.getParameter("category");
				String hospitalName = request.getParameter("hospitalName");
				String email = request.getParameter("email");
				String password = request.getParameter("password");
		
		System.out.println(nic);
		
		Doctor doctor = new Doctor(nic,firstName, lastName, contactNumber, gender, category, hospitalName, email, password);
		
		String output = DoctorDAO.registerDoctor(doctor);
		
		response.getWriter().write(output);
	
	}
	 
	protected void doPut(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		Map paras = getParasMap(request);
		
				String nic = paras.get("nic").toString();
				String firstName = paras.get("firstName").toString();
				String lastName = paras.get("lastName").toString();
				String contactNumber = paras.get("contactNumber").toString();
				String gender = paras.get("gender").toString();
				String category = paras.get("category").toString();
				String hospitalName = paras.get("hospitalName").toString();
				String email = paras.get("email").toString();
				String password = paras.get("password").toString();
		
				Doctor doctor = new Doctor(nic,firstName, lastName, contactNumber, gender, category, hospitalName, email, password);
				
		String output = DoctorDAO.updateDoctor(doctor);
		
		response.getWriter().write(output); 
				
	}
	
	protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

	Map paras = getParasMap(request);
	
				String nic = paras.get("nic").toString();
	
				Doctor doctor = new Doctor(nic);
	
		String output = DoctorDAO.deleteDoctor(doctor);
	
		response.getWriter().write(output);			
	}
	
}
	



