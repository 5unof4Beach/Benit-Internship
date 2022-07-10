package com.example.demo.Questions.Question;

import lombok.Data;

import javax.persistence.Id;
import java.util.List;

@Data
public class Test {
    private String data = "This is test data";

    public Test() {
    }

    public String getData() {
        return data;
    }
}
