package com.example.demo.API;

import com.example.demo.common.GooglePojo;
import com.example.demo.common.GoogleUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;

@Controller
public class BaseController {
	
	@Autowired
	private GoogleUtils googleUtils;

	@RequestMapping(value = { "/", "/login" })
	public String login() {
		return "login";
	}

	@RequestMapping("/login-google")
	// màn hình đăng nhập tài khoản sau khi chọn tài khoản sẽ trả về request chứa code đến endpoint này
	public String loginGoogle(HttpServletRequest request) throws IOException {
		String code = request.getParameter("code");
		
		if (code == null || code.isEmpty()) {
			return "redirect:/login?google=error";
		}

		String accessToken = googleUtils.getToken(code);
		System.out.println("code: " + code);
		System.out.println("token: " + accessToken);

		GooglePojo googlePojo = googleUtils.getUserInfo(accessToken);
		UserDetails userDetail = googleUtils.buildUser(googlePojo);

		UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(userDetail, null,
				userDetail.getAuthorities());
		authentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
		SecurityContextHolder.getContext().setAuthentication(authentication);
		return "redirect:/user";
	}

	@RequestMapping("/user")
	public String user() {
		return "user";
	}

	@RequestMapping("/admin")
	public String admin() {
		return "admin";
	}

	@RequestMapping("/403")
	public String accessDenied() {
		return "403";
	}
}
