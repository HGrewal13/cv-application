
function handleDateChange(date) {
    const formatted = new Date(date).toLocaleDateString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
        timeZone: "UTC",
    });
    return formatted;
}

function PersonalDetailsCard({personalDetails}) {

    return (
        <div className="personalDetails">
            <h2>{personalDetails.name}</h2>
            <div id="contactDetails">
                <p>{personalDetails.email}</p>
                <p>{personalDetails.phone}</p>
                <p>{personalDetails.address}</p>
            </div>
        </div>
    )
}

function EducationCard({educationHistory}) {
    return (
        <div className="education">
            <h3 className="sectionHeading">Education</h3>
            {educationHistory.map((obj,i) => {
                return (
                    <div key={`${obj.institute}-${obj.degree}-${i}`}>
                        <h2>{obj.institute}</h2>
                        <div className="educationGrouping">
                            <h3>{obj.degree}</h3>
                            <div className="dateRange">
                                <p>{obj.startDate} - {obj.endDate}</p>
                            </div>
                        </div>
                    </div>
                    
                )
            })}
        </div>
    )
}


function EmploymentCard({employmentHistory}) {
    console.log(employmentHistory);
    return (
        <div className="employment">
            <h3 className="sectionHeading">Employment</h3>
            {/* {console.log("before crash")} */}
            {employmentHistory.map((obj,i) => {
                // {console.log("after crash")}
                return (
                    <div key={`${obj.name}-${obj.role}-${i}`}>
                        <h2>{obj.name}</h2>
                        <div className="employmentGrouping">
                            <h3>{obj.role}</h3>
                            <div className="dateRange">
                                {obj.startDate 
                                    ? 
                                    <p>{handleDateChange(obj.startDate)} - {handleDateChange(obj.endDate)}</p>
                                    :
                                    ""
                                }
                                
                            </div>
                        </div>
                        <p>{obj.description}</p>
                    </div>
                    
                )
            })}
        </div>
    )
}


function ResumePreview(props) {

    return (
        <div className="resumePreview">
            <PersonalDetailsCard
                personalDetails={props.personalDetails}
            />

            <EmploymentCard
                employmentHistory = {props.employmentHistory}
            />

            <EducationCard 
                educationHistory={props.educationHistory}
            />
        </div>
    )
}

export default ResumePreview;