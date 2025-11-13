// This component is used to update the actual employmentHistory on each form submission. Will be rendered in preview
function EmploymentForm({job, handleEmploymentHistoryChange, handleExpandForm, handleCollapseForm, handleRemoveForm}) {
    function handleEmploymentChange(event) {
        const field = event.target.id;
        let value = event.target.value;
        handleEmploymentHistoryChange(field, value, job.id);
    }

    function handleCheckBox(event) {
        const checked = event.target.checked;
        if(checked) {
            handleEmploymentChange(event);
        }
    }

    if(job.visibility == "open") {
        return (
            <form className="employmentForm">
                <div className="inputField">
                    <label htmlFor="companyName">Company Name</label>
                    <input type="text" name="companyName" id="name" value={job.name}
                        onChange={handleEmploymentChange}
                    />
                </div>

                <div className="inputField">
                    <label htmlFor="companyRole">Role</label>
                    <input type="text" name="companyRole" id="role" value={job.role}
                        onChange={handleEmploymentChange}
                    />
                </div>

                <div className="inputField">
                    <label htmlFor="description">Description</label>
                    <input type="text" name="description" id="description" value={job.description}
                        onChange={handleEmploymentChange}
                    />
                </div>

                <div className="dateInputs">
                    <div className="inputField">
                        <label htmlFor="companyStartDate">Start Date</label>
                        <input type="date" name="companyStartDate" id="startDate" value={job.startDate}
                            onChange={handleEmploymentChange}
                        />
                    </div>
                    
                    <div className="inputField">
                        <label htmlFor="companyEndDate">End Date</label>
                        <input type="date" name="companyEndDate" id="endDate" value={job.endDate}
                            onChange={handleEmploymentChange}
                        />
                    </div>
                    
                </div>

                <div className="presentInputField">
                    <input type="checkbox" name="endDate" id="endDate"
                        onChange={handleCheckBox}
                    />
                    <label htmlFor="present">I currently work here</label>
                </div>

                <div className="buttons">
                    <button type="button" onClick={() => handleRemoveForm("employment", job.id)}>Delete</button>
                    <button type="button" onClick={() => handleCollapseForm("employment", job.id)}>Collapse</button>
                </div>
                
            </form>
        )
    } else {
        return (
            <div className="minimizedForm">
                <h2>{job.name}</h2>
                <div className="buttons">
                    <button type="button" onClick={() =>handleExpandForm("employment", job.id)}>Expand</button>
                </div>
                
            </div>
        )
    }
    
}

function EmploymentForms(props) {
    const handleAddNewEmploymentForm = function() {
        const idGenerated = Date.now().toString();
        const employmentDetails = { name: "", role: "", id: idGenerated, startDate: "", endDate: "", description: "", visibility: "open"};
        // needs to be added in so employmentHistory isn't initially empty. Without this a .map error will occur
        props.setEmploymentHistory(prev => [...prev, employmentDetails]);
    }

    return (
        <section id = "employmentHistory">
            <div className="employmentHistoryForms form">
                <h2>Employment History</h2>
                {props.employmentHistory.map(job => (
                    <EmploymentForm
                        key={job.id} 
                        job = {job}
                        handleEmploymentHistoryChange = {props.handleEmploymentHistoryChange}
                        handleExpandForm = {props.handleExpandForm}
                        handleCollapseForm = {props.handleCollapseForm}
                        handleRemoveForm = {props.handleRemoveForm}
                    />
                    
                ))}
            </div>

            <div className="buttons">
                <button onClick={(e) => handleAddNewEmploymentForm()} className="addNewButton">Add New</button>
                
            </div>
        </section>
    )
}

export default EmploymentForms;