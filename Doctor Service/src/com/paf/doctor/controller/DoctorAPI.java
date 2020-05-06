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

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}


	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		Doctor doctor = new Doctor (
				request.getParameter("nic"),
				request.getParameter("firstName"),
				request.getParameter("lastName"),
				request.getParameter("contactNumber"),
				request.getParameter("gender"),
				request.getParameter("category"),
				request.getParameter("hospitalName"),
				request.getParameter("email"),
				request.getParameter("password"));
		
		String output = DoctorDAO.registerDoctor(doctor);
		
		response.getWriter().write(output);
	
	}

	// Convert request parameters to a Map
	private static Map getParasMap(HttpServletRequest request)
	{
	 Map<String, String> map = new HashMap<String, String>();
	try
	 {
	 Scanner scanner = new Scanner(request.getInputStream(), "UTF-8");
	 String queryString = scanner.hasNext() ?
	 scanner.useDelimiter("\\A").next() : "";
	 scanner.close();
	 String[] params = queryString.split("&");
	 for (String param : params)
	 { 
		 String[] p = param.split("=");
		 map.put(p[0], p[1]);
		 }
		 }
		catch (Exception e)
		 {
		 }
		return map;
		}
	 }

	protected void doPut(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		Map paras = getParasMap(request);
		
		Doctor doctor = new Doctor(
				paras.get("nic").toString(),
				paras.get("firstName").toString(),
				paras.get("lastName").toString(),
				paras.get("contactNumber").toString(),
				paras.get("gender").toString(),
				paras.get("category").toString(),
				paras.get("hospitalName").toString(),
				paras.get("email").toString(),
				paras.get("password").toString());
		
		String output = DoctorDAO.updateDoctor(doctor);
		
		response.getWriter().write(output); 
		
		
	}

	
	protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

	Map paras = getParasMap(request);
	
		Doctor doctor = new Doctor(paras.get("nic").toString());
			
			String output = DoctorDAO.deleteDoctor(doctor);
			
			response.getWriter().write(output); 
	}
	
}
	



