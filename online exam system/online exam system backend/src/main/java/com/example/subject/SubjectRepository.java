package com.example.subject;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;


@Repository
public interface SubjectRepository extends CrudRepository<Subject, String> {
	
	@Transactional
	public int deleteByName(String name);

}
