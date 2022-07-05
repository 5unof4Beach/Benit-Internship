package com.example.demo.Courses;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDate;
import java.time.Month;
import java.util.List;

@Configuration
public class CourseConfig {
    @Bean
    CommandLineRunner commandLineRunner(CourseRepository repository) {
        return args -> {
            Course html = new Course(
                    20,
                    "khoa hoc html",
                    LocalDate.of(2022, Month.APRIL, 10),
                    LocalDate.of(2022, Month.AUGUST, 10)
            );

            Course css = new Course(
                    35,
                    "khoa hoc CSS",
                    LocalDate.of(2022, Month.MAY, 10),
                    LocalDate.of(2022, Month.NOVEMBER, 10)
            );

//            repository.saveAll(List.of(html, css));
        };
    }
}
