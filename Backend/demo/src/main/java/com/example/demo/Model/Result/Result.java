package com.example.demo.Model.Result;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
abstract class Result {
    public Long index;
    public boolean result;
}
