package com.kmdc.candidateform.Service;

import com.kmdc.candidateform.model.Candidate;
import com.kmdc.candidateform.repository.CandidateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CandidateServiceImpl implements CandidateService {

    private final CandidateRepository candidateRepository;

    @Autowired
    public CandidateServiceImpl(CandidateRepository candidateRepository) {
        this.candidateRepository = candidateRepository;
    }

    @Override
    public Candidate saveCandidate(Candidate candidate) {
        return candidateRepository.save(candidate);
    }


    @Override
    public List<Candidate> getAllCandidates() {
        return candidateRepository.findAll();  // Fetch all candidates
    }

    @Override
    public void markAsViewed(int candidateId) {
        Candidate candidate = candidateRepository.findById(candidateId).orElse(null);
        if (candidate != null) {
            candidate.setViewed(true);  // Assuming 'viewed' is a boolean in your Candidate model
            candidateRepository.save(candidate);
        }
    }


    @Override
    public void deleteCandidate(int candidateId) {
        candidateRepository.deleteById(candidateId);
    }
}
