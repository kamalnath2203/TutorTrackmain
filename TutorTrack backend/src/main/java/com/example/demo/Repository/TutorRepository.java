package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.demo.Model.Tutor;

@Repository
public interface TutorRepository extends JpaRepository<Tutor, Long> {
}
