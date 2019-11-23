package com.software2.SPRS.repository;


import com.software2.SPRS.model.User;
import com.software2.SPRS.model.timeobject;
import com.software2.SPRS.model.vechileobject;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface Repository extends JpaRepository<User,Long> {

    @Query("select NEW com.software2.SPRS.model.vechileobject(u.fname,u.lname,u.start_time, u.end_time, u.vechile_no) from User u Where vechile_no=?1")
    List<vechileobject> findByVechile_no(String vechile_no);

    @Query("select NEW com.software2.SPRS.model.timeobject(u.monday_starttime, u.monday_endtime) from User u WHERE u.monday_starttime IS NOT NULL AND u.monday_endtime IS NOT NULL ")
    List<timeobject> findByMonday();

}


