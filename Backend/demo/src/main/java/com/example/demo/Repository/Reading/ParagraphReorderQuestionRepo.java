package com.example.demo.Repository.Reading;

import com.example.demo.Model.Reading.ParagraphReorderQuestion;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface ParagraphReorderQuestionRepo extends MongoRepository<ParagraphReorderQuestion, String> {
    public List<ParagraphReorderQuestion> findByIndex(Long index);
    public List<ParagraphReorderQuestion> deleteByIndex(Long index);

    public long count();
}
