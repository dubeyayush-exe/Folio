# Secure Authentication Microservice

![Secure Authentication](/images/peakpx.jpg)

## Overview
A high-performance backend microservice developed in **Java Spring Boot**, designed to handle secure user authentication, authorization, and session management using stateless JSON Web Tokens (JWT).

## Architecture
- **Stateless Tokens**: Fully decoupled architecture relying on signed JWTs, allowing horizontal scaling without session stickiness.
- **Spring Security**: Implemented deep integration with Spring Security filters to protect REST API endpoints.
- **High Throughput**: Load tested to support over 3,000 concurrent user logins per minute with &lt;50ms response latency.

## Security Practices
- Passwords are never stored in plain text; utilized BCrypt hashing with randomized salts.
- Short-lived Access Tokens with secure, HttpOnly, SameSite Refresh Tokens to prevent XSS and CSRF attacks.

## Database Integration
Used Spring Data JPA with PostgreSQL for rapid, reliable, and ACID-compliant transaction handling for user credentials and role management.
