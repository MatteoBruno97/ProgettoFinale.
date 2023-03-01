package com.example.menu_cinesegiapponese.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.menu_cinesegiapponese.model.Ordini;
import com.example.menu_cinesegiapponese.repository.OrdiniRepository;

@Service
public class OrdiniService {
    @Autowired
    private OrdiniRepository ordiniRepository;
    
    public Ordini saveOrdini(Ordini Ordini){
        return ordiniRepository.save(Ordini);
    }

    public List<Ordini> getAllOrdini(){
        return ordiniRepository.findAll();
    }

    public Ordini findOrdiniById(Long id){
        Optional<Ordini> tempOrdini = ordiniRepository.findById(id);

        if(tempOrdini.isPresent()){
            return tempOrdini.get();
        }else{
            return null;
        }
    }
    
    public void deleteByID(Long id) {
        ordiniRepository.deleteById(id);
    }
}