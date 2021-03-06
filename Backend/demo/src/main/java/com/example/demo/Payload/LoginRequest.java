package com.example.demo.Payload;

import lombok.Data;

import javax.validation.constraints.NotBlank;
import java.util.List;

@Data
public class LoginRequest {
    @NotBlank
    private String username;

    @NotBlank
    private String password;
}
