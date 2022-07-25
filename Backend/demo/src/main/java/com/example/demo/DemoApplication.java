package com.example.demo;

import com.example.demo.Model.Reading.SingleAnswerQuestion;
import com.example.demo.Model.Result.SingleAnswerResult;
import com.example.demo.Repository.Reading.SingleAnswerQuestionRepo;
import com.example.demo.Service.EmailSenderService;
import com.example.demo.Service.Reading.SingleAnswerQuestionService;
import com.example.demo.Repository.RoleRepo;
import com.example.demo.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.ArrayList;
import java.util.List;

@SpringBootApplication
public class DemoApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}


	PasswordEncoder passwordEncoder;
	UserRepository userRepository;

	SingleAnswerQuestionRepo singleAnswerQuestionRepo;

	SingleAnswerQuestionService singleAnswerQuestionService;
	RoleRepo roleRepo;

	EmailSenderService emailSenderService;

	@Autowired
	public DemoApplication(EmailSenderService emailSenderService, SingleAnswerQuestionService singleAnswerQuestionService, SingleAnswerQuestionRepo singleAnswerQuestionRepo, RoleRepo roleRepo, PasswordEncoder passwordEncoder, UserRepository userRepository) {
		this.passwordEncoder = passwordEncoder;
		this.userRepository = userRepository;
		this.roleRepo = roleRepo;
		this.singleAnswerQuestionRepo = singleAnswerQuestionRepo;
		this.singleAnswerQuestionService = singleAnswerQuestionService;
		this.emailSenderService = emailSenderService;
	}

	public void createQuestion(){
		System.out.println("Data creation started...");


		System.out.println("Data creation complete...");
	}
	@Override
	public void run(String... args) throws Exception {
		SingleAnswerResult singleAnswerResult = new SingleAnswerResult(1L, true);

		System.out.println(singleAnswerResult);

//		if (roleRepo.findByName("ROLE_ADMIN") == null) {
//			roleRepo.save(new Role("ROLE_ADMIN"));
//		}
//
//		if (roleRepo.findByName("ROLE_MEMBER") == null) {
//			roleRepo.save(new Role("ROLE_MEMBER"));
//		}

//		createQuestion();


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

	@EventListener(ApplicationReadyEvent.class)
	public void sendMail(){
//		emailSenderService.sendEmail("suckmydick2001gta@gmail.com","Test email from Benit Internship","Test email");
	}
}
