package com.example.demo.Repository;

import com.example.demo.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;

//@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);
}
