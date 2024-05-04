package com.example.user;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("*")
public class UserController {

	   @Autowired
	   private UserRepository userRepository;
	   
	     // get all user
		   @GetMapping("/user")
		   public List<User> getAllUser() {
			   return (List<User>)this.userRepository.findAll();
		   }
	   
	   
	   // get user detail by its email
	   @GetMapping("/user/{email}")
	   public User getUserDetails(@PathVariable("email") String email) {
		   return this.userRepository.findByEmail(email);
	   }
	   
	   
	   // to add a new user
	   @PostMapping("/user")
	   public User addNewUser(@RequestBody User user) {
		   return this.userRepository.save(user);
	   }
}
