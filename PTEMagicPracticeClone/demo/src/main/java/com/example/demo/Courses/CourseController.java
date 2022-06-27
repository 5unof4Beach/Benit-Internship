package com.example.demo.Courses;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;
import java.time.Month;
import java.util.List;

@RestController
@RequestMapping(path = "api/courses")
public class CourseController {
    @GetMapping
    public List<Course> course(){
        return List.of(
                new Course(
                       12,
                       24,
                       "java",
                        LocalDate.of(2022, Month.AUGUST, 15),
                        LocalDate.of(2022, Month.DECEMBER, 15)

                )
        );
    }
}
