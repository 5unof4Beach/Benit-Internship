package com.example.demo.Model.Payload;

import lombok.Data;

@Data
public class FakeMessage {
    private String mess;

    public FakeMessage(String mess){
        this.mess = mess;
    }
}
