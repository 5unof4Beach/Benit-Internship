package com.example.demo.Controller;

import com.example.demo.Exception.TokenRefreshException;
import com.example.demo.Model.GoogleUser;
import com.example.demo.Model.RefreshToken;
import com.example.demo.Payload.*;
import com.example.demo.Service.RefreshTokenService;
import com.example.demo.Util.GoogleUtils;
import com.example.demo.WebSecurity.CustomUserDetails;
import com.example.demo.Service.UserService;
import com.example.demo.Util.JwtTokenProvider;
import com.fasterxml.jackson.databind.JsonNode;
import org.springframework.beans.factory.annotation.Autowired;
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
public class AuthController {
    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    UserService userService;

    @Autowired
    private JwtTokenProvider tokenProvider;

    @Autowired
    private RefreshTokenService refreshTokenService;

    @Autowired
    private GoogleUtils googleUtils;


    @PostMapping("/signup")
    public SignupResponse createUser(@Valid @RequestBody SignupRequest signupRequest) {
        String mess = userService.createNewUser(signupRequest);
        return new SignupResponse(mess, signupRequest.getUsername());
    }

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
        CustomUserDetails customUserDetails = (CustomUserDetails) userDetails;
        String jwt = tokenProvider.generateToken(customUserDetails);
        String refreshToken = refreshTokenService.createRefreshToken(customUserDetails.getId()).getToken();
        return new LoginResponse(jwt, refreshToken, loginRequest.getUsername(), userDetails.getAuthorities());
    }



    @PostMapping("/googlelogin")
    public LoginResponse loginGoogle(@Valid @RequestBody Code gcode) throws IOException {
        String code = gcode.getCode();
        if (code == null || code.isEmpty()) {
//            return new FakeMessage("No Code");
        }

        JsonNode response = null;
        String accessToken ="";
        String refreshToken ="";

        try{
            response = googleUtils.getToken(code);
        }
        catch (Exception e){

        }

        accessToken = response.get("access_token").textValue();
        refreshToken = response.get("refresh_token").textValue();

        GoogleUser googlePojo = googleUtils.getUserInfo(accessToken);
        UserDetails userDetail = googleUtils.buildUser(googlePojo);


        return new LoginResponse(accessToken,refreshToken,userDetail.getUsername(),userDetail.getAuthorities());
    }

    @PostMapping("/refreshtoken")
    public TokenRefreshResponse getNewAccessToken(@Valid @RequestBody TokenRefreshRequest request){
        String refreshToken = request.getRefreshToken();
        //.map kiem tra xem du lieu tra ve co null hay khong
        return refreshTokenService.findByToken(refreshToken)
//               Nếu tồn tại resfreshToken thì check hết hạn
                .map(refreshTokenService :: verifyExpiration)
//                Nếu còn hạn thì lấy user của token ra và tạo jwt mới
                .map(RefreshToken::getUser)
                .map(user -> {
                    String jwt = tokenProvider.generateToken((CustomUserDetails) userService.loadUserById(user.getId()));
                    System.out.println(new TokenRefreshResponse(jwt, refreshToken).toString());
                    return new TokenRefreshResponse(jwt, refreshToken);
                })
                .orElseThrow(() -> new TokenRefreshException(refreshToken, "Refresh token is not in database!"));
    }

    @GetMapping
    public LoggedInStateResponse logInCheck(HttpServletRequest request){
        String jwtToken = tokenProvider.getTokenFromRequest(request);
        tokenProvider.validateToken(jwtToken);

        return new LoggedInStateResponse(true);
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
