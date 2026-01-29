package com.example.digital_guide.controller;

import com.example.digital_guide.entity.Instruction;
import com.example.digital_guide.entity.Property;
import com.example.digital_guide.service.PropertyService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/properties")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
public class PropertyController {

    private final PropertyService propertyService;

    @PostMapping
    public ResponseEntity<Property> create(@RequestBody Property property){
        Property savedProperty = propertyService.createProperty(property);
        return ResponseEntity.ok(savedProperty);
    }

    @GetMapping
    public ResponseEntity<List<Property>> getAll(){
        List<Property> properties = propertyService.getAllProperties();
        return ResponseEntity.ok(properties);
    }

    @GetMapping("/{slug}")
    public ResponseEntity<Property> getBySlug(@PathVariable String slug) {
        Property property = propertyService.getPropertyBySlug(slug);
        return ResponseEntity.ok(property);
    }

    @PostMapping("/{id}/instructions")
    public ResponseEntity<Instruction> addInstruction(@PathVariable Long id, @RequestBody Instruction instruction){
        return ResponseEntity.ok(propertyService.addInstructionToProperty(id, instruction));
    }
}
