package com.example.demo.Config;

import com.example.demo.Model.Reading.ParagraphReorderQuestion;
import com.example.demo.Repository.Reading.ParagraphReorderQuestionRepo;
import com.example.demo.Service.Reading.ParagraphReorderQuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.ArrayList;

@Configuration
public class ParagraphReorderQuestionConfig {
    @Autowired
    ParagraphReorderQuestionService service;

    @Bean
    CommandLineRunner questionReorderSetup(ParagraphReorderQuestionRepo repository) {

        return args -> {
            ParagraphReorderQuestion p = new ParagraphReorderQuestion();
            p.setIndex(service.getTotal() + 1);
            ArrayList<String> passages = new ArrayList<>();
            passages.add("Having worked as a literacy tutor with teenagers, Ms. Bocking saw the need for good attitudes towards reading to be formed early on-with the help of more male role models.");
            passages.add("A University of Canberra student has launched the nation’s first father- led literacy project, to encourage fathers to become more involved in their children’s literacy.");
            passages.add("“There’s no program like this in Australia,” Ms. Bocking said, who devised the project as the final component of her community education degree at the University.");
            passages.add("Julia Bocking’s Literacy and Dads (LADS) project aims to increase the number of fathers participating as literacy helpers in K-2 school reading programs at Queanbeyan Primary Schools.");
            p.setPassages(passages);
            p.setCorrect("0312");

            repository.save(p);
        };
    }
}
