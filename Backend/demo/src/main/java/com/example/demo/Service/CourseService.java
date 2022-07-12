package com.example.demo.Service;

import com.example.demo.Model.Course;
import com.example.demo.Repository.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class CourseService {

    CourseRepository courseRepository;

    @Autowired
    public CourseService(CourseRepository courseRepository) {
        this.courseRepository = courseRepository;
    }

    public List<Course> getCourse() {
        return courseRepository.findAll();
    }
    public List<Course> getCourseByName(String name){
        return courseRepository.findAllByNameContaining(name);
    }
}
