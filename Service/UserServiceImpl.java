package com.kmdc.candidateform.Service;

import com.kmdc.candidateform.model.User;
import com.kmdc.candidateform.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;

    @Autowired
    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public boolean registerUser(User user) {
        // Check if user already exists by username or email
        if (userRepository.existsByUserName(user.getUserName()) || userRepository.existsByEmail(user.getEmail())) {
            return false; // User already exists
        }

        userRepository.save(user); // Save user to the database
        return true; // Registration successful
    }

    @Override
    public boolean authenticateUser(User user) {
        // Check if user exists by username and validate the password
        User foundUser = userRepository.findByUserName(user.getUserName());
        if (foundUser != null && foundUser.getPassword().equals(user.getPassword())) {
            return true; // Authentication successful
        }
        return false; // Authentication failed
    }
}
