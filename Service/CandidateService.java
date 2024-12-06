package com.kmdc.candidateform.Service;

import com.kmdc.candidateform.model.Candidate;
import java.util.List;

public interface CandidateService {
    Candidate saveCandidate(Candidate candidate);
    List<Candidate> getAllCandidates();
    void markAsViewed(int candidateId);
    void deleteCandidate(int candidateId);


}
