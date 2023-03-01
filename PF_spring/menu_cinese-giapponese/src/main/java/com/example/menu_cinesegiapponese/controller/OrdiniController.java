package com.example.menu_cinesegiapponese.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.menu_cinesegiapponese.model.Ordini;
import com.example.menu_cinesegiapponese.service.OrdiniService;

@RestController
@RequestMapping("/api/ordini")
@CrossOrigin
public class OrdiniController {

    @Autowired
    private OrdiniService ordiniService;

    @PostMapping("/create")
    public ResponseEntity<?> createOrdini(@RequestBody Ordini[] newOrdini) {
        for (Ordini ordini : newOrdini) {
            ordiniService.saveOrdini(ordini);
        }
        return new ResponseEntity<>(newOrdini, HttpStatus.CREATED);
    }

    @GetMapping("/all")
    public ResponseEntity<List<Ordini>> findAllOrdini() {
        return new ResponseEntity<>(ordiniService.getAllOrdini(), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteOrdine(@PathVariable("id") Long id) {
        ordiniService.deleteByID(id);
        return ResponseEntity.ok().build();
    }
}
