package com.example.demo.Controller;

import com.example.demo.Model.Tutor;
import com.example.demo.service.TutorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/tutors")
public class TutorController {

    @Autowired
    private TutorService tutorService;

    public TutorController(TutorService tutorService) {
        this.tutorService = tutorService;
    }

    @PostMapping("/become")
    public ResponseEntity<String> saveTutor(
            @RequestParam("firstName") String firstName,
            @RequestParam("lastName") String lastName,
            @RequestParam("certificate") MultipartFile certificate,
            @RequestParam("experience") String experience,
            @RequestParam("expectedSalary") Double expectedSalary,
            @RequestParam("availableHoursStart") String availableHoursStartStr,
            @RequestParam("availableHoursEnd") String availableHoursEndStr,
            @RequestParam("department") String department) {

        try {
            DateTimeFormatter formatter = DateTimeFormatter.ofPattern("HH:mm");
            LocalTime availableHoursStart = LocalTime.parse(availableHoursStartStr, formatter);
            LocalTime availableHoursEnd = LocalTime.parse(availableHoursEndStr, formatter);

            Tutor tutor = new Tutor();
            tutor.setFirstName(firstName);
            tutor.setLastName(lastName);
            tutor.setCertificate(certificate.getOriginalFilename());
            tutor.setExperience(experience);
            tutor.setExpectedSalary(expectedSalary);
            tutor.setAvailableHoursStart(availableHoursStart);
            tutor.setAvailableHoursEnd(availableHoursEnd);
            tutor.setDepartment(department);

            tutorService.saveTutor(tutor, certificate);
            return new ResponseEntity<>("Tutor application submitted successfully", HttpStatus.OK);
        } catch (IOException e) {
            return new ResponseEntity<>("Error submitting tutor application: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        } catch (Exception e) {
            return new ResponseEntity<>("Invalid time format: " + e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/fetch")
    public ResponseEntity<List<Tutor>> getAllTutors() {
        List<Tutor> tutors = tutorService.getTutors();
        return new ResponseEntity<>(tutors, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Tutor> getTutorById(@PathVariable Long id) {
        Optional<Tutor> tutor = tutorService.getTutorById(id);
        return tutor.map(ResponseEntity::ok)
                    .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
    public ResponseEntity<String> updateTutor(@PathVariable Long id, @RequestBody Tutor tutorDetails) {
        try {
            tutorService.updateTutor(id, tutorDetails);
            return new ResponseEntity<>("Tutor updated successfully", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Error updating tutor: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteTutor(@PathVariable Long id) {
        try {
            tutorService.deleteTutor(id);
            return new ResponseEntity<>("Tutor deleted successfully", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Error deleting tutor: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
}
	