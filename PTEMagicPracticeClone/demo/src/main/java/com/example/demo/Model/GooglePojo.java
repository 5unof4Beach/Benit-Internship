package com.example.demo.Model;


import lombok.Data;

@Data
public class GooglePojo {

	private String id;
	private String email;
	private boolean verified_email;
	private String name;
	private String given_name;
	private String family_name;
	private String picture;
	private String locale;
}
