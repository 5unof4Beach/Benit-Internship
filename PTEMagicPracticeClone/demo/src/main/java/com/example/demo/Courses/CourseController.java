package com.example.demo.Courses;

import com.example.demo.Payload.LoginRequest;
import com.example.demo.Payload.LoginResponse;
import com.example.demo.User.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping(path = "api/courses")
public class CourseController {

    private final CourseService courseService;

    @Autowired
    public CourseController(CourseService courseService) {
        this.courseService = courseService;
    }

    @GetMapping
    public List<Course> getCourse(){
        return courseService.getCourse();
    }

    @GetMapping("/{name}")
    public List<Course> getCourseByName(@PathVariable("name") String name){
        return courseService.getCourseByName(name);
    }

}
