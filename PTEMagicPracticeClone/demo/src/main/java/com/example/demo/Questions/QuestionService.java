package com.example.demo.Questions;

import com.example.demo.Questions.Question.Question;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class QuestionService {

    @Autowired
    QuestionRepo questionRepo;
    public List<Question> getQuestionList(){
        return questionRepo.findAll();
//        return questionRepo.findAllByQuestion("");
    }

    public Long lastIndex(){
        return questionRepo.count();
    }
}
