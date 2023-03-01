package com.example.menu_cinesegiapponese.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.menu_cinesegiapponese.model.Ordini;

@Repository
public interface OrdiniRepository extends JpaRepository<Ordini, Long> {
    
}

