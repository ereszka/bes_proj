package com.bes_proj.lamp;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LampService {

    private final LampRepository LampRepository;

    @Autowired
    public LampService(LampRepository LampRepository)
    {
        this.LampRepository = LampRepository;
    }

    public List<Lamp> findAll()
    {
        return LampRepository.findAll();
    }

    public Optional<Lamp> findById(Long id)
    {
        return LampRepository.findById(id);
    }

    public List<Lamp> findByName(String name)
    {
        return LampRepository.findByName(name);
    }
}