import PersonalDetailsForm from "./forms/PersonalDetailsForm";
import EmploymentForms from "./forms/EmploymentForms";
import EducationForms from "./forms/EducationForms";

function Forms(props) {

    return (
        <div id="mainForm">
            <PersonalDetailsForm 
                personalDetails = {props.personalDetails}
                setPersonalDetails = {props.setPersonalDetails}
            />

            <EmploymentForms 
                employmentHistory = {props.employmentHistory}
                setEmploymentHistory = {props.setEmploymentHistory}
                handleEmploymentHistoryChange = {props.handleEmploymentHistoryChange}
            />

            <EducationForms
                educationHistory = {props.educationHistory}
                setEducationHistory = {props.setEducationHistory}
            />

        </div>
    )
}

export default Forms;