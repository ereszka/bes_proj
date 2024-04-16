package com.bes_proj.lamp;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="lamp")
public class Lamp {

    @Id
    @GeneratedValue
    private Long id;

    private String name;
    private String type;
    private boolean state;

    public Lamp(String name, String type, boolean state){
        this.name = name;
        this.type = type;
        this.state = state;
    }

    public Lamp() {

    }

    public Long getId() {
        return this.id;
    }

    public String getName() {
        return this.name;
    }

    public String getType() {
        return this.type;
    }

    public boolean getState() {
        return this.state;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setType(String type) {
        this.type = type;
    }

    public void setState(boolean state) {
        this.state = state;
    }
}