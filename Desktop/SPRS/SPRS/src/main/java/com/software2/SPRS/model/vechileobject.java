package com.software2.SPRS.model;

import java.util.Date;

public class vechileobject {
    private String fname;
    private String lname;
    private Date start_time;
    private Date end_time;
    private String vechile_no;


    public vechileobject(String fname, String lname, Date start_time, Date end_time, String vechile_no) {
        this.fname = fname;
        this.lname = lname;
        this.start_time = start_time;
        this.end_time = end_time;
        this.vechile_no = vechile_no;
    }

    public Date getStart_time() {
        return start_time;
    }

    public Date getEnd_time() {
        return end_time;
    }

    public void setStart_time(Date start_time) {
        this.start_time = start_time;
    }

    public void setEnd_time(Date end_time) {
        this.end_time = end_time;
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
}
