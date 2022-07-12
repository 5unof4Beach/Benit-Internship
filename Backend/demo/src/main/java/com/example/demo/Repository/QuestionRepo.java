package com.example.demo.Repository;

import com.example.demo.Model.Question.Question;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface QuestionRepo extends MongoRepository<Question, String> {
    @Query(value="{question: '?0'}", fields="{'question' : 1, 'answers' : 1, 'correct': 1}")
    Question findAllByAnswer(String question);

    List<Question> findQuestionByIndex(Long index);

    List<Question> deleteQuestionByIndex(Long index);

    public long count();
}
