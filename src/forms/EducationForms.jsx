function EducationForm({school, handleEducationHistoryChange, handleOpenEducationForm, handleCollapseEducationForm}) {
    function handleEducationChange(event) {
        const field = event.target.id;
        let value = event.target.value;
        handleEducationHistoryChange(field, value, school.id);
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

                <div className="buttons">
                    <button>Delete</button>
                    <button type="button" onClick={() => handleCollapseEducationForm(school.id)}>Collapse</button>
                </div>
            </form>
        )
    } else {
        return (
            <div className="minimizedForm">
                <h2>{school.institute}</h2>
                <div className="buttons">
                    <button type="button" onClick={() => handleOpenEducationForm(school.id)}>Expand</button>
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
                        handleOpenEducationForm = {props.handleOpenEducationForm}
                        handleCollapseEducationForm = {props.handleCollapseEducationForm}
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