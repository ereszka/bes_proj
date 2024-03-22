package com.example.bes_proj;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class TerrariumController {
    @GetMapping("/")
    public String hello(Model model) {
        model.addAttribute("message", "Hello World");
        return "terrarium";
    }

}