package com.kmdc.candidateform.Controller;

import com.kmdc.candidateform.Service.CandidateService;
import com.kmdc.candidateform.model.Candidate;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/candidate")
@CrossOrigin
public class CandidateController {
    @Autowired
    private CandidateService candidateService;

    @PostMapping("/add")
    public String add(@RequestBody Candidate candidate){
        candidateService.saveCandidate(candidate);
        return "new candidate is added";
    }
    @GetMapping("/getAll")
    public List<Candidate> getAllCandidate() {
        return candidateService.getAllCandidates();
    }
    @PutMapping("/markAsViewed/{candidateId}")
    public String markAsViewed(@PathVariable int candidateId) {
        candidateService.markAsViewed(candidateId);
        return "Candidate marked as viewed.";
    }
    @DeleteMapping("/delete/{candidateId}")
    public String deleteCandidate(@PathVariable int candidateId) {
        candidateService.deleteCandidate(candidateId);
        return "Candidate deleted successfully.";
    }


    }




