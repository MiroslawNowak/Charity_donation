package pl.coderslab.charity.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pl.coderslab.charity.entity.Institution;
@Repository
public interface institutionRepository extends JpaRepository<Institution, Long> {
}
