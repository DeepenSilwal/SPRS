package com.software2.SPRS.service;

import com.software2.SPRS.model.User;
import com.software2.SPRS.model.timeobject;
import com.software2.SPRS.model.vechileobject;
import com.software2.SPRS.repository.Repository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.time.format.DateTimeFormatter;
import java.time.LocalDateTime;
import java.util.Calendar;

@org.springframework.stereotype.Service
public class Service {
    @Autowired
    private Repository repository;

    public List<User> listAll(){
        Calendar calendar = Calendar.getInstance();
        DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");
        LocalDateTime now = LocalDateTime.now();
        System.out.println(dtf.format(now));
        int day = calendar.get(Calendar.DAY_OF_WEEK);
        System.out.println("Day: " + day);

        if (day == 1){

        }
        System.out.println( repository.findAll());
        return (List<User>) repository.findAll();
    }

    public void save(User user){
        repository.save(user);
    }

    public User get(Long id){
        return repository.findById(id).get();
    }

    public List<vechileobject> getbyvechile_no(String vechile_no){
        return repository.findByVechile_no(vechile_no);
    }

    public List<timeobject> getbyMonday() {
        return repository.findByMonday();
    }

    public void register(User user){
        repository.save(user);
    }

}
