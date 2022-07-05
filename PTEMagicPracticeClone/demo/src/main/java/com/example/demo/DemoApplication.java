package com.example.demo;

import com.example.demo.Role.Role;
import com.example.demo.Role.RoleRepo;
import com.example.demo.User.User;
import com.example.demo.User.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.HashSet;
import java.util.List;

@SpringBootApplication
public class DemoApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}


	PasswordEncoder passwordEncoder;
	UserRepository userRepository;
	RoleRepo roleRepo;

	@Autowired
	public DemoApplication(RoleRepo roleRepo,PasswordEncoder passwordEncoder, UserRepository userRepository) {
		this.passwordEncoder = passwordEncoder;
		this.userRepository = userRepository;
		this.roleRepo = roleRepo;
	}

	@Override
	public void run(String... args) throws Exception {
		if (roleRepo.findByName("ROLE_ADMIN") == null) {
			roleRepo.save(new Role("ROLE_ADMIN"));
		}

		if (roleRepo.findByName("ROLE_MEMBER") == null) {
			roleRepo.save(new Role("ROLE_MEMBER"));
		}


			User admin = new User();
			admin.setUsername("admin@gmail.com");
			admin.setPassword(passwordEncoder.encode("123456"));
			HashSet<Role> roles = new HashSet<>();
			roles.add(roleRepo.findByName("ROLE_ADMIN"));
			roles.add(roleRepo.findByName("ROLE_MEMBER"));
			admin.setRoles(roles);
//
			User admin2 = new User();
			admin2.setUsername("member@gmail.com");
			admin2.setPassword(passwordEncoder.encode("123456"));
			HashSet<Role> roles2 = new HashSet<>();
			roles2.add(roleRepo.findByName("ROLE_MEMBER"));
			admin2.setRoles(roles2);

			userRepository.saveAll(List.of(admin, admin2));
	}
}
