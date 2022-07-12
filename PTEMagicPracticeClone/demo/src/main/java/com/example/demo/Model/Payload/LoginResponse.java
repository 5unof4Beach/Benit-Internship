package com.example.demo.Model.Payload;

import lombok.Data;

@Data
public class LoginResponse {
    private String accessToken;
    private String tokenType = "Bearer";
    private String userName ;

    public LoginResponse(String accessToken, String userName){
        this.userName = userName;
        this.accessToken = accessToken;
    }
}
