package com.bes_proj.sensor;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SensorService {

    private final SensorRepository sensorRepository;

    @Autowired
    public SensorService(SensorRepository sensorRepository)
    {
        this.sensorRepository = sensorRepository;
    }

    public List<Sensor> findAll()
    {
        return sensorRepository.findAll();
    }

    public Optional<Sensor> findById(Long id)
    {
        return sensorRepository.findById(id);
    }

    public List<Sensor> findByName(String name)
    {
        return sensorRepository.findByName(name);
    }
}