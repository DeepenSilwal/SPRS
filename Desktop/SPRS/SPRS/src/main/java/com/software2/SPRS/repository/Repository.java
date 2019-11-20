package com.software2.SPRS.repository;


import com.software2.SPRS.model.User;
import com.software2.SPRS.model.timeobject;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface Repository extends JpaRepository<User,Long> {

    @Query("select id,fname,lname,start_time,end_time,vechile_no from User Where vechile_no=?1")
    List<Object[]> findByVechile_no(String vechile_no);

    @Query("select NEW com.software2.SPRS.model.timeobject(u.monday_starttime, u.monday_endtime) from User u WHERE u.monday_starttime IS NOT NULL AND u.monday_endtime IS NOT NULL ")
    List<timeobject> findByMonday();

}


