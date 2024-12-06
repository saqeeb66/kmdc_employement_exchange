package com.kmdc.candidateform.repository;

import com.kmdc.candidateform.model.Candidate;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CandidateRepository extends JpaRepository<Candidate, Integer> {
    List<Candidate> findAllByOrderByViewedAsc(); // Custom query to fetch candidates by "viewed" status

    List<Candidate> findAllByOrderByCandidateIdAsc();



}
