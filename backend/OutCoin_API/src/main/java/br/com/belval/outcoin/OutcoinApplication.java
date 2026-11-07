package br.com.belval.outcoin;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@SpringBootApplication
public class OutcoinApplication {

	public static void main(String[] args) {
		SpringApplication.run(OutcoinApplication.class, args);
	}
	
	@GetMapping ("/")
	public String eco () {
		return "eco";
	}
	
}

