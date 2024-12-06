import React, { useState } from 'react';
import './underline.css';
import { useNavigate , useLocation  } from 'react-router-dom';


const CandidateInformationForm = () => {
  const [openSection, setOpenSection] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    dob: '',
    gender: '',
    maritalStatus: '',
    address: '',
    District: '',
    state: '',
    country: '',
    pin: '',
    educationType: '',
    institutionName: '',
    schoolMedium: '',
    marks: '',
    startYear: '',
    endYear: '',
    gradingSystem: '',
    profileSummary: '',
    resume: null,
    resumeHeadline: '',
    keySkills: '',
    experience: '',
    currentEmployment: '',
    employmentType: '',
    areaOfInterest: '',
    companyName: '',
    jobTitle: '',
    joiningYear: '',
    joiningMonth: '',
    workedTillYear: '',
    workedTillMonth: '',
    noticePeriod: '',
    functionalArea: '',
    projectTitle: '',
    projectType: '',
    projectDescription: '',
    clientName: '',
    certificateName: '',
    issuingAuthority: '',
    dateOfIssue: '',
  });

  const districtPinMapping = {
    Bagalkot: "587101",
    Ballari: "583101",
    Belagavi: "590001",
    Bengaluru_Rural: "562123",
    Bengaluru_Urban: "560001",
    Bidar: "585401",
    Chamarajanagar: "571313",
    Chikballapur: "562101",
    Chikkamagaluru: "577101",
    Chitradurga: "577501",
    Dakshina_Kannada: "575001",
    Davanagere: "577002",
    Dharwad: "580001",
    Gadag: "582101",
    Hassan: "573201",
    Haveri: "581110",
    Kalaburagi: "585101",
    Kodagu: "571201",
    Kolar: "563101",
    Koppal: "583231",
    Mandya: "571401",
    Mysuru: "570001",
    Raichur: "584101",
    Ramanagara: "562159",
    Shivamogga: "577201",
    Tumakuru: "572101",
    Udupi: "576101",
    Uttara_Kannada: "581301",
    Vijayapura: "586101",
    Yadgir: "585201",
  };


  const navigate = useNavigate();

  const location = useLocation();
  
 

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  const handleSubmit = () => {
    navigate('/response', { state: formData });
  };
  const handleDistrictChange = (event) => {
    const selectedDistrict = event.target.value;
    setFormData({
      ...formData,
      District: selectedDistrict,
      pin: districtPinMapping[selectedDistrict] || "",
    });
  };
  const handlePinChange = (event) => {
    setFormData({
      ...formData,
      pin: event.target.value, // Allow user to manually edit the pin if needed
    });
  };
  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };
  const handleMarksChange = (e) => {
    const value = e.target.value;
  
    // Only allow numbers and decimals
    if (!/^\d*\.?\d*$/.test(value)) {
      // Display a custom error message if non-numeric input is entered
      alert("Please enter a valid number (e.g., 85 or 85.5)");
      return;  // Prevent the input from updating with invalid characters
    }
  
    // Update form data if input is valid
    setFormData({
      ...formData,
      marks: value
    });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  
  


  return (
    <div className="form-container">
      <h2>Candidate Information Form</h2>
      
      {/* Personal Details Section */}
      <div className="section">
  <div className="section-header" onClick={() => toggleSection('personal')}>PERSONAL DETAILS</div>
  {openSection === 'personal' && (
    <div className="section-content">
      <label>Name <span className="required">*</span></label>
      <input
        type="text"
        name="name"
        placeholder="Enter your Name"
        value={formData.name}
        onChange={handleChange}
        required
      />

<label>Email ID <span className="required">*</span></label>
<input
  type="email"
  name="email"
  placeholder="Enter your Email ID"
  value={formData.email}
  onChange={handleChange}
  required
  pattern="[a-zA-Z0-9._%+-]+@gmail\.com$" 
  title="Please enter a valid Gmail address (e.g. user@gmail.com)"
  onInvalid={(e) => e.target.setCustomValidity('Format is not allowed. Please enter a valid Gmail address (e.g. user@gmail.com).')}
  onInput={(e) => e.target.setCustomValidity('')}  // Clears the custom validity when the user starts typing
/>


      <label>Mobile Number <span className="required">*</span></label>
      <input
        type="tel"
        name="mobile"
        pattern="[0-9]{10}"
        placeholder="Enter your Mobile Number"
        value={formData.mobile}
        onChange={handleChange}
        required
      />

      <label>Date of Birth <span className="required">*</span></label>
      <input
        type="date"
        name="dob"
        placeholder="Enter your Date of Birth"
        value={formData.dob}
        onChange={handleChange}
        required
      />
      
     <label>Area Of Interest <span className="required">*</span></label>
<select
  name="areaOfInterest"
  value={formData.areaOfInterest}
  onChange={handleChange}
  >
  <option value="">Select your Area Of Interest</option>
  <option value="Software Development">Software Development</option>
  <option value="Web Development">Web Development</option>
  <option value="Mobile App Development">Mobile App Development</option>
  <option value="Data Science">Data Science</option>
  <option value="Artificial Intelligence (AI)">Artificial Intelligence (AI)</option>
  <option value="Machine Learning (ML)">Machine Learning (ML)</option>
  <option value="Cybersecurity">Cybersecurity</option>
  <option value="Cloud Computing">Cloud Computing</option>
  <option value="Blockchain Development">Blockchain Development</option>
  <option value="Internet of Things (IoT)">Internet of Things (IoT)</option>
  <option value="DevOps">DevOps</option>
  <option value="Game Development">Game Development</option>
  <option value="Network Administration">Network Administration</option>
  <option value="Database Management">Database Management</option>
  <option value="IT Support/Helpdesk">IT Support/Helpdesk</option>
  <option value="Product Management">Product Management</option>
  <option value="Project Management">Project Management</option>
  <option value="Business Analysis">Business Analysis</option>
  <option value="Digital Marketing">Digital Marketing</option>
  <option value="SEO (Search Engine Optimization)">SEO (Search Engine Optimization)</option>
  <option value="Content Writing/Editing">Content Writing/Editing</option>
  <option value="Social Media Marketing">Social Media Marketing</option>
  <option value="Graphic Design">Graphic Design</option>
  <option value="UX/UI Design">UX/UI Design</option>
  <option value="Video Production">Video Production</option>
  <option value="Photography">Photography</option>
  <option value="Sales">Sales</option>
  <option value="Customer Support">Customer Support</option>
  <option value="Human Resources">Human Resources</option>
  <option value="Accounting/Finance">Accounting/Finance</option>
  <option value="Legal">Legal</option>
  <option value="Healthcare">Healthcare</option>
  <option value="Pharmaceuticals">Pharmaceuticals</option>
  <option value="Manufacturing">Manufacturing</option>
  <option value="Supply Chain Management">Supply Chain Management</option>
  <option value="Retail">Retail</option>
  <option value="Hospitality">Hospitality</option>
  <option value="Education">Education</option>
  <option value="Non-Profit/NGO">Non-Profit/NGO</option>
  <option value="Energy">Energy</option>
  <option value="Automotive">Automotive</option>
  <option value="Agriculture">Agriculture</option>
  <option value="Construction">Construction</option>
  <option value="Transportation">Transportation</option>
  <option value="Real Estate">Real Estate</option>
  <option value="Tourism">Tourism</option>
  <option value="Other">Other</option>
  </select>
      {formData.areaOfInterest === "Other" && (
    <input 
    type="text"
    name="otherAreaOfInterest" 
    placeholder="Please specify" 
    value={formData.otherAreaOfInterest} 
    onChange={handleChange} 
    />
)}
  



      <label>Gender <span className="required">*</span></label>
      <select name="gender" value={formData.gender} onChange={handleChange} required>
        <option value="">Select</option>
        <option>Male</option>
        <option>Female</option>
        <option>Other</option>
      </select>

      <label>Marital Status <span className="required">*</span></label>
      <select name="maritalStatus" value={formData.maritalStatus} onChange={handleChange} required>
        <option value="">Select</option>
        <option>Unmarried</option>
        <option>Married</option>
      </select>
    </div>
  )}
</div>



     {/* Address Details Section */}
  <div className="section">
  <div className="section-header" onClick={() => toggleSection('address')}>ADDRESS DETAILS</div>
  {openSection === 'address' && (
    <div className="section-content">
      <label>Address<span className="required">*</span></label>
      <input
        type="text"
        name="address"
        placeholder="Enter your address"
        value={formData.address}
        onChange={handleChange}
      />

      <label>Country<span className="required">*</span></label>
      <input
        type="text"
        name="country"
        placeholder="Enter your country"
        value={formData.country}
        onChange={handleChange}
      />

      <label>State<span className="required">*</span></label>
      <select
        name="state"
        value={formData.state}
        onChange={handleChange}
      >
        <option value="">Select Your State</option>
        {/* States of India */}
        <option value="Andhra Pradesh">Andhra Pradesh</option>
        <option value="Arunachal Pradesh">Arunachal Pradesh</option>
        <option value="Assam">Assam</option>
        <option value="Bihar">Bihar</option>
        <option value="Chhattisgarh">Chhattisgarh</option>
        <option value="Goa">Goa</option>
        <option value="Gujarat">Gujarat</option>
        <option value="Haryana">Haryana</option>
        <option value="Himachal Pradesh">Himachal Pradesh</option>
        <option value="Jharkhand">Jharkhand</option>
        <option value="Karnataka">Karnataka</option>
        <option value="Kerala">Kerala</option>
        <option value="Madhya Pradesh">Madhya Pradesh</option>
        <option value="Maharashtra">Maharashtra</option>
        <option value="Manipur">Manipur</option>
        <option value="Meghalaya">Meghalaya</option>
        <option value="Mizoram">Mizoram</option>
        <option value="Nagaland">Nagaland</option>
        <option value="Odisha">Odisha</option>
        <option value="Punjab">Punjab</option>
        <option value="Rajasthan">Rajasthan</option>
        <option value="Sikkim">Sikkim</option>
        <option value="Tamil Nadu">Tamil Nadu</option>
        <option value="Telangana">Telangana</option>
        <option value="Tripura">Tripura</option>
        <option value="Uttar Pradesh">Uttar Pradesh</option>
        <option value="Uttarakhand">Uttarakhand</option>
        <option value="West Bengal">West Bengal</option>

        {/* Union Territories */}
        <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
        <option value="Chandigarh">Chandigarh</option>
        <option value="Dadra and Nagar Haveli and Daman and Diu">
          Dadra and Nagar Haveli and Daman and Diu
        </option>
        <option value="Delhi">Delhi</option>
        <option value="Jammu and Kashmir">Jammu and Kashmir</option>
        <option value="Ladakh">Ladakh</option>
        <option value="Lakshadweep">Lakshadweep</option>
        <option value="Puducherry">Puducherry</option>
        <option>Other</option>

      </select>
      {formData.State === "Other" && (
    <input 
    type="text"
    name="otherState" 
    placeholder="Please specify" 
    value={formData.otherState} 
    onChange={handleChange} 
    />
)}
    

      <label>District<span className="required">*</span></label>
      <select
        name="district"
        value={formData.District}
        onChange={handleDistrictChange}
      >
        <option value="">Select Your District</option>
        {Object.keys(districtPinMapping).map((District) => (
          <option key={District} value={District}>
            {District}
          </option>
        ))}
      </select>

      <label>Pin Code<span className="required">*</span></label>
      <input
        type="number"
        name="pin"
        placeholder="Enter your Pin Code"
        value={formData.pin}
        onChange={handlePinChange}
      />
    </div>
    )}
  </div>
    <div className="section">
    <div className="section-header" onClick={() => toggleSection('education')}>EDUCATION DETAILS</div>
      {openSection === 'education' && (
      <div className="section-content">
      <label>Education Type<span className="required">*</span></label>
      <select
        name="educationType"
        value={formData.educationType}
        onChange={handleChange}
      >

  <option value="">Select Education Type</option>
  {/* Primary and Secondary Education */}
  <option value="SSLC">SSLC</option>
  <option value="HSC">HSC</option>
  <option value="Diploma">Diploma</option>
  <option value="GCSE">GCSE (UK)</option>
  <option value="A-Levels">A-Levels (UK)</option>
  <option value="High School Diploma">High School Diploma (USA)</option>
  <option value="IB Diploma">IB Diploma (International)</option>
  <option value="ISC">ISC</option>
  <option value="CBSE">CBSE</option>
  <option value="ICSE">ICSE</option>
  
  {/* Diplomas and Certifications */}
  <option value="Diploma in Engineering">Diploma in Engineering</option>
  <option value="D.Ed.">Diploma in Education (D.Ed.)</option>
  <option value="ITI">ITI (Industrial Training Certificate)</option>
  <option value="DCA">Diploma in Computer Applications (DCA)</option>
  <option value="PGDCA">PGDCA (Postgraduate Diploma in Computer Applications)</option>
  <option value="Diploma in Nursing">Diploma in Nursing</option>
  <option value="Diploma in Fine Arts">Diploma in Fine Arts</option>
  <option value="Certificate Courses">Certificate Courses</option>

  {/* Undergraduate Degrees */}
  <option value="BA">Bachelor of Arts (BA)</option>
  <option value="BSc">Bachelor of Science (BSc)</option>
  <option value="BCom">Bachelor of Commerce (BCom)</option>
  <option value="BEd">Bachelor of Education (BEd)</option>
  <option value="BE">Bachelor of Engineering (BE)</option>
  <option value="BTech">Bachelor of Technology (BTech)</option>
  <option value="MBBS">MBBS</option>
  <option value="BDS">BDS (Bachelor of Dental Surgery)</option>
  <option value="BArch">B.Arch (Bachelor of Architecture)</option>
  <option value="BBA">BBA (Bachelor of Business Administration)</option>
  <option value="BCA">BCA (Bachelor of Computer Applications)</option>
  <option value="LLB">LLB (Bachelor of Laws)</option>
  <option value="BFA">BFA (Bachelor of Fine Arts)</option>
  <option value="BPharma">BPharma (Bachelor of Pharmacy)</option>

  {/* Postgraduate Degrees */}
  <option value="MA">Master of Arts (MA)</option>
  <option value="MSc">Master of Science (MSc)</option>
  <option value="MCom">Master of Commerce (MCom)</option>
  <option value="MEd">Master of Education (MEd)</option>
  <option value="ME">Master of Engineering (ME)</option>
  <option value="MTech">Master of Technology (MTech)</option>
  <option value="MBA">MBA (Master of Business Administration)</option>
  <option value="MCA">MCA (Master of Computer Applications)</option>
  <option value="MD">MD (Doctor of Medicine)</option>
  <option value="MS">MS (Master of Surgery)</option>
  <option value="LLM">LLM (Master of Laws)</option>
  <option value="MPharma">MPharma (Master of Pharmacy)</option>
  <option value="MFA">MFA (Master of Fine Arts)</option>

  {/* Doctoral and Postdoctoral Studies */}
  <option value="PhD">Ph.D. (Doctor of Philosophy)</option>
  <option value="Postdoctoral Fellowship">Postdoctoral Fellowship</option>
  <option value="DLitt">D.Litt. (Doctor of Letters)</option>
  <option value="DSc">D.Sc. (Doctor of Science)</option>
  <option value="MD-PhD">MD-PhD</option>

  {/* Professional and Vocational Qualifications */}
  <option value="CA">CA (Chartered Accountant)</option>
  <option value="CFA">CFA (Chartered Financial Analyst)</option>
  <option value="CS">CS (Company Secretary)</option>
  <option value="CPA">CPA (Certified Public Accountant)</option>
  <option value="CMA">CMA (Cost Management Accountant)</option>
  <option value="Pilot Training">Pilot Training</option>
  <option value="Vocational Courses">Vocational Courses</option>

  {/* International Qualifications */}
  <option value="Associate Degree">Associate Degree</option>
  <option value="Foundation Program">Foundation Program</option>
  <option value="Graduate Diploma">Graduate Diploma</option>
  <option value="Postgraduate Diploma">Postgraduate Diploma</option>
  </select>

  


      <label>Board/University/Institution Name<span className="required">*</span></label>
      <input
        type="text"
        name="institutionName"
        placeholder="Enter Board/University/Institution Name"
        value={formData.institutionName}
        onChange={handleChange}
      />

      <label>School Medium (optional)</label>
      <input
        type="text"
        name="schoolMedium"
        placeholder="Enter School Medium"
        value={formData.schoolMedium}
        onChange={handleChange}
      />

<label>Marks/Percentage <span className="required">*</span></label>
<input
  type="number"
  name="marks"
  placeholder="Total marks in previous education"
  value={formData.marks}
  onChange={handleChange}
  pattern="^\d+(\.\d+)?$"  // This pattern allows integers and decimals
  title="Please enter a valid number (e.g., 85 or 85.5)"
  required
/>


      <label>Start Year of Graduation<span className="required">*</span></label>
      <input
        type="number"
        name="startYear"
        placeholder="Enter Start Year of Graduation"
        value={formData.startYear}
        onChange={handleChange}
      />

      <label>End Year of Graduation<span className="required">*</span></label>
      <input
        type="number"
        name="endYear"
        placeholder="Enter End Year of Graduation"
        value={formData.endYear}
        onChange={handleChange}
      />

      <label>Grading System (Scale of 10 or 4)</label>
      <input
        type="number"
        name="gradingSystem"
        placeholder="Enter Grading System (Scale of 10 or 4)"
        value={formData.gradingSystem}
        onChange={handleChange}
      />
    </div>
  )}
</div>

{/* Profile Details Section */}
<div className="section">
  <div className="section-header" onClick={() => toggleSection('profile')}>PROFILE DETAILS</div>
  {openSection === 'profile' && (
    <div className="section-content">
      <label>Profile Summary</label>
      <textarea
        name="profileSummary"
        placeholder="Enter Profile Summary"
        value={formData.profileSummary}
        onChange={handleChange}
      ></textarea>

      <label>Upload Resume<span className="required">*</span></label>
      <input type="file" name="resume" onChange={handleFileChange} />
      {formData.resume && <p>Selected file: {formData.resume.name}</p>}


      <label>Resume Headline<span className="required">*</span></label>
      <input
        type="text"
        name="resumeHeadline"
        placeholder="Enter Resume Headline"
        value={formData.resumeHeadline}
        onChange={handleChange}
      />

      <label>Key Skills</label>
      <input
        type="text"
        name="keySkills"
        placeholder="Enter Key Skills"
        value={formData.keySkills}
        onChange={handleChange}
      />

      <label>Experience</label>
      <input
        type="number"
        name="experience"
        placeholder="Enter Experience"
        value={formData.experience}
        onChange={handleChange}
      />
    </div>
  )}
</div>

{/* Employment Details Section */}
<div className="section">
  <div className="section-header" onClick={() => toggleSection('employment')}>EMPLOYMENT DETAILS</div>
  {openSection === 'employment' && (
    <div className="section-content">
      <label>Is this your current Employment<span className="required">*</span></label>
      <select
        name="currentEmployment"
        value={formData.currentEmployment}
        onChange={handleChange}
      >
        <option value="">Select</option>
        <option>Yes</option>
        <option>No</option>
      </select>

      <label>Employment Type</label>
      <input
        type="text"
        name="employmentType"
        placeholder="Enter Employment Type"
        value={formData.employmentType}
        onChange={handleChange}
      />

      <label>Company Name</label>
      <input
        type="text"
        name="companyName"
        placeholder="Enter Company Name"
        value={formData.companyName}
        onChange={handleChange}
      />

      <label>Job Title</label>
      <input
        type="text"
        name="jobTitle"
        placeholder="Enter Job Title"
        value={formData.jobTitle}
        onChange={handleChange}
      />

      <label>Joining Year</label>
      <input
        type="number"
        name="joiningYear"
        placeholder="Enter Joining Year"
        value={formData.joiningYear}
        onChange={handleChange}
      />

      <label>Joining Month</label>
      <input
        type="text"
        name="joiningMonth"
        placeholder="Enter Joining Month"
        value={formData.joiningMonth}
        onChange={handleChange}
      />

      <label>Worked Till Year</label>
      <input
        type="number"
        name="workedTillYear"
        placeholder="Enter Worked Till Year"
        value={formData.workedTillYear}
        onChange={handleChange}
      />

      <label>Worked Till Month</label>
      <input
        type="text"
        name="workedTillMonth"
        placeholder="Enter Worked Till Month"
        value={formData.workedTillMonth}
        onChange={handleChange}
      />

      <label>Notice Period</label>
      <input
        type="text"
        name="noticePeriod"
        placeholder="Enter Notice Period"
        value={formData.noticePeriod}
        onChange={handleChange}
      />

      <label>Functional Area</label>
      <input
        type="text"
        name="functionalArea"
        placeholder="Enter Functional Area"
        value={formData.functionalArea}
        onChange={handleChange}
      />
    </div>
  )}
</div>

{/* Project Details Section */}
<div className="section">
  <div className="section-header" onClick={() => toggleSection('project')}>PROJECT DETAILS</div>
  {openSection === 'project' && (
    <div className="section-content">
      <label>Project Title</label>
      <input
        type="text"
        name="projectTitle"
        placeholder="Enter Project Title"
        value={formData.projectTitle}
        onChange={handleChange}
      />

      <label>Project Type</label>
      <input
        type="text"
        name="projectType"
        placeholder="Enter Project Type"
        value={formData.projectType}
        onChange={handleChange}
      />

      <label>Project Description</label>
      <input
        type="text"
        name="projectDescription"
        placeholder="Enter Project Description"
        value={formData.projectDescription}
        onChange={handleChange}
      />

      <label>Client Name</label>
      <input
        type="text"
        name="clientName"
        placeholder="Enter Client Name"
        value={formData.clientName}
        onChange={handleChange}
      />
    </div>
  )}
</div>

{/* Certificate Details Section */}
<div className="section">
  <div className="section-header" onClick={() => toggleSection('certificate')}>CERTIFICATE DETAILS</div>
  {openSection === 'certificate' && (
    <div className="section-content">
      <label>Certificate Name</label>
      <input
        type="text"
        name="certificateName"
        placeholder="Enter Certificate Name"
        value={formData.certificateName}
        onChange={handleChange}
      />

      <label>Issuing Authority</label>
      <input
        type="text"
        name="issuingAuthority"
        placeholder="Enter Issuing Authority"
        value={formData.issuingAuthority}
        onChange={handleChange}
      />

      <label>Date of Issue</label>
      <input
        type="date"
        name="dateOfIssue"
        value={formData.dateOfIssue}
        onChange={handleChange}
      />
    </div>
  )}
</div>
<button className="submit-button" onClick={handleSubmit}>Submit</button>
    </div>

  );
};

export default CandidateInformationForm;
