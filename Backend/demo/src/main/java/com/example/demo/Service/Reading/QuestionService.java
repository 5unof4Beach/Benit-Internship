package com.example.demo.Service.Reading;

import com.example.demo.Model.Reading.SingleAnswerQuestion;
import org.aspectj.weaver.patterns.TypePatternQuestions;

import java.util.List;

abstract class QuestionService {
    abstract List getAllQuestions();
    abstract List getQuestionByIndex(Long index);
    abstract List deleteQuestionByIndex(Long index);
    abstract <T, G> G createQuestion(T o);

    abstract Long getTotal();
}
