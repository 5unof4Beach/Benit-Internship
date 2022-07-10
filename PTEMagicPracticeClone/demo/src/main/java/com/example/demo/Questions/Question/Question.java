package com.example.demo.Questions.Question;

import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.Id;
import java.util.List;

@Document("questions")
public class Question {
    @Id
    String id;

    Long index;
    private String question;
    private List<String> answers;
    private String correct;

    private Test testData = new Test();

    public Test getTestData() {
        return testData;
    }


    public Question() {
    }

    public Question(Long index, String question, List<String> answers, String correct) {
        this.index = index;
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }

    public Long getIndex() {
        return index;
    }

    public void setIndex(Long index) {
        this.index = index;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getQuestion() {
        return question;
    }

    public void setQuestion(String question) {
        this.question = question;
    }

    public List<String> getAnswers() {
        return answers;
    }

    public void setAnswers(List<String> answers) {
        this.answers = answers;
    }

    public String getCorrect() {
        return correct;
    }

    public void setCorrect(String correct) {
        this.correct = correct;
    }
}

