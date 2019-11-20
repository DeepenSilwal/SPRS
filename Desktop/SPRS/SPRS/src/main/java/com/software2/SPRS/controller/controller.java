package com.software2.SPRS.controller;
import com.software2.SPRS.model.User;
import com.software2.SPRS.model.timeobject;
import com.software2.SPRS.service.Service;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;


import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api")
public class controller{
    @Autowired
    private Service service;

    @GetMapping("/users")
    public List<User> view_users(){
        System.out.println(service.listAll());
        List<User> listuser = service.listAll();
        return listuser;
    }

    @GetMapping("/users/{vechile_no}")
    public List<Object[]> viewoneuser(@PathVariable String vechile_no){
        List<Object[]> user = service.getbyvechile_no(vechile_no);
        return user;
    }

    @GetMapping("/users/monday")
    public List<timeobject> viewMonday(){
        return service.getbyMonday();
    }

    @PostMapping(path="/users/register",consumes="application/json",produces = "application/json")
    public void  register(@RequestBody User user){
        service.register(user);
        System.out.println(user);
    }


}
