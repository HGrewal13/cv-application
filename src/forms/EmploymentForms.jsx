import { useState } from "react";


// This component is used to update the actual employmentHistory on each form submission. Will be rendered in preview
function EmploymentForm({id, employmentHistory, setEmploymentHistory, handleEmploymentHistoryChange}) {
    // Used to store all values of this current employment form's info. 
    const [currCompany, setCurrCompany] = useState({ name: "", role: "", id: id, startDate: "", endDate: "", description: ""});

    function addToEmploymentHistory() {
        setEmploymentHistory(prev => [...prev, currCompany]);
    }

    function handleEmploymentChange(event) {
        const field = event.target.id;
        const value = event.target.value;
        // console.log(currCompany);
        setCurrCompany(prev => ({...prev, field: value}));
        handleEmploymentHistoryChange(field, value, id);
    }

    

    return (
        <form className="employmentForm">
            <div className="inputField">
                <label htmlFor="companyName">Company Name</label>
                {/* the ( bracket before {...prev is so react doesnt mistake our object literal for a function */}
                <input type="text" name="companyName" id="name"
                    onChange={handleEmploymentChange}
                />
            </div>

            <div className="inputField">
                <label htmlFor="companyRole">Role</label>
                <input type="text" name="companyRole" id="role"
                    onChange={handleEmploymentChange}
                />
            </div>

            <div className="inputField">
                <label htmlFor="description">Description</label>
                <input type="text" name="description" id="description"
                    onChange={handleEmploymentChange}
                />
            </div>

            <div className="inputField">
                <label htmlFor="companyStartDate">Start Date</label>
                <input type="date" name="companyStartDate" id="startDate"
                    onChange={handleEmploymentChange}
                />
            </div>
            
            <div className="inputField">
                <label htmlFor="companyEndDate">End Date</label>
                <input type="date" name="companyEndDate" id="endDate"
                    onChange={handleEmploymentChange}
                />
            </div>

            <div className="buttons">
                <button className="submitButton"
                    onClick={(e) => {
                        e.preventDefault();
                        addToEmploymentHistory();
                    }}
                >
                    Submit
                </button>
            </div>

        </form>
    )
}


function EmploymentForms(props) {

    // Used to update EmploymentForms with all the forms created for each individual place of employment. To be rendered here
    // Clicking the button just creates a new EmploymentForm component with empty values.
        // Submitting the new EmploymentForm will actually update the employmentHistory
    const [employmentForms, setEmploymentForms] = useState([]);
    
    const handleAddNewEmploymentForm = function() {
        const idGenerated = Date.now().toString();
        const employmentDetails = { name: "", role: "", id: idGenerated, startDate: "", endDate: "", description: ""};
        // needs to be added in so employmentHistory isn't initially empty. Without this a .map error will occur
        props.setEmploymentHistory(prev => [...prev, employmentDetails]);
        setEmploymentForms(prev => [...prev, <EmploymentForm 
                                            key={idGenerated} 
                                            id = {idGenerated}
                                            employmentHistory = {props.employmentHistory}
                                            setEmploymentHistory = {props.setEmploymentHistory}
                                            handleEmploymentHistoryChange = {props.handleEmploymentHistoryChange}
                                            />
                                ]
                        )
    }

    return (
        <section id = "employmentHistory">
            
            <div className="employmentHistoryForms form">
                <h2>Employment History</h2>
                {employmentForms}
            </div>

            <div className="buttons">
                <button onClick={(e) => handleAddNewEmploymentForm()} className="addNewButton">Add New</button>
            </div>
            
        </section>
    )
}

export default EmploymentForms;