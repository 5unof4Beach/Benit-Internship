package com.example.demo;

import com.example.demo.Questions.Question.Question;
import com.example.demo.Questions.QuestionRepo;
import com.example.demo.Questions.QuestionService;
import com.example.demo.Role.Role;
import com.example.demo.Role.RoleRepo;
import com.example.demo.User.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
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

	QuestionRepo questionRepo;

	QuestionService questionService;
	RoleRepo roleRepo;

	@Autowired
	public DemoApplication(QuestionService questionService,QuestionRepo questionRepo, RoleRepo roleRepo,PasswordEncoder passwordEncoder, UserRepository userRepository) {
		this.passwordEncoder = passwordEncoder;
		this.userRepository = userRepository;
		this.roleRepo = roleRepo;
		this.questionRepo = questionRepo;
		this.questionService = questionService;
	}

	public void createQuestion(){
		System.out.println("Data creation started...");
		Question q1 = new Question();
		q1.setIndex(questionService.lastIndex() + 1);
		q1.setParagraph("Policymakers must confront the dilemma that fossil fuels continue to be an indispensable source of energy even though burning them produces atmospheric accumulations of carbon dioxide that increase the likelihood of potentially disastrous global climate change. Currently, the technology that would capture carbon dioxide emitted by power plants and sequester it harmlessly underground or undersea instead of releasing it into the atmosphere might double the cost of generating electricity. But because sequestration does not affect the cost of electricity transmission and distribution, delivered prices will rise less, by no more than 50 percent. Research into better technologies for capturing carbon dioxide will undoubtedly lead to lowered costs.");
		q1.setQuestion("The passage implies which of the following about the current cost of generating electricity?");
		List<String> ans = new ArrayList<>();
		ans.add("It is higher than it would be if better technologies for capturing carbon dioxide were available.");
		ans.add("It is somewhat less than the cost of electricity transmission and distribution.");
		ans.add("It constitutes at most half of the delivered price of electricity.");
		ans.add("It is dwelt on by policymakers to the exclusion of other costs associated with electricity delivery.");
		ans.add("It is not fully recovered by the prices charged directly to electricity consumers.");
		q1.setAnswers(ans);
		q1.setCorrect("2");
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
}
