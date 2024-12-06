package com.kmdc.candidateform.Service;

import com.kmdc.candidateform.model.User;

public interface UserService {
    boolean registerUser(User user);
    boolean authenticateUser(User user);
}
