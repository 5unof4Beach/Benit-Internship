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

    public List<Question> getQuestionByIndex(Long index){
        return questionRepo.findQuestionByIndex(index);
    }

    public List<Question> deleteQuestionByIndex(Long index){
        return questionRepo.deleteQuestionByIndex(index);
    }

    public String createQuestion(Question question){
        question.setIndex(lastIndex() + 1);
        questionRepo.save(question);
        return "done";
    }

    public Long lastIndex(){
        return questionRepo.count();
    }
}
