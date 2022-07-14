package com.example.demo.Service.Reading;

import com.example.demo.Model.Reading.SingleAnswerQuestion;
import com.example.demo.Repository.Reading.SingleAnswerQuestionRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class SingleAnswerQuestionService extends QuestionService {

    @Autowired
    SingleAnswerQuestionRepo repo;

    @Override
    public List<SingleAnswerQuestion> getAllQuestions(){
        return repo.findAll();
//        return questionRepo.findAllByQuestion("");
    }

    @Override
    public List<SingleAnswerQuestion> getQuestionByIndex(Long index){
        return repo.findQuestionByIndex(index);
    }

    @Override
    public List<SingleAnswerQuestion> deleteQuestionByIndex(Long index){
        return repo.deleteQuestionByIndex(index);
    }

    @Override
    public String createQuestion(Object o) {
        SingleAnswerQuestion s = (SingleAnswerQuestion) o;
        s.setIndex(getTotal() + 1);
        repo.save(s);
        return "done";
    }

    public Long getTotal(){
        return repo.count();
    }
}
