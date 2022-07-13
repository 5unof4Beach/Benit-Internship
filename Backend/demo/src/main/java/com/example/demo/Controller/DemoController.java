package com.example.demo.Controller;

import com.example.demo.Model.GoogleUser;
import com.example.demo.Payload.*;
import com.example.demo.Util.GoogleUtils;
import com.example.demo.WebSecurity.CustomUserDetails;
import com.example.demo.Service.UserService;
import com.example.demo.WebSecurity.JwtTokenProvider;
import org.hibernate.annotations.Any;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import java.io.IOException;

@RestController
@CrossOrigin
@RequestMapping(path = "/auth")
public class DemoController {
    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    UserService userService;

    @Autowired
    private JwtTokenProvider tokenProvider;

    @Autowired
    private GoogleUtils googleUtils;

    @PostMapping("/login")
    public LoginResponse authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginRequest.getUsername(),
                        loginRequest.getPassword()
                )
        );


        SecurityContextHolder.getContext().setAuthentication(authentication);
        UserDetails userDetails = (UserDetails) authentication.getPrincipal();
        String jwt = tokenProvider.generateToken((CustomUserDetails) userDetails);
        return new LoginResponse(jwt, loginRequest.getUsername(), userDetails.getAuthorities());
    }

    @PostMapping("/signup")
    public SignupResponse createUser(@Valid @RequestBody SignupRequest signupRequest) {
        String mess = userService.createNewUser(signupRequest);
        return new SignupResponse(mess, signupRequest.getUsername());
    }

    @GetMapping("/test")
    public void test(){
        System.out.println("this is jwt link test");
    }

    @PostMapping("/googlelogin")
    public LoginResponse loginGoogle(@Valid @RequestBody Code gcode) throws IOException {
        String code = gcode.getCode();
        if (code == null || code.isEmpty()) {
//            return new FakeMessage("No Code");
        }
        System.out.println("code: " + code);

        String accessToken = null;

        try{
            accessToken = googleUtils.getToken(code);
        }
        catch (Exception e){

        }
        System.out.println("token: " + accessToken);

        GoogleUser googlePojo = googleUtils.getUserInfo(accessToken);
        UserDetails userDetail = googleUtils.buildUser(googlePojo);


        return new LoginResponse(accessToken,userDetail.getUsername(),userDetail.getAuthorities());
    }

    @PostMapping("/admin")
    public FakeMessage admin(){
        return new FakeMessage("Admin mới có thể thấy được message này");
    }

    @GetMapping("/fake")
    public FakeMessage randomStuff(){
        return new FakeMessage("JWT Hợp lệ mới có thể thấy được message này");
    }
}
