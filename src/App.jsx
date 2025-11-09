import { useState } from 'react'
import './App.css'

import Forms from './Forms'
import ResumePreview from './ResumePreview'

function App() {
  const [personalDetails, setPersonalDetails] = useState({name: "John Smith", phone: 1234567890, email: "j.smith13@hotmail.com", address: "123 Ave"});
  // const [employmentHistory, setEmploymentHistory] = useState([{ name: "Google", role: "Engineer", id: 0, startDate: "2025-11-09", endDate: "2025-11-12", description: "I did engineering things. It was fun"}]);
  const [employmentHistory, setEmploymentHistory] = useState([]);
  const [educationHistory, setEducationHistory] = useState([]);

  return (
    <div id='mainContainer'>
      <Forms
        personalDetails = {personalDetails}
        setPersonalDetails = {setPersonalDetails}
        employmentHistory = {employmentHistory}
        setEmploymentHistory = {setEmploymentHistory}
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
