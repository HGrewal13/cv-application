import { useState } from "react";

function EducationForm({id, handleEducationHistoryChange}) {
    const [currEducation, setCurrEducation] = useState({id, institute: "", degree: "", startDate:"", endDate:""});

    function handleEducationChange(event) {
        const field = event.target.id;
        const value = event.target.value;
        setCurrEducation(prev => ({...prev, field : value}));
        handleEducationHistoryChange(field, value, id);
    }

    return (
        <form className="educationForm">
            <div className="inputField">
                <label htmlFor="institute">Institute Name</label>
                <input type="text" name="institute" id="institute" 
                    onChange={handleEducationChange}
                />
            </div>

            <div className="inputField">
                <label htmlFor="degree">Degree</label>
                <input type="text" name="degree" id="degree" 
                    onChange={handleEducationChange}
                />
            </div>

            <div className="dateInputs">
                <div className="inputField">
                    <label htmlFor="educationStartDate">Start Date</label>
                    <input type="date" name="educationStartDate" id="startDate" 
                        onChange={handleEducationChange}
                    />
                </div>

                <div className="inputField">
                    <label htmlFor="educationEndDate">End Date</label>
                    <input type="date" name="educationEndDate" id="endDate" 
                        onChange={handleEducationChange}
                    />
                </div>
            </div>
        </form>
    )
}

function EducationForms(props) {
    const [educationForms, setEducationForms] = useState([]);

    const handleAddNewEducationForm = function() {
        const idGenerated = Date.now().toString();
        const educationFormSekeleton = {id: idGenerated, institute: "", degree: "", startDate:"", endDate:""}
        props.setEducationHistory(prev => [...prev, educationFormSekeleton]);
        setEducationForms(prev => [...prev, <EducationForm 
                key={idGenerated} 
                id = {idGenerated}
                handleEducationHistoryChange = {props.handleEducationHistoryChange}
            />
        ])
    }

    return (
        <section id = "educationHistory">
            
            <div className="educationHistoryForms form">
                <h2>Education History</h2>
                {educationForms}
            </div>
            <div className="buttons">
                <button onClick={(e) => handleAddNewEducationForm()} className="addNewButton">Add New</button>
            </div>
            
        </section>
    )
}

export default EducationForms;