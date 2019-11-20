/*package com.software2.SPRS.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name="Schedule")
public class Schedule {
    @Id
    private Long id;

    private String Days;

    @Temporal(TemporalType.TIME)
    private java.util.Date Start_Time;

    @Temporal(TemporalType.TIME)
    private java.util.Date End_Time;



}
*/