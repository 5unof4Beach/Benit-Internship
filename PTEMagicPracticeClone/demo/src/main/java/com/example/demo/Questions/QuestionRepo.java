package com.example.demo.Questions;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

public interface QuestionRepo extends MongoRepository<Question, String> {
    @Query(value="{question: '?0'}")
    Question findAll(String question);
}
