package com.example.demo.Questions;

import com.example.demo.Questions.Question.Question;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface QuestionRepo extends MongoRepository<Question, String> {
    @Query(value="{question: '?0'}", fields="{'question' : 1, 'answers' : 1, 'correct': 1}")
    Question findAllByAnswer(String question);

    @Query(value="{question: '?0'}", fields="{'question' : 1, 'answers' : 1, 'correct': 1}")
    List<Question> findAllByQuestion(String ques);


    public long count();
}
