package com.example.digital_guide.service;

import com.example.digital_guide.entity.Property;
import com.example.digital_guide.repository.PropertyRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class PropertyService {
    private final PropertyRepository propertyRepository;

    public Property createProperty(Property property){
        return propertyRepository.save(property);
    }

    public Property getPropertyBySlug(String slug) {
        return propertyRepository.findBySlug(slug)
                .orElseThrow(() -> new RuntimeException("Apartman s tim imenom ne postoji!"));
    }

    public List<Property> getAllProperties() {
        return propertyRepository.findAll();
    }

}
