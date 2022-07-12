package com.example.demo.Model.Payload;

import lombok.Data;

import javax.validation.constraints.NotBlank;

@Data
public class Code {
    @NotBlank
    private String code;
}
