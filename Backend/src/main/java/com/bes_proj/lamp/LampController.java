package com.bes_proj.lamp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class LampController {
    private final LampService lampService;

    @Autowired
    public LampController(LampService lampService)
    {
        this.lampService = lampService;
    }

    @GetMapping("lamps")
    public List<Lamp> getSensors()
    {
        return lampService.findAll();
    }
}