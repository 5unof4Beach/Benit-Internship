package com.example.demo.Controller;

import com.example.demo.Model.Question.Question;
import com.example.demo.Service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping(path = "api/question")
public class QuestionController {

    @Autowired
    QuestionService questionService;
    @GetMapping
    public List<Question> getAllQuestions(){
        return questionService.getQuestionList();
    }
}
