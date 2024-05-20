package pl.coderslab.charity.entity;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "category")
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @ManyToMany(mappedBy = "categories")
    private List<Donation> donations;
    public Category() {
    }

    public Category(String name, List<Donation> donations) {
        this.name = name;
        this.donations = donations;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public Category setName(String name) {
        this.name = name;
        return this;
    }

    public List<Donation> getDonations() {
        return donations;
    }

    public Category setDonations(List<Donation> donations) {
        this.donations = donations;
        return this;
    }
}
