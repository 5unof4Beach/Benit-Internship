package com.example.demo.Payload;

import lombok.Data;
import org.springframework.security.core.GrantedAuthority;

import java.util.Collection;
import java.util.List;

@Data
public class LoginResponse {
    private String accessToken;
    private String refreshToken;
    private String tokenType = "Bearer";
    private String userName ;

    private Collection<? extends GrantedAuthority> roles;

    public LoginResponse(String accessToken, String refreshToken, String userName, Collection<? extends GrantedAuthority> roles){
        this.userName = userName;
        this.refreshToken = refreshToken;
        this.accessToken = accessToken;
        this.roles = roles;
    }
}
