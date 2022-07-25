package com.example.demo;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

@SpringBootTest
class DemoApplicationTests {
	Calculator calTest = new Calculator();
	@Test
	void contextLoads() {
		int a = 1;
		int b = 3;

		int res = calTest.add(a,b);

		assertThat(res).isEqualTo(4);
	}

	class Calculator {
		int add(int a, int b){
			return a+b;
		}
	}
}
