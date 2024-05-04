package com.example.demo.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.Flower;

@Repository
public interface FlowerRepository extends JpaRepository<Flower, String> {
 
	 public Optional<Flower> findById(String id);
}
