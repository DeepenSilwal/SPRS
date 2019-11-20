package com.software2.SPRS.model;

import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.*;
import java.sql.Date;
import java.sql.Time;

@Entity
@Table(name="User")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String fname;
    private String lname;
    private String vechile_no;
    private String typeofpark;

    @JsonFormat(pattern="HH:mm:ss")
    private Time start_time;

    @JsonFormat(pattern="HH:mm:ss")
    private Time end_time;

    @JsonFormat(pattern="yyyy-MM-dd")
    private Date start_date;

    @JsonFormat(pattern="yyyy-MM-dd")
    private Date end_date;

    @JsonFormat(pattern="HH:mm:ss")
    private Time monday_starttime;

    @JsonFormat(pattern="HH:mm:ss")
    private Time monday_endtime;

    @JsonFormat(pattern="HH:mm:ss")
    private Time tuesday_starttime;

    @JsonFormat(pattern="HH:mm:ss")
    private Time tuesday_endtime;

    @JsonFormat(pattern="HH:mm:ss")
    private Time wednesday_starttime;

    @JsonFormat(pattern="HH:mm:ss")
    private Time wednesday_endtime;

    @JsonFormat(pattern="HH:mm:ss")
    private Time thursday_starttime;

    @JsonFormat(pattern="HH:mm:ss")
    private Time thursday_endtime;

    @JsonFormat(pattern="HH:mm:ss")
    private Time friday_starttime;

    @JsonFormat(pattern="HH:mm:ss")
    private Time friday_endtime;

    @JsonFormat(pattern="HH:mm:ss")
    private Time saturday_starttime;

    @JsonFormat(pattern="HH:mm:ss")
    private Time saturday_endtime;

    @JsonFormat(pattern="HH:mm:ss")
    private Time sunday_starttime;

    @JsonFormat(pattern="HH:mm:ss")
    private Time sunday_endtime;

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

    public String getTypeofpark() {
        return typeofpark;
    }

    public void setTypeofpark(String typeofpark) {
        this.typeofpark = typeofpark;
    }

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

    public Date getStart_date() {
        return start_date;
    }

    public void setStart_date(Date start_date) {
        this.start_date = start_date;
    }

    public Date getEnd_date() {
        return end_date;
    }

    public void setEnd_date(Date end_date) {
        this.end_date = end_date;
    }

    public Time getMonday_starttime() {
        return monday_starttime;
    }

    public void setMonday_starttime(Time monday_starttime) {
        this.monday_starttime = monday_starttime;
    }

    public Time getMonday_endtime() {
        return monday_endtime;
    }

    public void setMonday_endtime(Time monday_endtime) {
        this.monday_endtime = monday_endtime;
    }

    public Time getTuesday_starttime() {
        return tuesday_starttime;
    }

    public void setTuesday_starttime(Time tuesday_starttime) {
        this.tuesday_starttime = tuesday_starttime;
    }

    public Time getTuesday_endtime() {
        return tuesday_endtime;
    }

    public void setTuesday_endtime(Time tuesday_endtime) {
        this.tuesday_endtime = tuesday_endtime;
    }

    public Time getWednesday_starttime() {
        return wednesday_starttime;
    }

    public void setWednesday_starttime(Time wednesday_starttime) {
        this.wednesday_starttime = wednesday_starttime;
    }

    public Time getWednesday_endtime() {
        return wednesday_endtime;
    }

    public void setWednesday_endtime(Time wednesday_endtime) {
        this.wednesday_endtime = wednesday_endtime;
    }

    public Time getThursday_starttime() {
        return thursday_starttime;
    }

    public void setThursday_starttime(Time thursday_starttime) {
        this.thursday_starttime = thursday_starttime;
    }

    public Time getThursday_endtime() {
        return thursday_endtime;
    }

    public void setThursday_endtime(Time thursday_endtime) {
        this.thursday_endtime = thursday_endtime;
    }

    public Time getFriday_starttime() {
        return friday_starttime;
    }

    public void setFriday_starttime(Time friday_starttime) {
        this.friday_starttime = friday_starttime;
    }

    public Time getFriday_endtime() {
        return friday_endtime;
    }

    public void setFriday_endtime(Time friday_endtime) {
        this.friday_endtime = friday_endtime;
    }

    public Time getSaturday_starttime() {
        return saturday_starttime;
    }

    public void setSaturday_starttime(Time saturday_starttime) {
        this.saturday_starttime = saturday_starttime;
    }

    public Time getSaturday_endtime() {
        return saturday_endtime;
    }

    public void setSaturday_endtime(Time saturday_endtime) {
        this.saturday_endtime = saturday_endtime;
    }

    public Time getSunday_starttime() {
        return sunday_starttime;
    }

    public void setSunday_starttime(Time sunday_starttime) {
        this.sunday_starttime = sunday_starttime;
    }

    public Time getSunday_endtime() {
        return sunday_endtime;
    }

    public void setSunday_endtime(Time sunday_endtime) {
        this.sunday_endtime = sunday_endtime;
    }
}
