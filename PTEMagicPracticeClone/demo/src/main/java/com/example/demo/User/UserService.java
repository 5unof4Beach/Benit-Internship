package com.example.demo.User;
import com.example.demo.Payload.LoginRequest;
import com.example.demo.Payload.SignupRequest;
import com.example.demo.Role.Role;
import com.example.demo.Role.RoleRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Lazy;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.HashSet;
import java.util.Set;

@Service
@Transactional
public class UserService implements UserDetailsService {
    private UserRepository userRepository;

    @Autowired
    RoleRepo roleRepo;

    private PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    @Autowired
    public UserService(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByUsername(username);
        if(user == null){
            throw new UsernameNotFoundException(username);
        }

        Set<GrantedAuthority> grantedAuthorities = new HashSet<>();
        Set<Role> roles = user.getRoles();
        for (Role role : roles) {
            grantedAuthorities.add(new SimpleGrantedAuthority(role.getName()));
        }

        return new CustomUserDetails(user, grantedAuthorities);
    }
    public UserDetails loadUserById(Long id) throws UsernameNotFoundException {
        User user = userRepository.findById(id).orElse(null);
        if(user == null){
            throw new UsernameNotFoundException(id.toString());
        }

        Set<GrantedAuthority> grantedAuthorities = new HashSet<>();
        Set<Role> roles = user.getRoles();
        for (Role role : roles) {
            grantedAuthorities.add(new SimpleGrantedAuthority(role.getName()));
        }

        return new CustomUserDetails(user, grantedAuthorities);
    }


    public String createNewUser(SignupRequest signupRequest){
        User user = new User();
        user.setUsername(signupRequest.getUsername());
        user.setPassword(passwordEncoder.encode(signupRequest.getPassword()));
        user.setEmail(signupRequest.getEmail());
        HashSet<Role> roles = new HashSet<>();
        roles.add(roleRepo.findByName("ROLE_MEMBER"));
        user.setRoles(roles);

        userRepository.save(user);

        return signupRequest.toString();
    }

    public String createNewAdmin(SignupRequest signupRequest){
        User user = new User();
        user.setUsername(signupRequest.getUsername());
        user.setPassword(passwordEncoder.encode(signupRequest.getPassword()));
        user.setEmail(signupRequest.getEmail());
        HashSet<Role> roles = new HashSet<>();
        roles.add(roleRepo.findByName("ROLE_MEMBER"));
        roles.add(roleRepo.findByName("ROLE_ADMIN"));
        user.setRoles(roles);

        userRepository.save(user);

        return signupRequest.toString();
    }

}