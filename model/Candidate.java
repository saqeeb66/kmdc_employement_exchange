package com.kmdc.candidateform.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.util.Date;
        @Entity
        public class Candidate {

            @Id
            @GeneratedValue(strategy = GenerationType.IDENTITY)

            private int  candidateId;



            private String name;
            private String email;
            private String mobile;


            private String areaOfInterest;
            private Date dob;
            private String gender;
            private String maritalStatus;
            private String profileSummary;
            private byte[] resume;
            private String resumeHeadline;
            private String keySkills;
            private String experience;

            // Address details
            private String address;
            private String District;
            private String state;
            private String country;
            private String pin;

            // Education details
            private String educationType;
            private String institutionName;
            private String schoolMedium;
            private double marksPercentage;
            private int startYear;
            private int endYear;
            private String gradingSystem;

            // Employment details
            private String currentEmployment;
            private String employmentType;
            private String companyName;
            private String jobTitle;
            private int joiningYear;
            private String joiningMonth;
            private int workedTillYear;
            private String workedTillMonth;
            private String noticePeriod;
            private String functionalArea;

            // Project details
            private String projectTitle;


            private String projectType;
            private String projectDescription;
            private String clientName;

            // Certificate details
            private String certificateName;
            private String issuingAuthority;
            private Date dateOfIssue;


            private boolean viewed; // Field to track view status


            public Candidate() {
            }

            public int getCandidateId() {
                return candidateId;
            }

            public void setCandidateId(int candidateId) {
                this.candidateId = candidateId;
            }

            public String getName() {
                return name;
            }

            public void setName(String name) {
                this.name = name;
            }

            public String getEmail() {
                return email;
            }

            public void setEmail(String email) {
                this.email = email;
            }

            public String getMobile() {
                return mobile;
            }

            public void setMobile(String mobileNumber) {
                this.mobile = mobileNumber;
            }

            public Date getDob() {
                return dob;
            }

            public void setDob(Date dob) {
                this.dob = dob;
            }

            public String getGender() {
                return gender;
            }

            public void setGender(String gender) {
                this.gender = gender;
            }

            public String getMaritalStatus() {
                return maritalStatus;
            }

            public void setMaritalStatus(String maritalStatus) {
                this.maritalStatus = maritalStatus;
            }

            public String getProfileSummary() {
                return profileSummary;
            }

            public void setProfileSummary(String profileSummary) {
                this.profileSummary = profileSummary;
            }

            public byte[] getResume() {
                return resume;
            }

            public void setResume(byte[] resume) {
                this.resume = resume;
            }

            public String getResumeHeadline() {
                return resumeHeadline;
            }

            public void setResumeHeadline(String resumeHeadline) {
                this.resumeHeadline = resumeHeadline;
            }

            public String getKeySkills() {
                return keySkills;
            }

            public void setKeySkills(String keySkills) {
                this.keySkills = keySkills;
            }

            public String getExperience() {
                return experience;
            }

            public void setExperience(String experience) {
                this.experience = experience;
            }

            public String getAddress() {
                return address;
            }

            public void setAddress(String address) {
                this.address = address;
            }

            public String getDistrict() {
                return District;
            }

            public void setDistrict(String city) {
                this.District = District;
            }

            public String getState() {
                return state;
            }

            public boolean isViewed() {
                return viewed;
            }

            public void setState(String state) {
                this.state = state;
            }

            public String getCountry() {
                return country;
            }

            public void setCountry(String country) {
                this.country = country;
            }

            public String getPin() {
                return pin;
            }

            public void setPin(String pin) {
                this.pin = pin;
            }

            public String getEducationType() {
                return educationType;
            }

            public void setEducationType(String educationType) {
                this.educationType = educationType;
            }

            public String getInstitutionName() {
                return institutionName;
            }

            public void setInstitutionName(String institutionName) {
                this.institutionName = institutionName;
            }

            public String getSchoolMedium() {
                return schoolMedium;
            }

            public void setSchoolMedium(String schoolMedium) {
                this.schoolMedium = schoolMedium;
            }

            public double getMarksPercentage() {
                return marksPercentage;
            }

            public void setMarksPercentage(double marksPercentage) {
                this.marksPercentage = marksPercentage;
            }

            public int getStartYear() {
                return startYear;
            }

            public void setStartYear(int startYear) {
                this.startYear = startYear;
            }

            public int getEndYear() {
                return endYear;
            }

            public void setEndYear(int endYear) {
                this.endYear = endYear;
            }

            public String getGradingSystem() {
                return gradingSystem;
            }

            public void setGradingSystem(String gradingSystem) {
                this.gradingSystem = gradingSystem;
            }

            public String getCurrentEmployment() {
                return currentEmployment;
            }

            public void setCurrentEmployment(String currentEmployment) {
                this.currentEmployment = currentEmployment;
            }

            public String getEmploymentType() {
                return employmentType;
            }

            public void setEmploymentType(String employmentType) {
                this.employmentType = employmentType;
            }

            public String getCompanyName() {
                return companyName;
            }

            public void setCompanyName(String companyName) {
                this.companyName = companyName;
            }

            public String getJobTitle() {
                return jobTitle;
            }

            public void setJobTitle(String jobTitle) {
                this.jobTitle = jobTitle;
            }

            public int getJoiningYear() {
                return joiningYear;
            }

            public void setJoiningYear(int joiningYear) {
                this.joiningYear = joiningYear;
            }

            public String getJoiningMonth() {
                return joiningMonth;
            }

            public void setJoiningMonth(String joiningMonth) {
                this.joiningMonth = joiningMonth;
            }

            public int getWorkedTillYear() {
                return workedTillYear;
            }

            public void setWorkedTillYear(int workedTillYear) {
                this.workedTillYear = workedTillYear;
            }

            public String getWorkedTillMonth() {
                return workedTillMonth;
            }

            public void setWorkedTillMonth(String workedTillMonth) {
                this.workedTillMonth = workedTillMonth;
            }

            public String getNoticePeriod() {
                return noticePeriod;
            }

            public void setNoticePeriod(String noticePeriod) {
                this.noticePeriod = noticePeriod;
            }

            public String getFunctionalArea() {
                return functionalArea;
            }

            public void setFunctionalArea(String functionalArea) {
                this.functionalArea = functionalArea;
            }

            public String getProjectTitle() {
                return projectTitle;
            }

            public void setProjectTitle(String projectTitle) {
                this.projectTitle = projectTitle;
            }

            public String getProjectType() {
                return projectType;
            }

            public void setProjectType(String projectType) {
                this.projectType = projectType;
            }

            public String getProjectDescription() {
                return projectDescription;
            }

            public void setProjectDescription(String projectDescription) {
                this.projectDescription = projectDescription;
            }

            public String getClientName() {
                return clientName;
            }

            public void setClientName(String clientName) {
                this.clientName = clientName;
            }

            public String getCertificateName() {
                return certificateName;
            }

            public void setCertificateName(String certificateName) {
                this.certificateName = certificateName;
            }

            public String getIssuingAuthority() {
                return issuingAuthority;
            }

            public void setIssuingAuthority(String issuingAuthority) {
                this.issuingAuthority = issuingAuthority;
            }

            public Date getDateOfIssue() {
                return dateOfIssue;
            }

            public void setDateOfIssue(Date dateOfIssue) {
                this.dateOfIssue = dateOfIssue;
            }

            public String getAreaOfInterest() {
                return areaOfInterest;
            }

            public void setAreaOfInterest(String areaOfInterest) {
                this.areaOfInterest = areaOfInterest;
            }

            public void setViewed(boolean viewed) {
                this.viewed = viewed;
            }


        }


