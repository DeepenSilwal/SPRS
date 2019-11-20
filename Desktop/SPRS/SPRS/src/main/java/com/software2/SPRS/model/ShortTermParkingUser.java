/*package com.software2.SPRS.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.sql.Time;
import java.time.LocalTime;
import java.util.Date;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name="ShortTermParkingUser")
public class ShortTermParkingUser {
    @Id
    private Long id;
    private String fname;
    private String lname;
    private String vechile_no;
    @JsonFormat(pattern="HH:mm:ss")
    private Time start_time;

    @JsonFormat(pattern="HH:mm:ss")
    private Time end_time;


    public Time getStart_time() {
        return start_time;
    }

    public void setStart_time(Time start_time) {
        this.start_time = start_time;
    }

    public Time getEnd_time() {
        return end_time;
    }

    public void setEnd_time(Time end_time) {
        this.end_time = end_time;
    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFname() {
        return fname;
    }

    public void setFname(String fname) {
        this.fname = fname;
    }

    public String getLname() {
        return lname;
    }

    public void setLname(String lname) {
        this.lname = lname;
    }

    public String getVechile_no() {
        return vechile_no;
    }

    public void setVechile_no(String vechile_no) {
        this.vechile_no = vechile_no;
    }


}*/
