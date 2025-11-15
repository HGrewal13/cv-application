import Icon from "@mdi/react";
import { mdiEmailOutline, mdiPhone, mdiHome} from "@mdi/js";

function handleDateChange(date) {
    if(date == "on") {
        return "Present";
    }
    const formatted = new Date(date).toLocaleDateString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
        timeZone: "UTC",
    });
    return formatted;
}

function PersonalDetailsCard({personalDetails, convertToPhoneNumber}) {

    return (
        <div className="personalDetails">
            <h1>{personalDetails.name}</h1>
            <div id="contactDetails">
                <div className="contactDetailContainer">
                    <Icon path={mdiEmailOutline} size={1}/>
                    <p>{personalDetails.email}</p>
                </div>
                <div className="contactDetailContainer">
                    <Icon path={mdiPhone} size={1}/>
                    <p>{convertToPhoneNumber(personalDetails.phone)}</p>
                </div>
                <div className="contactDetailContainer">
                    <Icon path={mdiHome} size={1}/>
                    <p>{personalDetails.address}</p>
                </div>
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
                    <div key={`${obj.institute}-${obj.degree}-${i}`} className="educationFormDetails">
                        <h2>{obj.institute}</h2>
                        <div className="educationGrouping">
                            <h3>{obj.degree}</h3>
                            <div className="dateRange">
                                {obj.startDate 
                                    ? 
                                    <p>{handleDateChange(obj.startDate)} - {handleDateChange(obj.endDate)}</p>
                                    :
                                    ""
                                }
                            </div>
                        </div>
                    </div>
                    
                )
            })}
        </div>
    )
}


function EmploymentCard({employmentHistory}) {
    return (
        <div className="employment">
            <h3 className="sectionHeading">Employment</h3>
            {employmentHistory.map((obj,i) => {
                return (
                    <div key={`${obj.name}-${obj.role}-${i}`} className="employmentFormDetails">
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

    const previewStyle = {...props.resumeMargins, ...props.font}
    return (
        <div className="resumePreview">
            <div className="resumeInner" style={previewStyle}>
                <PersonalDetailsCard
                    personalDetails={props.personalDetails}
                    convertToPhoneNumber = {props.convertToPhoneNumber}
                />

                <EmploymentCard
                    employmentHistory = {props.employmentHistory}
                />

                <EducationCard 
                    educationHistory={props.educationHistory}
                />
            </div>
        </div>
    )
}

export default ResumePreview;