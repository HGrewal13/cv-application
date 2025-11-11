import { useState } from 'react'
import './App.css'

import Forms from './Forms'
import ResumePreview from './ResumePreview'

function App() {
  const [personalDetails, setPersonalDetails] = useState({name: "John Smith", phone: 1234567890, email: "j.smith13@hotmail.com", address: "123 Ave"});
  const [employmentHistory, setEmploymentHistory] = useState([]);
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


  return (
    <div id='mainContainer'>
      <Forms
        personalDetails = {personalDetails}
        setPersonalDetails = {setPersonalDetails}
        setEmploymentHistory = {setEmploymentHistory}
        handleEmploymentHistoryChange = {handleEmploymentHistoryChange}
        setEducationHistory = {setEducationHistory}
        handleEducationHistoryChange = {handleEducationHistoryChange}
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
