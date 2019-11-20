package com.software2.SPRS.model;

import java.sql.Time;
import java.util.Date;

public class timeobject {
    private Date start_time;

    public Date getStart_time() {
        return start_time;
    }

    public void setStart_time(Date start_time) {
        this.start_time = start_time;
    }

    public Date getEnd_time() {
        return end_time;
    }

    public void setEnd_time(Date end_time) {
        this.end_time = end_time;
    }

    private Date end_time;

    public timeobject(Date start_time, Date end_time) {
        this.start_time = start_time;
        this.end_time = end_time;
    }
}
