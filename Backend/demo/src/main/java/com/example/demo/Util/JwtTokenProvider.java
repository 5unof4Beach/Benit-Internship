package com.example.demo.Util;

import com.example.demo.WebSecurity.CustomUserDetails;
import io.jsonwebtoken.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;

import javax.servlet.http.HttpServletRequest;
import java.util.Date;

@Component
@Slf4j
public class JwtTokenProvider {
    @Value("${demo.app.jwtExpirationMs}")
    private Long JWT_EXPIRATION ;
    @Value("${demo.app.jwtSecret}")
    private String secret;

    public String generateToken(CustomUserDetails userDetails){
        Date now = new Date();

        Date expireTime = new Date(now.getTime() + JWT_EXPIRATION);

        return
                Jwts.builder()
                        .setSubject(Long.toString(userDetails.getUser().getId()))
                        .setIssuedAt(now)
                        .setExpiration(expireTime)
                        .signWith(SignatureAlgorithm.HS256, secret)
                        .compact();
    }

    public Long getUserIdFromJWT(String jwtToken){
        Claims claims = Jwts.parser()
                .setSigningKey(secret)
                .parseClaimsJws(jwtToken)
                .getBody();

        return Long.parseLong(claims.getSubject());
    }

    public Boolean validateToken(String token){
        try{
            Jwts.parser().setSigningKey(secret).parseClaimsJws(token);
            return true;
        }catch (MalformedJwtException ex) {
            log.error("Invalid JWT token");
            throw ex;
        } catch (ExpiredJwtException ex) {
            log.error("Expired JWT token");
            throw ex;
        } catch (UnsupportedJwtException ex) {
            log.error("Unsupported JWT token");
        } catch (IllegalArgumentException ex) {
            log.error("JWT claims string is empty.");
            throw ex;
        }
        return false;
    }

    public String getTokenFromRequest(HttpServletRequest request) {
        String bearerToken = request.getHeader("Authorization");
        // Kiểm tra xem header Authorization có chứa thông tin jwt không
        if (StringUtils.hasText(bearerToken) && bearerToken.startsWith("Bearer ")) {
            return bearerToken.substring(7);
        }
        return null;
    }
}
