package com.example.demo.API;

import com.example.demo.Payload.*;
import com.example.demo.common.GooglePojo;
import com.example.demo.common.GoogleUtils;
import com.example.demo.User.CustomUserDetails;
import com.example.demo.User.UserService;
import com.example.demo.WebSecurity.JwtTokenProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import java.io.IOException;

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

    @GetMapping("/login-google")
    // màn hình đăng nhập tài khoản sau khi chọn tài khoản sẽ trả về request chứa code đến endpoint này
    public FakeMessage loginGoogle(@Valid @RequestBody Code gcode) throws IOException {
        String code = gcode.getCode();

        if (code == null || code.isEmpty()) {
            return new FakeMessage("No Code");
        }

        String accessToken = googleUtils.getToken(code);
        System.out.println("code: " + code);
        System.out.println("token: " + accessToken);

        GooglePojo googlePojo = googleUtils.getUserInfo(accessToken);
        UserDetails userDetail = googleUtils.buildUser(googlePojo);

//        UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(userDetail, null,
//                userDetail.getAuthorities());
//        authentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
//        SecurityContextHolder.getContext().setAuthentication(authentication);

        return new FakeMessage(accessToken);
    }
}
