import { useState } from "react";

function EducationForm({educationHistory, setEducationHistory}) {
    const [currEducation, setCurrEducation] = useState({institute: "", degree: "", startDate:"", endDate:""});

    function addToEducationHistory() {
        setEducationHistory(prev => [...prev, currEducation]);
    }

    return (
        <form className="educationForm">
            <div className="inputField">
                <label htmlFor="institute">Institute Name</label>
                <input type="text" name="institute" id="institute" 
                // extra round brackets when we return an object
                    onChange={e => {setCurrEducation(prev => ({...prev, "institute": e.target.value}))}}
                />
            </div>

            <div className="inputField">
                <label htmlFor="degree">Degree</label>
                <input type="text" name="degree" id="degree" 
                    onChange={e => (setCurrEducation(prev => ({...prev, "degree": e.target.value})))}
                />
            </div>

            <div className="inputField">
                <label htmlFor="educationStartDate">Start Date</label>
                <input type="date" name="educationStartDate" id="educationStartDate" 
                    onChange={e => {setCurrEducation(prev => ({...prev, "startDate": e.target.value}))}}
                />
            </div>

            <div className="inputField">
                <label htmlFor="educationEndDate">End Date</label>
                <input type="date" name="educationEndDate" id="educationEndDate" 
                    onChange={e => {setCurrEducation(prev => ({...prev, "endDate": e.target.value}))}}
                />
            </div>

            <button className="submitButton"
                onClick={e => {
                    e.preventDefault();
                    addToEducationHistory();
                }}
            >
                Submit
            </button>

        </form>
    )
}

function EducationForms(props) {
    const [educationForms, setEducationForms] = useState([]);

    const handleAddNewEducationForm = function() {
        setEducationForms(prev => [...prev, <EducationForm 
                key={props.educationHistory.length} 
                educationHistory={props.educationHistory} 
                setEducationHistory={props.setEducationHistory}
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