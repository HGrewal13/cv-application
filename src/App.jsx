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

    setEmploymentHistory(prevHistory => {
      prevHistory.map(job => {
        console.log(job);
        return job.id == idGenerated
          ? {...job, [field]:value}
          : job //keep the original object
      })
    })
  }


  return (
    <div id='mainContainer'>
      <Forms
        personalDetails = {personalDetails}
        setPersonalDetails = {setPersonalDetails}
        employmentHistory = {employmentHistory}
        setEmploymentHistory = {setEmploymentHistory}
        handleEmploymentHistoryChange = {handleEmploymentHistoryChange}
        educationHistory = {educationHistory}
        setEducationHistory = {setEducationHistory}
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
