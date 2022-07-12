package com.example.demo.Controller;

import com.example.demo.Model.Question.Question;
import com.example.demo.Service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
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
    @GetMapping("/{index}")
    public List<Question> getAllQuestionsByIndex(@PathVariable("index") Long idx){
        return questionService.getQuestionByIndex(idx);
    }

    @PostMapping
    public void addQuestion(@Valid @RequestBody Question question){
        questionService.createQuestion(question);
    }

    @DeleteMapping("/{index}")
    public void deleteQuestionByIndex(@PathVariable("index") Long idx){
        questionService.deleteQuestionByIndex(idx);
    }
}
