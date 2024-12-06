package com.kmdc.candidateform.repository;

import com.kmdc.candidateform.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
    boolean existsByUserName(String userName);
    boolean existsByEmail(String email);
    User findByUserName(String userName);
}
