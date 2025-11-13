function EducationForm({school, handleEducationHistoryChange, handleExpandForm, handleCollapseForm, handleRemoveForm}) {
    function handleEducationChange(event) {
        const field = event.target.id;
        let value = event.target.value;
        handleEducationHistoryChange(field, value, school.id);
    }

    function handleCheckBox(event) {
        const checked = event.target.checked;
        if(checked) {
            handleEducationChange(event);
        }
    }

    if(school.visibility == "open") {
        return (
            <form className="educationForm">
                <div className="inputField">
                    <label htmlFor="institute">Institute Name</label>
                    <input type="text" name="institute" id="institute" value={school.institute}
                        onChange={handleEducationChange}
                    />
                </div>

                <div className="inputField">
                    <label htmlFor="degree">Degree</label>
                    <input type="text" name="degree" id="degree" value={school.degree}
                        onChange={handleEducationChange}
                    />
                </div>

                <div className="dateInputs">
                    <div className="inputField">
                        <label htmlFor="startDate">Start Date</label>
                        <input type="date" name="educationStartDate" id="startDate" value={school.startDate}
                            onChange={handleEducationChange}
                        />
                    </div>

                    <div className="inputField">
                        <label htmlFor="endDate">End Date</label>
                        <input type="date" name="educationEndDate" id="endDate" value={school.endDate}
                            onChange={handleEducationChange}
                        />
                    </div>
                </div>

                <div className="presentInputField">
                    <input type="checkbox" name="endDate" id="endDate"
                        onChange={handleCheckBox}
                    />
                    <label htmlFor="present">I currently study here</label>
                </div>

                <div className="buttons">
                    <button type="button" onClick={() => handleRemoveForm("education", school.id)}>Delete</button>
                    <button type="button" onClick={() => handleCollapseForm("education", school.id)}>Collapse</button>
                </div>
            </form>
        )
    } else {
        return (
            <div className="minimizedForm">
                <h2>{school.institute}</h2>
                <div className="buttons">
                    <button type="button" onClick={() => handleExpandForm("education", school.id)}>Expand</button>
                </div>
                
            </div>
        )
    }
}

function EducationForms(props) {
    const handleAddNewEducationForm = function() {
        const idGenerated = Date.now().toString();
        const educationFormSekeleton = {id: idGenerated, institute: "", degree: "", startDate:"", endDate:"", visibility: "open"}
        props.setEducationHistory(prev => [...prev, educationFormSekeleton]);
    }

    return (
        <section id = "educationHistory">
            
            <div className="educationHistoryForms form">
                <h2>Education History</h2>
                {props.educationHistory.map(school => (
                    <EducationForm
                        key = {school.id}
                        school = {school}
                        handleEducationHistoryChange={props.handleEducationHistoryChange}
                        handleExpandForm = {props.handleExpandForm}
                        handleCollapseForm = {props.handleCollapseForm}
                        handleRemoveForm = {props.handleRemoveForm}
                    >
                    </EducationForm>
                ))}
            </div>
            <div className="buttons">
                <button onClick={(e) => handleAddNewEducationForm()} className="addNewButton">Add New</button>
            </div>
            
        </section>
    )
}

export default EducationForms;