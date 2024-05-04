package com.example.demo.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Flower {
	
	@Id
	@GeneratedValue(strategy = GenerationType.UUID)
	@Column(name = "flower_id")
	private String flowerId;
	
	@Column(name = "flower_name")
	private String flowerName;
	
	@Column(name = "flower_quantity")
	private int flowerQuantity;
	
	@Column(name = "flower_price")
	private double flowerPrice ;
	
	@Column(name = "flower_image_url")
	private String flowerImageUrl;

	public String getFlowerId() {
		return flowerId;
	}

	public void setFlowerId(String flowerId) {
		this.flowerId = flowerId;
	}

	public String getFlowerName() {
		return flowerName;
	}

	public void setFlowerName(String flowerName) {
		this.flowerName = flowerName;
	}

	public int getFlowerQuantity() {
		return flowerQuantity;
	}

	public void setFlowerQuantity(int flowerQuantity) {
		this.flowerQuantity = flowerQuantity;
	}

	public double getFlowerPrice() {
		return flowerPrice;
	}

	public void setFlowerPrice(double flowerPrice) {
		this.flowerPrice = flowerPrice;
	}

	public String getFlowerImageUrl() {
		return flowerImageUrl;
	}

	public void setFlowerImageUrl(String flowerImageUrl) {
		this.flowerImageUrl = flowerImageUrl;
	}
	
	

}
