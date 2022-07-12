package com.example.demo.Repository;

import com.example.demo.Model.Course;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CourseRepository extends JpaRepository<Course,Integer> {
    List<Course> findAllByNameContaining(String name);
}

