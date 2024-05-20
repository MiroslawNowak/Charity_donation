package pl.coderslab.charity.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import pl.coderslab.charity.repository.InstitutionRepository;

import java.util.List;


@Controller
@RequestMapping("/")
public class HomeController {

    private final InstitutionRepository institutionRepository;

    public HomeController(InstitutionRepository institutionRepository) {
        this.institutionRepository = institutionRepository;
    }

    @GetMapping("/home")
    public String homeAction(Model m){
        List<String> instName = institutionRepository.findAllNames();
        List<String> instDesc = institutionRepository.findAllDescription();
        m.addAttribute("instName", instName);
        m.addAttribute("instDesc", instDesc);
        return "index";
    }
}
