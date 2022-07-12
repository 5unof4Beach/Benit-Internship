package com.example.demo.Model;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table
public class Course {
    @Id
    @SequenceGenerator(
            name = "course_sequence",
            sequenceName = "course_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "course_sequence"
    )
    private Integer id;
    private Integer amount;
    private String name;
    private LocalDate openDay;
    private LocalDate endDay;

    public Course() {
    }

    public Course(int id, int amount, String name, LocalDate openDay, LocalDate endDay) {
        this.id = id;
        this.amount = amount;
        this.name = name;
        this.openDay = openDay;
        this.endDay = endDay;
    }

    public Course(Integer amount, String name, LocalDate openDay, LocalDate endDay) {
        this.amount = amount;
        this.name = name;
        this.openDay = openDay;
        this.endDay = endDay;
    }

    public Integer getId() {
        return id;
    }

    public Integer getAmount() {
        return amount;
    }

    public String getName() {
        return name;
    }

    public LocalDate getOpenDay() {
        return openDay;
    }

    public LocalDate getEndDay() {
        return endDay;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public void setAmount(Integer amount) {
        this.amount = amount;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setOpenDay(LocalDate openDay) {
        this.openDay = openDay;
    }

    public void setEndDay(LocalDate endDay) {
        this.endDay = endDay;
    }

    @Override
    public String toString() {
        return "Course{" +
                "id=" + id +
                ", amount=" + amount +
                ", name='" + name + '\'' +
                ", openDay=" + openDay +
                ", endDay=" + endDay +
                '}';
    }
}
