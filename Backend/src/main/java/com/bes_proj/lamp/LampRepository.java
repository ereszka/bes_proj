package com.bes_proj.lamp;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface LampRepository extends JpaRepository<Lamp, Long> {

    Optional<Lamp> findById(Long id);
    List<Lamp> findByName(String name);
}