import { useState } from 'react'
import './App.css'

import Forms from './Forms'
import ResumePreview from './ResumePreview'

function App() {
  const [personalDetails, setPersonalDetails] = useState({name: "John Smith", phone: 1234567890, email: "j.smith13@hotmail.com", address: "123 Ave"});
  const [employmentHistory, setEmploymentHistory] = useState([{name: "Google", role: "Engineer", description: "I did engineering things", startDate: "2025-01-01", endDate: "2025-12-31"}]);
  const [educationHistory, setEducationHistory] = useState([]);

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

  return (
    <div id='mainContainer'>
      <Forms
        personalDetails = {personalDetails}
        setPersonalDetails = {setPersonalDetails}
        employmentHistory = {employmentHistory}
        setEmploymentHistory = {setEmploymentHistory}
        handleEmploymentHistoryChange = {handleEmploymentHistoryChange}
        setEducationHistory = {setEducationHistory}
        handleEducationHistoryChange = {handleEducationHistoryChange}
        handleOpenEmploymentForm = {handleOpenEmploymentForm}
        handleCollapseEmploymentForm = {handleCollapseEmploymentForm}
      />

      <ResumePreview
        personalDetails = {personalDetails}
        employmentHistory = {employmentHistory}
        educationHistory = {educationHistory}
      />
    </div>
  )
}

export default App
