package com.example.digital_guide.repository;

import com.example.digital_guide.entity.Recommendation;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RecommendationRepository extends JpaRepository<Recommendation, Long> {
    List<Recommendation> findByPropertyId(Long propertyId);
}
