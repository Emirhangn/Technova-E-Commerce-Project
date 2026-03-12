package com.technovo.backend.auth;

import lombok.Data;

@Data
public class AuthenticationRequest {
    private String email;
    private String password;
}