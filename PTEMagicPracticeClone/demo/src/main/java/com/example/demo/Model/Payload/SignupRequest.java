package com.example.demo.Model.Payload;

import lombok.Data;

import javax.validation.constraints.NotBlank;

@Data
public class SignupRequest {
    @NotBlank
    private String username;

    @NotBlank
    private String password;

    @NotBlank
    private String email;
}
