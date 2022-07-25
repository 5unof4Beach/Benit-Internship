package com.example.demo.Service.Reading;

import com.example.demo.Model.Reading.ParagraphReorderQuestion;
import com.example.demo.Repository.Reading.ParagraphReorderQuestionRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ParagraphReorderQuestionService extends QuestionService{
    @Autowired
    ParagraphReorderQuestionRepo repo;

    @Override
    public List<ParagraphReorderQuestion> getAllQuestions(){
        return repo.findAll();
    }

    @Override
    public ParagraphReorderQuestion getQuestionByIndex(Long index){
        return repo.findByIndex(index);
    }

    @Override
    ParagraphReorderQuestion deleteQuestionByIndex(Long index) {
        return repo.deleteByIndex(index);
    }

    @Override
    public String createQuestion(Object o) {
        return null;
    }

    @Override
    public Long getTotal() {
        return repo.count();
    }
}
