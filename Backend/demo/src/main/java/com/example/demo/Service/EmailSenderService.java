package com.example.demo.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailSenderService {
    @Autowired
    private JavaMailSender javaMailSender;
    @Autowired
    private Environment env;

    public void sendEmail(String toEmail, String subject, String body){
        SimpleMailMessage mess = new SimpleMailMessage();
        mess.setFrom(env.getProperty("spring.mail.username"));
        System.out.println(env.getProperty("spring.mail.username"));
        mess.setTo(toEmail);
        mess.setSubject(subject);
        mess.setText(body);

        javaMailSender.send(mess);
    }
}
