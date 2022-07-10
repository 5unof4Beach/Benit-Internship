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
		q1.setParagraph("These resolutions, demanding in effect that slavery be thus safeguarded-almost to the extent of introducing it into the free states-really foreshadowed the Democratic platform of 1860 which led to the great split in that party, the victory of the Republicans under Lincoln, the subsequent secession of the more radical southern states, and finally the Civil War, for it was inevitable that the North, when once aroused, would bitterly resent such pro-slavery demands.");
		q1.setQuestion("Which of the following best summarises the main message of this text?");
		List<String> ans = new ArrayList<>();
		ans.add("Differing opinions on slavery contributed to the Civil War.");
		ans.add("The North expected and demanded Civil War.");
		ans.add("The radical southern states instigated the Civil War.");
		ans.add("Disputes between political parties had little effect on the Civil War.");
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
