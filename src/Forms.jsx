import PersonalDetailsForm from "./forms/PersonalDetailsForm";
import EmploymentForms from "./forms/EmploymentForms";
import EducationForms from "./forms/EducationForms";

function Forms(props) {
    function handleDateChange(date) {
        const formatted = new Date(date).toLocaleDateString("en-US", {
            month: "short",
            day: "2-digit",
            year: "numeric"
        });
        return formatted;
    }

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
                handleOpenEmploymentForm = {props.handleOpenEmploymentForm}
                handleCollapseEmploymentForm = {props.handleCollapseEmploymentForm}
            />
            <EducationForms
                educationHistory = {props.educationHistory}
                setEducationHistory = {props.setEducationHistory}
                handleEducationHistoryChange = {props.handleEducationHistoryChange}
                handleDateChange = {handleDateChange}
                handleOpenEducationForm = {props.handleOpenEducationForm}
                handleCollapseEducationForm = {props.handleCollapseEducationForm}
            />
        </div>
    )
}

export default Forms;