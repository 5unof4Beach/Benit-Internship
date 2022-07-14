package com.example.demo.Repository.Reading;

import com.example.demo.Model.Reading.SingleAnswerQuestion;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface SingleAnswerQuestionRepo extends MongoRepository<SingleAnswerQuestion, String> {
    @Query(value="{question: '?0'}", fields="{'question' : 1, 'answers' : 1, 'correct': 1}")
    SingleAnswerQuestion findAllByAnswer(String question);

    List<SingleAnswerQuestion> findQuestionByIndex(Long index);

    List<SingleAnswerQuestion> deleteQuestionByIndex(Long index);

    public long count();
}