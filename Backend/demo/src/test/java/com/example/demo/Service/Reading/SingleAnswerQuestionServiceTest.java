package com.example.demo.Service.Reading;

import com.example.demo.Model.Reading.SingleAnswerQuestion;
import com.example.demo.Repository.Reading.SingleAnswerQuestionRepo;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.mockito.Mockito.when;

@SpringBootTest
class SingleAnswerQuestionServiceTest {
    @Mock
    SingleAnswerQuestionRepo singleAnswerQuestionRepo;
    @InjectMocks
    SingleAnswerQuestionService service;

    @Test
    void getQuestionByIndex() {
        SingleAnswerQuestion q = new SingleAnswerQuestion();
        q.setIndex(12L);
        q.setCorrect("2");
        q.setQuestion("Question number 12");
        ArrayList<String> answers = new ArrayList<>();
        answers.add("Answer 1");
        answers.add("Answer 2");
        answers.add("Answer 3");
        answers.add("Answer 4");
        answers.add("Answer 5");
        q.setAnswers(answers);

        SingleAnswerQuestion q2 = new SingleAnswerQuestion();
        q2.setIndex(12L);
        q2.setCorrect("2");
        q2.setQuestion("Question number 12");
        q2.setAnswers(answers);

        when(singleAnswerQuestionRepo.findQuestionByIndex(12L)).thenReturn(q);

        SingleAnswerQuestion res = service.getQuestionByIndex(12L);
        assertThat(res.toString()).isEqualTo(q2.toString());
    }

    @Test
    void deleteQuestionByIndex() {
    }

    @Test
    void createQuestion() {
    }
}