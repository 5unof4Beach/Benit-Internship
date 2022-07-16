package com.example.demo.Payload;

import lombok.Data;
import org.springframework.security.core.GrantedAuthority;

import java.util.Collection;

@Data
public class SignupResponse {
    private String accessToken;
    private String userName ;


    public SignupResponse(String accessToken, String userName){
        this.userName = userName;
        this.accessToken = accessToken;
    }
}
