package com.example.demo.Courses;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;

public class CourseConfig {
    @Bean
    CommandLineRunner commandLineRunner(CourseRepository repository){

    }
}
