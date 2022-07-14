package com.example.demo.Repository;

import com.example.demo.Model.Course;
import com.example.demo.Model.Reading.SingleAnswerQuestion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CourseRepository extends JpaRepository<Course,Integer> {
    List<Course> findAllByNameContaining(String name);

}

