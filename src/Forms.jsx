import PersonalDetailsForm from "./forms/PersonalDetailsForm";
import EmploymentForms from "./forms/EmploymentForms";
import EducationForms from "./forms/EducationForms";
import Icon from "@mdi/react";
import { mdiArrowExpand, mdiArrowCollapse} from "@mdi/js";

function Forms(props) {

    function requiredOnBlur(event) {
        event.target.reportValidity();
    }

    return (
        <div id="mainForm">
            <PersonalDetailsForm 
                personalDetails = {props.personalDetails}
                setPersonalDetails = {props.setPersonalDetails}
                convertToPhoneNumber = {props.convertToPhoneNumber}
                requiredOnBlur = {requiredOnBlur}
            />
            <EmploymentForms 
                employmentHistory = {props.employmentHistory}
                setEmploymentHistory = {props.setEmploymentHistory}
                handleEmploymentHistoryChange = {props.handleEmploymentHistoryChange}
                handleExpandForm = {props.handleExpandForm}
                handleCollapseForm = {props.handleCollapseForm}
                handleRemoveForm = {props.handleRemoveForm}
                requiredOnBlur = {requiredOnBlur}
                expandIcon = {mdiArrowExpand}
                collapseIcon = {mdiArrowCollapse}
            />
            <EducationForms
                educationHistory = {props.educationHistory}
                setEducationHistory = {props.setEducationHistory}
                handleEducationHistoryChange = {props.handleEducationHistoryChange}
                handleExpandForm = {props.handleExpandForm}
                handleCollapseForm = {props.handleCollapseForm}
                handleRemoveForm = {props.handleRemoveForm}
                requiredOnBlur = {requiredOnBlur}
                expandIcon = {mdiArrowExpand}
                collapseIcon = {mdiArrowCollapse}
            />
        </div>
    )
}

export default Forms;