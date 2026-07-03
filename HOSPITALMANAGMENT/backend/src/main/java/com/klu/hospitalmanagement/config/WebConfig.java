package com.klu.hospitalmanagement.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.*;

/**
 * Web MVC configuration — CORS and static resource mapping.
 */
@Configuration
public class WebConfig implements WebMvcConfigurer {

    /**
     * Serve uploaded profile photos from the /uploads directory.
     */
    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/upload/**")
                .addResourceLocations("file:" + System.getProperty("user.dir") + "/uploads/");
    }

    /**
     * Global CORS — allow the React dev server and production build.
     */
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
        .allowedOriginPatterns(
        	    "http://localhost:5173",
        	    "http://localhost:5174",
        	    "http://localhost:3000"
        	)
        		.allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                .allowedHeaders("*")
                .allowCredentials(true)
                .maxAge(3600);
    }
}
