package com.example.demo.Controller.Reading;

import com.example.demo.Model.Reading.ParagraphReorderQuestion;
import com.example.demo.Repository.Reading.ParagraphReorderQuestionRepo;
import com.example.demo.Service.Reading.ParagraphReorderQuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping(path = "api/reading/pr")
public class ParagraphReorderQuestionController {
    @Autowired
    ParagraphReorderQuestionService service;

//    GET
    @GetMapping
    public List<ParagraphReorderQuestion> getAll(){
        return service.getAllQuestions();
    }

    @GetMapping("/{index}")
    public List<ParagraphReorderQuestion> getByIndex(@PathVariable("index") Long index){
        return service.getQuestionByIndex(index);
    }
//    POST

//    DELETE
}
