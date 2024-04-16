package com.bes_proj.sensor;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface SensorRepository extends JpaRepository<Sensor, Long> {

    Optional<Sensor> findById(Long id);
    List<Sensor> findByName(String name);
}