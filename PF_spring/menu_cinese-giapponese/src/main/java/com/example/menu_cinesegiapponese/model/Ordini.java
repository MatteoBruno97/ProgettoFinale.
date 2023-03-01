package com.example.menu_cinesegiapponese.model;
import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
public class Ordini {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column
    private String nomePiatto;

    @Column
    private int quantita; 

    @Column
    private float prezzo;

    @Column
    private LocalDateTime oraOrdine;

    public Ordini(String nomePiatto, int quantita,float prezzo, LocalDateTime oraOrdine) {
        this.nomePiatto = nomePiatto;
        this.quantita = quantita;
        this.prezzo = prezzo;
        this.oraOrdine = oraOrdine;
    }

    
    
}

