package com.example.demo.WebSecurity;

import io.jsonwebtoken.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component
@Slf4j
public class JwtTokenProvider {

    private final String secret = "secret";

    private final Long JWT_EXPIRATION = 3600000L;

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
        } catch (ExpiredJwtException ex) {
            log.error("Expired JWT token");
        } catch (UnsupportedJwtException ex) {
            log.error("Unsupported JWT token");
        } catch (IllegalArgumentException ex) {
            log.error("JWT claims string is empty.");
        }

        return false;
    }
}
