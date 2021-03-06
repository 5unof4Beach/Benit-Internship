package com.example.demo.Util;

import com.example.demo.Model.GoogleUser;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.fluent.Form;
import org.apache.http.client.fluent.Request;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Component
public class GoogleUtils {

	@Autowired
	private Environment env;

	public JsonNode getToken(final String code) throws IOException {
		String link = env.getProperty("google.link.get.token");

		System.out.println("Getting Token");

		String response = null;
		try{
			//clientID, Secret, Redirect phai dung thi moi lay duoc token
				response = Request.Post(link)
				.bodyForm(Form.form()
						.add("redirect_uri", env.getProperty("google.redirect.uri"))
						.add("client_id", env.getProperty("google.app.id"))
						.add("client_secret", env.getProperty("google.app.secret"))
						.add("grant_type", "authorization_code")
						.add("code", code)
						.build())
				.execute().returnContent().asString();
		}catch (Exception e){
			System.err.println(e);
		}

		System.out.println(response);
		ObjectMapper mapper = new ObjectMapper();
		return mapper.readTree(response);
	}

	public GoogleUser getUserInfo(final String accessToken) throws IOException {
		String link = env.getProperty("google.link.get.user_info") + accessToken;
		String response = Request.Get(link).execute().returnContent().asString();
		ObjectMapper mapper = new ObjectMapper();
		GoogleUser googlePojo = mapper.readValue(response, GoogleUser.class);
		System.out.println(googlePojo);
		return googlePojo;

	}

	public UserDetails buildUser(GoogleUser googlePojo) {
		boolean enabled = true;
		boolean accountNonExpired = true;
		boolean credentialsNonExpired = true;
		boolean accountNonLocked = true;
		List<GrantedAuthority> authorities = new ArrayList<GrantedAuthority>();
		authorities.add(new SimpleGrantedAuthority("ROLE_USER"));
		UserDetails userDetail = new User(googlePojo.getName(),
				"", enabled, accountNonExpired, credentialsNonExpired, accountNonLocked, authorities);
		return userDetail;
	}

}
