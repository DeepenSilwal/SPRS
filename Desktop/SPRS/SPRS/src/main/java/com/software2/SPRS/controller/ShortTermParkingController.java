/*package com.software2.SPRS.controller;


import com.software2.SPRS.model.ShortTermParkingUser;
import com.software2.SPRS.repository.ShortTermParkingRepository;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.Collection;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class ShortTermParkingController {
    private final ShortTermParkingRepository shortTermParkingRepository;

    public ShortTermParkingController(ShortTermParkingRepository shortTermParkingRepository){
        super();
        this.shortTermParkingRepository = shortTermParkingRepository;
    }

    @GetMapping("/shorttermparkinguser")
    Collection<ShortTermParkingUser> shortTermParkingUsers(){
        return shortTermParkingRepository.findAll();
    }

    @GetMapping("/shorttermparkinguser/{id}")
    ResponseEntity<?> getshortTermParkingUser(@PathVariable Long id){
        Optional<ShortTermParkingUser> shortTermParkingUser = shortTermParkingRepository.findById(id);
        return shortTermParkingUser.map(response -> ResponseEntity.ok().body(response))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping("/shorttermparkinguser")
    ResponseEntity<ShortTermParkingUser> createShortTermParkingUser(  @DateTimeFormat(pattern="HH:mm:ss") @Valid @RequestBody ShortTermParkingUser shortTermParkingUser) throws URISyntaxException{
        ShortTermParkingUser result = shortTermParkingRepository.save(shortTermParkingUser);
        return ResponseEntity.created(new URI(("/api/shorttermparkinguser")+result.getId())).body(result);
    }





}
*/