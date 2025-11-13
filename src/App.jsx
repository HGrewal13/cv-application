import { useState } from 'react'
import './App.css'

import Customizations from './Customizations'
import Forms from './Forms'
import ResumePreview from './ResumePreview'

function App() {
  const [personalDetails, setPersonalDetails] = useState({name: "John Smith", phone: 1234567890, email: "j.smith13@hotmail.com", address: "123 Ave"});
  const [employmentHistory, setEmploymentHistory] = useState([{name: "Google", role: "Engineer", description: "I did engineering things", startDate: "2025-01-01", endDate: "2025-12-31"}]);
  const [educationHistory, setEducationHistory] = useState([{institute: "University of Earth", degree: "Bachelor of Engineering", startDate: "2025-01-01", endDate: "2025-12-31"}]);

  const [resumeMargins, setResumeMargins] = useState({});

  function handleEmploymentHistoryChange(field, value, idGenerated) {
    console.log(field, value, idGenerated);

    setEmploymentHistory(existingHistory => {
      return existingHistory.map(job => {
        // requires return statement to make sure employmentHistory is not blank when rendering in resumePreview
        return job.id == idGenerated
          ? {...job, [field]:value}
          : job //keep the original object
      })
    })
  }

  function handleEducationHistoryChange(field, value, idGenerated) {
    setEducationHistory(existingHistory => {
      return existingHistory.map(school => school.id == idGenerated ? {...school, [field] : value} : school);
    })
  }

  // can probably reuse this code for education section
  function handleOpenEmploymentForm(formId) {
    setEmploymentHistory(existingHistory => {
      return existingHistory.map(job => {
        return job.id == formId
          ? {...job, visibility: "open"}
          : {...job, visibility: "closed"}
      })
    })
  }

  function handleCollapseEmploymentForm(formId) {
    setEmploymentHistory(list =>
      list.map(job => (job.id === formId ? { ...job, visibility: "closed" } : job))
    );
  }

    function handleOpenEducationForm(formId) {
    setEducationHistory(existingHistory => {
      return existingHistory.map(job => {
        return job.id == formId
          ? {...job, visibility: "open"}
          : {...job, visibility: "closed"}
      })
    })
  }

  function handleCollapseEducationForm(formId) {
    setEducationHistory(list =>
      list.map(job => (job.id === formId ? { ...job, visibility: "closed" } : job))
    );
  }

  return (
    <div id='mainContainer'>
      <Customizations
        resumeMargins = {resumeMargins}
        setResumeMargins = {setResumeMargins}
      />

      <Forms
        personalDetails = {personalDetails}
        setPersonalDetails = {setPersonalDetails}
        employmentHistory = {employmentHistory}
        setEmploymentHistory = {setEmploymentHistory}
        handleEmploymentHistoryChange = {handleEmploymentHistoryChange}
        educationHistory = {educationHistory}
        setEducationHistory = {setEducationHistory}
        handleEducationHistoryChange = {handleEducationHistoryChange}
        handleOpenEmploymentForm = {handleOpenEmploymentForm}
        handleCollapseEmploymentForm = {handleCollapseEmploymentForm}
        handleOpenEducationForm = {handleOpenEducationForm}
        handleCollapseEducationForm = {handleCollapseEducationForm}
      />

      <ResumePreview
        personalDetails = {personalDetails}
        employmentHistory = {employmentHistory}
        educationHistory = {educationHistory}
        resumeMargins = {resumeMargins}
      />
    </div>
  )
}

export default App
