package com.bes_proj.sensor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class SensorController {
    private final SensorService sensorService;

    @Autowired
    public SensorController(SensorService sensorService)
    {
        this.sensorService = sensorService;
    }

    @GetMapping("sensors")
    public List<Sensor> getSensors()
    {
        return sensorService.findAll();
    }
}