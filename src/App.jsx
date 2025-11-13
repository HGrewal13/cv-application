import { useState } from 'react'
import './App.css'

import Customizations from './Customizations'
import Forms from './Forms'
import ResumePreview from './ResumePreview'

function App() {
  const [personalDetails, setPersonalDetails] = useState({name: "John Smith", phone: 1234567890, email: "j.smith13@hotmail.com", address: "123 Ave"});
  const [employmentHistory, setEmploymentHistory] = useState([{id: Date.now().toString(), name: "Google", role: "Engineer", description: "I did engineering things", startDate: "2025-01-01", endDate: "2025-12-31"}]);
  const [educationHistory, setEducationHistory] = useState([{id: Date.now().toString(), institute: "University of Earth", degree: "Bachelor of Engineering", startDate: "2025-01-01", endDate: "2025-12-31"}]);

  const [resumeMargins, setResumeMargins] = useState({});
  const [resumeLineSpacing, setResumeLineSpacing] = useState({});

    const convertToPhoneNumber = function(number) {
        const digits = String(number).replace(/\D/g, "");

        if(digits.length <= 3) {
            return digits;
        } else if(digits.length <= 6) {
            return `(${digits.slice(0,3)})-${digits.slice(3)}`;
        } else {
            return `(${digits.slice(0, 3)})-${digits.slice(3, 6)}-${digits.slice(6, 10)}`;
        }
    }

  function handleEmploymentHistoryChange(field, value, idGenerated) {
    setEmploymentHistory(existingHistory => {
      return existingHistory.map(job => {
        // requires return statement to make sure employmentHistory is not blank when rendering in resumePreview
        return job.id == idGenerated
          ? {...job, [field]:value}
          : job
      })
    })
  }

  function handleEducationHistoryChange(field, value, idGenerated) {
    setEducationHistory(existingHistory => {
      return existingHistory.map(school => school.id == idGenerated ? {...school, [field] : value} : school);
    })
  }

  function handleExpandForm(formType, formId) {
    if(formType == "employment") {
      setEmploymentHistory(existingHistory => {
        return existingHistory.map(job => {
          return job.id == formId
            ? {...job, visibility: "open"}
            : {...job, visibility: "closed"}
        })
      })
    } else if(formType == "education") {
      setEducationHistory(existingHistory => {
        return existingHistory.map(job => {
          return job.id == formId
            ? {...job, visibility: "open"}
            : {...job, visibility: "closed"}
        })
      })
    }
  }

  function handleCollapseForm(formType, formId) {
    if(formType == "employment") {
      setEmploymentHistory(list =>
        list.map(job => (job.id === formId ? { ...job, visibility: "closed" } : job))
      );
    } else if(formType == "education") {
      setEducationHistory(list =>
        list.map(job => (job.id === formId ? { ...job, visibility: "closed" } : job))
      );
    }
  }

  function handleRemoveForm (formType, formId) {
    if(formType == "employment") {
      setEmploymentHistory(employmentHistory => employmentHistory.filter(form => form.id !== formId));
    } else if(formType == "education") {
      setEducationHistory(educationHistory => educationHistory.filter(form => form.id !== formId));
    }
  }

  function handleSliderValueChange(event) {
      const value = event.target.value;
      const orientation = event.target.id;
      if(orientation == "verticalMargins") {
          setResumeMargins(prev => ({...prev, "paddingTop": value+"px", "paddingBottom": value+"px"}));
      } else if(orientation == "horizontalMargins") {
          setResumeMargins(prev => ({...prev, "paddingLeft": value+"px", "paddingRight": value+"px"}));
      }
  }

  return (
    <div id='mainContainer'>
      <Customizations
        resumeMargins = {resumeMargins}
        setResumeMargins = {setResumeMargins}
        handleSliderValueChange = {handleSliderValueChange}
      />

      <Forms
        personalDetails = {personalDetails}
        setPersonalDetails = {setPersonalDetails}
        convertToPhoneNumber = {convertToPhoneNumber}
        employmentHistory = {employmentHistory}
        setEmploymentHistory = {setEmploymentHistory}
        handleEmploymentHistoryChange = {handleEmploymentHistoryChange}
        educationHistory = {educationHistory}
        setEducationHistory = {setEducationHistory}
        handleEducationHistoryChange = {handleEducationHistoryChange}
        handleExpandForm = {handleExpandForm}
        handleCollapseForm = {handleCollapseForm}
        handleRemoveForm = {handleRemoveForm}
      />

      <ResumePreview
        personalDetails = {personalDetails}
        convertToPhoneNumber = {convertToPhoneNumber}
        employmentHistory = {employmentHistory}
        educationHistory = {educationHistory}
        resumeMargins = {resumeMargins}
      />
    </div>
  )
}

export default App
