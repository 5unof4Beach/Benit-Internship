package com.example.demo.Courses;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CourseRepository
        extends JpaRepository<Course,Integer> {
    List<Course> findAllByNameContaining(String name);
}

