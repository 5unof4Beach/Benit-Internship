package com.example.demo.WebSecurity;

import com.example.demo.Model.GoogleUser;
import com.example.demo.Service.UserService;
import com.example.demo.Util.GoogleUtils;
import com.example.demo.Util.JwtTokenProvider;
import io.jsonwebtoken.MalformedJwtException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Slf4j
public class JwtAuthenticationFilter extends OncePerRequestFilter {
    @Autowired
    private JwtTokenProvider tokenProvider;

    @Autowired
    GoogleUtils googleUtils;

    @Autowired
    private UserService customUserDetailsService;

    @Override
    protected void doFilterInternal(HttpServletRequest request,
                                    HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {
        try {
            authorizeJwtToken(request);
            System.out.println("JWT Authorized");
        } catch (MalformedJwtException ex) {
            System.out.println("NOT JWT");
            log.error("failed on set user authentication with JWT", ex);
        }

        try{ 
            authorizeGoogleToken(request);
            System.out.println("Google Authorized");
        }catch (Exception e){
            log.error("failed on set user authentication with Google", e);
        }

        filterChain.doFilter(request, response);
    }

    private void authorizeJwtToken(HttpServletRequest request){
        String jwt = tokenProvider.getTokenFromRequest(request);

        if (StringUtils.hasText(jwt) && (Boolean) tokenProvider.validateToken(jwt)) {
            // L???y id user t??? chu???i jwt
            Long userId = tokenProvider.getUserIdFromJWT(jwt);
            // L???y th??ng tin ng?????i d??ng t??? id
            UserDetails userDetails = customUserDetailsService.loadUserById(userId);
            if(userDetails != null) {
                // N???u ng?????i d??ng h???p l???, set th??ng tin cho Seturity Context
                UsernamePasswordAuthenticationToken
                        authentication = new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
                authentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));

                SecurityContextHolder.getContext().setAuthentication(authentication);
            }
        }
    }

    private void authorizeGoogleToken(HttpServletRequest request) throws IOException {

        String token = tokenProvider.getTokenFromRequest(request);

        GoogleUser googlePojo = googleUtils.getUserInfo(token);
        UserDetails userDetail = googleUtils.buildUser(googlePojo);

        UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(userDetail, null,
                userDetail.getAuthorities());
        authentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
        SecurityContextHolder.getContext().setAuthentication(authentication);
    }
}