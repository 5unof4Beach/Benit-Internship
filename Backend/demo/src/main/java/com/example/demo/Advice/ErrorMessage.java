package com.example.demo.Advice;

import lombok.Data;

import java.util.Date;

@Data
public class ErrorMessage {
    private int code;
    private Date date;
    private String mess;
    private String des;

    public ErrorMessage(int code, Date date, String mess, String des) {
        this.code = code;
        this.date = date;
        this.mess = mess;
        this.des = des;
    }
}
