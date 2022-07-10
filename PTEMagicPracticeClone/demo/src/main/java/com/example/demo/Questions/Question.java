package com.example.demo.Questions;

import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.Id;
import java.util.List;

@Document("questions")
public class Question {
    @Id
    private String id;

    private String question;
    private List<String> answers;
    private String correct;

    public Question() {
    }

    public Question(String id, String question, List<String> answers, String correct) {
        this.id = id;
        this.question = question;
        this.answers = answers;
        this.correct = correct;
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
