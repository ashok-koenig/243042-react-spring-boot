package com.example.demo.util;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import javax.crypto.SecretKey;
import java.nio.charset.StandardCharsets;
import java.util.Date;

@Component
public class JwtUtil {

    @Value("${jwt.secret}")
    private String secret;

    @Value("${jwt.expiration}")
    private Long expirationMs;

    private SecretKey key;

    @PostConstruct
    public void init(){
        key = Keys.hmacShaKeyFor(secret.getBytes(StandardCharsets.UTF_8));
    }
    // Used for generating jwt token
    public String generateToken(String username, String role){
        return Jwts.builder()
                .setSubject(username)
                .claim("role", role)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() +expirationMs))
                .signWith(key)
                .compact();
    }

    public Jws<Claims> parseToken(String token){
        return Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(token);
    }

    public String extractUsername(String token){
        return parseToken(token).getBody().getSubject();
    }

    public String extractRole(String token){
        return parseToken(token).getBody().get("role", String.class);
    }

    public boolean validateToken(String token){
        try{
            parseToken(token);
            return true;
        }catch (Exception e){
            return  false;
        }
    }
}
