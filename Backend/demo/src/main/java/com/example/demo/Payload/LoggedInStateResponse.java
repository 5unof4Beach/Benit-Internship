package com.example.demo.Payload;

import lombok.Data;

@Data
public class LoggedInStateResponse {
    private boolean state;

    public LoggedInStateResponse(boolean state) {
        this.state = state;
    }
}
