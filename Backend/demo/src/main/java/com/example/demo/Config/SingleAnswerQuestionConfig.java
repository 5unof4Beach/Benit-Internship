package com.example.demo.Config;

import com.example.demo.Model.Reading.ParagraphReorderQuestion;
import com.example.demo.Model.Reading.SingleAnswerQuestion;
import com.example.demo.Repository.Reading.ParagraphReorderQuestionRepo;
import com.example.demo.Repository.Reading.SingleAnswerQuestionRepo;
import com.example.demo.Service.Reading.ParagraphReorderQuestionService;
import com.example.demo.Service.Reading.SingleAnswerQuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.ArrayList;
import java.util.List;

@Configuration
public class SingleAnswerQuestionConfig {
    @Autowired
    SingleAnswerQuestionService service;

    @Autowired
    SingleAnswerQuestionRepo repo;

    @Bean
    CommandLineRunner singleAnswerSetup(ParagraphReorderQuestionRepo repository) {

        return args -> {
            SingleAnswerQuestion q1 = new SingleAnswerQuestion();
            q1.setIndex(service.getTotal() + 1);
            q1.setParagraph("These resolutions, demanding in effect that slavery be thus safeguarded-almost to the extent of introducing it into the free states-really foreshadowed the Democratic platform of 1860 which led to the great split in that party, the victory of the Republicans under Lincoln, the subsequent secession of the more radical southern states, and finally the Civil War, for it was inevitable that the North, when once aroused, would bitterly resent such pro-slavery demands.");
            q1.setQuestion("Which of the following best summarises the main message of this text?");
            List<String> ans = new ArrayList<>();
            ans.add("Differing opinions on slavery contributed to the Civil War.");
            ans.add("The North expected and demanded Civil War.");
            ans.add("The radical southern states instigated the Civil War.");
            ans.add("Disputes between political parties had little effect on the Civil War.");
            q1.setAnswers(ans);
            q1.setCorrect("1");
            repo.save(q1);

            SingleAnswerQuestion q2 = new SingleAnswerQuestion();
            q2.setIndex(service.getTotal() + 1);
            q2.setParagraph("Policymakers must confront the dilemma that fossil fuels continue to be an indispensable source of energy even though burning them produces atmospheric accumulations of carbon dioxide that increase the likelihood of potentially disastrous global climate change. Currently, the technology that would capture carbon dioxide emitted by power plants and sequester it harmlessly underground or undersea instead of releasing it into the atmosphere might double the cost of generating electricity. But because sequestration does not affect the cost of electricity transmission and distribution, delivered prices will rise less, by no more than 50 percent. Research into better technologies for capturing carbon dioxide will undoubtedly lead to lowered costs.");
            q2.setQuestion("The passage implies which of the following about the current cost of generating electricity?");
            List<String> ans2 = new ArrayList<>();
            ans2.add("It is higher than it would be if better technologies for capturing carbon dioxide were available.");
            ans2.add("It is somewhat less than the cost of electricity transmission and distribution.");
            ans2.add("It constitutes at most half of the delivered price of electricity.");
            ans2.add("It is dwelt on by policymakers to the exclusion of other costs associated with electricity delivery.");
            ans2.add("It is not fully recovered by the prices charged directly to electricity consumers.");
            q2.setAnswers(ans2);
            q2.setCorrect("2");
            repo.save(q2);

            SingleAnswerQuestion q3 = new SingleAnswerQuestion();
            q3.setIndex(service.getTotal() + 1);
            q3.setParagraph("Caffeine is a natural ingredient in coffee, cocoa, tea, and chocolate, and is added to some prescription and nonprescription drugs. Despite being \"natural,\" Caffeine is also a powerful drug which greatly affects the body. In healthy, rested people, a dose of 100 milligrams (about one cup of coffee) increases alertness, banishes drowsiness, quickens reaction time, it enhances intellectual and muscular effort, and increases heart and respiratory rates. Drinking one to two cups of coffee an hour before exercise encourages the body to preserve glycogen and burn fat – something that results in greater endurance. In addition, caffeine masks fatigue. In doses above 300 milligrams, caffeine can produce sleeplessness, nervousness, irritability, headaches, heart palpitations, and muscle twitches. Caffeine is also habit-forming, and those who try to suddenly stop after heavy use may experience such withdrawal symptoms as headaches, lethargy, irritability, and difficulty in concentrating.");
            q3.setQuestion("Which of the following most accurately summarizes the opinion of the author in the text?");
            List<String> ans3 = new ArrayList<>();
            ans3.add("Caffeine is a powerful drug that affects the body in numerous ways.");
            ans3.add("Caffeine is good to drink before working out.");
            ans3.add("Caffeine is linked to various health concerns.");
            ans3.add("Caffeine is a strong drug that only enhances the body when used.");
            q3.setAnswers(ans3);
            q3.setCorrect("0");
            repo.save(q3);
        };
    }
}
