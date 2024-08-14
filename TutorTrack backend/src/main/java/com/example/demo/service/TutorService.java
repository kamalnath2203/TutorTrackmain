package com.example.demo.service;

import com.example.demo.Model.Tutor;
import com.example.demo.Repository.TutorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@Service
public class TutorService {

    @Autowired
    private TutorRepository tutorRepository;

    public void saveTutor(Tutor tutor, MultipartFile certificate) throws IOException {
        // Save the tutor and handle certificate file saving logic if needed
        tutorRepository.save(tutor);
    }

    public List<Tutor> getTutors() {
        return tutorRepository.findAll();
    }

    public Optional<Tutor> getTutorById(Long id) {
        return tutorRepository.findById(id);
    }

    public void updateTutor(Long id, Tutor tutorDetails) {
        Optional<Tutor> tutorOptional = tutorRepository.findById(id);

        if (tutorOptional.isPresent()) {
            Tutor tutor = tutorOptional.get();
            tutor.setFirstName(tutorDetails.getFirstName());
            tutor.setLastName(tutorDetails.getLastName());
            tutor.setExperience(tutorDetails.getExperience());
            tutor.setExpectedSalary(tutorDetails.getExpectedSalary());
            tutor.setAvailableHoursStart(tutorDetails.getAvailableHoursStart());
            tutor.setAvailableHoursEnd(tutorDetails.getAvailableHoursEnd());
            tutor.setDepartment(tutorDetails.getDepartment());

            tutorRepository.save(tutor);
        } else {
            throw new RuntimeException("Tutor not found with id: " + id);
        }
    }

    public void deleteTutor(Long id) {
        Optional<Tutor> tutorOptional = tutorRepository.findById(id);

        if (tutorOptional.isPresent()) {
            tutorRepository.deleteById(id);
        } else {
            throw new RuntimeException("Tutor not found with id: " + id);
        }
    }
}
