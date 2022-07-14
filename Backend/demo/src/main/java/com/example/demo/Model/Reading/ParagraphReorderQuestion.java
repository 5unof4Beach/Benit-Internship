package com.example.demo.Model.Reading;

import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.Id;
import java.util.List;

@Document("paragraphReorderQuestion")
public class ParagraphReorderQuestion {
    @Id
    private String id;

    private Long index;

    private List<String> passages;

    private String correct;

    public ParagraphReorderQuestion(Long index, List<String> passages, String correct) {
        this.index = index;
        this.passages = passages;
        this.correct = correct;
    }

    public ParagraphReorderQuestion() {
    }

    public Long getIndex() {
        return index;
    }

    public void setIndex(Long index) {
        this.index = index;
    }

    public List<String> getPassages() {
        return passages;
    }

    public void setPassages(List<String> passages) {
        this.passages = passages;
    }

    public String getCorrect() {
        return correct;
    }

    public void setCorrect(String correct) {
        this.correct = correct;
    }
}
