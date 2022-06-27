package com.example.demo.Courses;

import java.time.LocalDate;

public class Course {
    int id;
    int amount;
    String name;
    LocalDate start;
    LocalDate end;

    public Course(int id, int amount, String name, LocalDate start, LocalDate end) {
        this.id = id;
        this.amount = amount;
        this.name = name;
        this.start = start;
        this.end = end;
    }

    public int getId() {
        return id;
    }

    public int getAmount() {
        return amount;
    }

    public String getName() {
        return name;
    }

    public LocalDate getStart() {
        return start;
    }

    public LocalDate getEnd() {
        return end;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setStart(LocalDate start) {
        this.start = start;
    }

    public void setEnd(LocalDate end) {
        this.end = end;
    }
}
