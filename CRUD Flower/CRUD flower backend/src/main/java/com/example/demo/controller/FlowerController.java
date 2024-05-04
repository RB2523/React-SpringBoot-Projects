package com.example.demo.controller;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Flower;
import com.example.demo.repository.FlowerRepository;

@RestController
@CrossOrigin("*")
public class FlowerController {
	
	@Autowired
	private FlowerRepository flowerRepository ;

	@GetMapping("/")
	public ResponseEntity<List<Flower>> getAllFlowers() {
		List<Flower> list = this.flowerRepository.findAll();
		return ResponseEntity.status(HttpStatus.OK).body(list);
	}
	
	@GetMapping("/flower/{id}")
	public ResponseEntity<Flower> getThisFlower(@PathVariable String id) {
		
		Optional<Flower> flower = this.flowerRepository.findById(id);
	    
	     if(flower.isEmpty()) return ResponseEntity.status(HttpStatus.NO_CONTENT).body(null); 
		return ResponseEntity.status(HttpStatus.OK).body(flower.get());
	}
	
	@PostMapping("/flower")
	public ResponseEntity<Flower> saveFlower(@RequestBody Flower flower) {
		this.flowerRepository.save(flower);
		return ResponseEntity.status(HttpStatus.CREATED).body(flower);
	}
	
	@PutMapping("/flower/{id}")
	public ResponseEntity<Flower> editFlower(@PathVariable String id , @RequestBody Flower flower) {
		
		ResponseEntity<Flower> output = getThisFlower(id);
		if( !output.hasBody()) return ResponseEntity.status(HttpStatus.NO_CONTENT).body(null);
		
		flower.setFlowerId(id);
		this.flowerRepository.save(flower);
		return ResponseEntity.status(HttpStatus.OK).body(flower);
	}
	
	@DeleteMapping("/flower/{id}")
	public ResponseEntity<String> deleteFlower(@PathVariable String id) {
		
		ResponseEntity<Flower> output = getThisFlower(id);
		if( !output.hasBody()) return ResponseEntity.status(HttpStatus.NO_CONTENT).body(null);
		
		this.flowerRepository.deleteById(id);
		return ResponseEntity.status(HttpStatus.OK).body("Deleted");
	}
	
}
