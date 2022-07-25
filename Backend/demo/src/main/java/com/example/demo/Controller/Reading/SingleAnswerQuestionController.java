package com.example.demo.Controller.Reading;

import com.example.demo.Model.Reading.SingleAnswerQuestion;
import com.example.demo.Service.Reading.SingleAnswerQuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping(path = "api/reading/sa")
public class SingleAnswerQuestionController {

    @Autowired
    SingleAnswerQuestionService service;

//    GET
    @GetMapping
    public List<SingleAnswerQuestion> getAllQuestions(){
        return service.getAllQuestions();
    }

    @GetMapping("/{index}")
    public SingleAnswerQuestion getAllQuestionsByIndex(@PathVariable("index") Long idx){
        return service.getQuestionByIndex(idx);
    }

//    POST
    @PostMapping
    public void addQuestion(@Valid @RequestBody SingleAnswerQuestion singleAnswerQuestion){
        service.createQuestion(singleAnswerQuestion);
    }

//    DELETE
    @DeleteMapping("/{index}")
    public void deleteQuestionByIndex(@PathVariable("index") Long idx){
        service.deleteQuestionByIndex(idx);
    }
}
