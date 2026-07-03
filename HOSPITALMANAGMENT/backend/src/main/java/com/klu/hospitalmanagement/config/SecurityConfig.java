package com.klu.hospitalmanagement.config;

import org.springframework.security.config.Customizer;
import com.klu.hospitalmanagement.security.JwtAuthFilter;
import com.klu.hospitalmanagement.security.UserDetailsServiceImpl;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

/**
 * Security configuration — migrated from travel-backend-jenkins SecurityConfig
 * and updated to Spring Boot 3.x / Spring Security 6 lambda DSL.
 *
 * Key differences from travel backend:
 *  - Uses requestMatchers() instead of antMatchers() (Spring Security 6)
 *  - Uses lambda DSL instead of chained methods
 *  - JwtAuthFilter injected and registered
 *  - BCryptPasswordEncoder wired through AuthenticationProvider
 */
@Configuration
public class SecurityConfig {

    private final UserDetailsServiceImpl userDetailsService;
    private final JwtAuthFilter jwtAuthFilter;

    public SecurityConfig(UserDetailsServiceImpl userDetailsService, JwtAuthFilter jwtAuthFilter) {
        this.userDetailsService = userDetailsService;
        this.jwtAuthFilter = jwtAuthFilter;
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
    	http
        .cors(Customizer.withDefaults())
        .csrf(AbstractHttpConfigurer::disable)
            .authorizeHttpRequests(auth -> auth
                // Public endpoints — auth, file uploads, public listings
            		.requestMatchers(
            			    "/api/users/login",
            			    "/api/users/register",

            			    "/api/doctors",
            			    "/api/doctors/**",

            			    "/api/wards",
            			    "/api/wards/**",

            			    "/api/beds",
            			    "/api/beds/**",

            			    "/api/appointments",
            			    "/api/appointments/**",

            			    "/upload/**"
            			).permitAll()
                // All other endpoints (admissions, dashboard, export) require JWT
                .anyRequest().authenticated()
            )
            .sessionManagement(session ->
                session.sessionCreationPolicy(SessionCreationPolicy.STATELESS)
            )
            .authenticationProvider(authenticationProvider())
            .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }

    @Bean
    public AuthenticationProvider authenticationProvider() {
        DaoAuthenticationProvider provider = new DaoAuthenticationProvider();
        provider.setUserDetailsService(userDetailsService);
        provider.setPasswordEncoder(passwordEncoder());
        return provider;
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception {
        return config.getAuthenticationManager();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
    
    
}
