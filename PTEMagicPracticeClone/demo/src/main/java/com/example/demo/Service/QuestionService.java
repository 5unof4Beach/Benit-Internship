package com.example.demo.Service;

import com.example.demo.Model.Question.Question;
import com.example.demo.Repository.QuestionRepo;
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
