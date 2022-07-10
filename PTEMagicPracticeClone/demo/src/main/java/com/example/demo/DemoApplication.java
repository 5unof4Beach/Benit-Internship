package com.example.demo;

import com.example.demo.Questions.Question;
import com.example.demo.Questions.QuestionRepo;
import com.example.demo.Role.Role;
import com.example.demo.Role.RoleRepo;
import com.example.demo.User.User;
import com.example.demo.User.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;

@SpringBootApplication
public class DemoApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}


	PasswordEncoder passwordEncoder;
	UserRepository userRepository;

	QuestionRepo questionRepo;
	RoleRepo roleRepo;

	@Autowired
	public DemoApplication(QuestionRepo questionRepo, RoleRepo roleRepo,PasswordEncoder passwordEncoder, UserRepository userRepository) {
		this.passwordEncoder = passwordEncoder;
		this.userRepository = userRepository;
		this.roleRepo = roleRepo;
		this.questionRepo = questionRepo;
	}

	public void createQuestion(){
		System.out.println("Data creation started...");
		Question q1 = new Question();
		q1.setQuestion("Mô hình tổng quát đảm bảo an toàn thông tin và hệ thống thông tin  thường gồm các lớp:");
		List<String> ans = new ArrayList<>();
		ans.add("An ninh tổ chức, An ninh mạng và Điều khiển truy cập");
		ans.add("An ninh tổ chức, An ninh mạng và Điều khiển truy cập");
		ans.add("An ninh tổ chức, An ninh mạng và Điều khiển truy cập");
		ans.add("An ninh tổ chức, An ninh mạng và Điều khiển truy cập");
		q1.setAnswers(ans);
		q1.setCorrect("1");
		questionRepo.save(q1);
		System.out.println("Data creation complete...");
	}
	@Override
	public void run(String... args) throws Exception {
		if (roleRepo.findByName("ROLE_ADMIN") == null) {
			roleRepo.save(new Role("ROLE_ADMIN"));
		}

		if (roleRepo.findByName("ROLE_MEMBER") == null) {
			roleRepo.save(new Role("ROLE_MEMBER"));
		}

		createQuestion();


//			User admin = new User();
//			admin.setUsername("admin@gmail.com");
//			admin.setPassword(passwordEncoder.encode("123456"));
//			HashSet<Role> roles = new HashSet<>();
//			roles.add(roleRepo.findByName("ROLE_ADMIN"));
//			roles.add(roleRepo.findByName("ROLE_MEMBER"));
//			admin.setRoles(roles);
//
//			User admin2 = new User();
//			admin2.setUsername("ducbui1");
//			admin2.setPassword(passwordEncoder.encode("1"));
//			HashSet<Role> roles2 = new HashSet<>();
//			roles2.add(roleRepo.findByName("ROLE_MEMBER"));
//			admin2.setRoles(roles2);
//
//			userRepository.saveAll(List.of(admin, admin2));
	}
}
