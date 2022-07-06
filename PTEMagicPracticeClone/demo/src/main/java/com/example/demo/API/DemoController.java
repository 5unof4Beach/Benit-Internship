package com.example.demo.API;


import com.example.demo.Payload.FakeMessage;
import com.example.demo.Payload.LoginRequest;
import com.example.demo.Payload.LoginResponse;
import com.example.demo.Payload.SignupRequest;
import com.example.demo.User.CustomUserDetails;
import com.example.demo.User.UserService;
import com.example.demo.WebSecurity.JwtTokenProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@CrossOrigin
@RequestMapping(path = "/jwt")
public class DemoController {
    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    UserService userService;

    @Autowired
    private JwtTokenProvider tokenProvider;

    @PostMapping("/login")
    public LoginResponse authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginRequest.getUsername(),
                        loginRequest.getPassword()
                )
        );


        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = tokenProvider.generateToken((CustomUserDetails) authentication.getPrincipal());
        return new LoginResponse(jwt, loginRequest.getUsername());
    }

    @PostMapping("/signup")
    public LoginResponse createUser(@Valid @RequestBody SignupRequest signupRequest) {
        String mess = userService.createNewUser(signupRequest);
        return new LoginResponse(mess, signupRequest.getUsername());
    }

    @GetMapping("/fake")
    public FakeMessage randomStuff(){
        return new FakeMessage("JWT Hợp lệ mới có thể thấy được message này");
    }
    @GetMapping("/admin")
    public FakeMessage admin(){
        return new FakeMessage("Admin mới có thể thấy được message này");
    }
}
