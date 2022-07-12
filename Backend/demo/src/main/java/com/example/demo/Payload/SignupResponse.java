package com.example.demo.Payload;

import org.springframework.security.core.GrantedAuthority;

import java.util.Collection;

public class SignupResponse {
    private String accessToken;
    private String userName ;


    public SignupResponse(String accessToken, String userName){
        this.userName = userName;
        this.accessToken = accessToken;
    }
}
