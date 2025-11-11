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
                setEmploymentHistory = {props.setEmploymentHistory}
                handleEmploymentHistoryChange = {props.handleEmploymentHistoryChange}
                handleDateChange = {handleDateChange}
            />

            <EducationForms
                setEducationHistory = {props.setEducationHistory}
                handleEducationHistoryChange = {props.handleEducationHistoryChange}
                handleDateChange = {handleDateChange}
            />

        </div>
    )
}

export default Forms;