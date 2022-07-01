package com.example.demo;

import com.example.demo.User.User;
import com.example.demo.User.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.password.PasswordEncoder;

@SpringBootApplication
public class DemoApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}


	PasswordEncoder passwordEncoder;
	UserRepository userRepository;

	@Autowired
	public DemoApplication(PasswordEncoder passwordEncoder, UserRepository userRepository) {
		this.passwordEncoder = passwordEncoder;
		this.userRepository = userRepository;
	}

	@Override
	public void run(String... args) throws Exception {
		User user = new User();
		user.setUsername("ducbui");
		user.setPw(passwordEncoder.encode("1"));
		userRepository.save(user);
		System.out.println(user);
	}
}
