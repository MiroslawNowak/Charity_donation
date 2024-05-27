package pl.coderslab.charity.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import pl.coderslab.charity.repository.DonationRepository;
import pl.coderslab.charity.repository.InstitutionRepository;

import java.util.List;


@Controller
@RequestMapping("/")
public class HomeController {

    private final InstitutionRepository institutionRepository;
    private final DonationRepository donationRepository;

    public HomeController(InstitutionRepository institutionRepository, DonationRepository donationRepository) {
        this.institutionRepository = institutionRepository;
        this.donationRepository = donationRepository;
    }

    @GetMapping
    public String homeAction(Model m){
        List<String> instName = institutionRepository.findAllNames();
        List<String> instDesc = institutionRepository.findAllDescription();
        Integer quantity = donationRepository.sumAllQuantities();
        Integer donations = donationRepository.sumAllDonations();
        m.addAttribute("instName", instName);
        m.addAttribute("instDesc", instDesc);
        m.addAttribute("quantity", quantity);
        m.addAttribute("donations", donations);
        return "index";
    }
}
