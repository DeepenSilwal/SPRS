
/*package com.software2.SPRS.controller;

import com.software2.SPRS.model.User;
import com.software2.SPRS.repository.UserRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.net.URI;
import java.net.URISyntaxException;
import java.net.URL;
import java.util.Collection;
import java.util.Locale;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class UserController {

    private final UserRepository userRepository;

    public UserController(UserRepository userRepository){
        super();
        this.userRepository = userRepository;
    }

    @GetMapping("/users")
    Collection<User> users(){
        return userRepository.findAll();
    }

    @GetMapping("/users/{id}")
    ResponseEntity<?> getUser(@PathVariable Long id){
        Optional<User> user = userRepository.findById(id);
        return user.map(response -> ResponseEntity.ok().body(response))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }


    @PostMapping("/users")
    ResponseEntity<User> createUser(@Valid @RequestBody User user) throws URISyntaxException{
        User result=userRepository.save(user);
        return ResponseEntity.created(new URI(("/api/users") + result.getId())).body(result);
    }
}
*/