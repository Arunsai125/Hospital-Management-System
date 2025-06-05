package com.hospital.management.repositories;

import com.hospital.management.models.Doctor;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import java.util.Optional;

public interface DoctorRepository extends JpaRepository<Doctor, Long> {
    Optional<Doctor> findByEmail(String email);
    boolean existsByEmail(String email);
    List<Doctor> findByStatus(Doctor.DoctorStatus status);
    List<Doctor> findBySpecialization(String specialization);
} 