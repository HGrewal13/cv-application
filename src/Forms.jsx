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
                setEmploymentHistory = {props.setEmploymentHistory}
                handleEmploymentHistoryChange = {props.handleEmploymentHistoryChange}
            />

            <EducationForms
                setEducationHistory = {props.setEducationHistory}
                handleEducationHistoryChange = {props.handleEducationHistoryChange}
            />

        </div>
    )
}

export default Forms;