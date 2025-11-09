import { useState } from "react";


// This component is used to update the actual employmentHistory on each form submission. Will be rendered in preview
function EmploymentForm({employmentHistory, setEmploymentHistory}) {
    // Used to store all values of this current employment form's info. 
    const [currCompany, setCurrCompany] = useState({ name: "", role: "", id: "", startDate: "", endDate: "", description: ""});

    function addToEmploymentHistory() {
        setEmploymentHistory(prev => [...prev, currCompany]);
    }

    return (
        <form className="employmentForm">
            <div className="inputField">
                <label htmlFor="companyName">Company Name</label>
                {/* the ( bracket before {...prev is so react doesnt mistake our object literal for a function */}
                <input type="text" name="companyName" id="companyName"
                    onChange={(e) => {setCurrCompany(prev => ({...prev,
                                        "name": e.target.value
                                    }))}}
                />
            </div>

            <div className="inputField">
                <label htmlFor="companyRole">Role</label>
                <input type="text" name="companyRole" id="companyRole"
                    onChange={(e) => {setCurrCompany(prev => ({...prev,
                                        "role": e.target.value
                                    }))}}
                />
            </div>

            <div className="inputField">
                <label htmlFor="description">Description</label>
                <input type="text" name="description" id="description"
                    onChange={(e) => {setCurrCompany(prev => ({...prev,
                                        "description": e.target.value
                                    }))}}
                />
            </div>

            <div className="inputField">
                <label htmlFor="companyStartDate">Start Date</label>
                <input type="date" name="companyStartDate" id="companyStartDate"
                    onChange={(e) => {setCurrCompany(prev => ({...prev,
                                        "startDate": e.target.value
                                    }))}}
                />
            </div>
            
            <div className="inputField">
                <label htmlFor="companyEndDate">End Date</label>
                <input type="date" name="companyEndDate" id="companyEndDate"
                    onChange={(e) => {setCurrCompany(prev => ({...prev,
                                        "endDate": e.target.value
                                    }))}}
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
        setEmploymentForms(prev => [...prev, <EmploymentForm 
                                            key={props.employmentHistory.length} 
                                            employmentHistory = {props.employmentHistory}
                                            setEmploymentHistory = {props.setEmploymentHistory}
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