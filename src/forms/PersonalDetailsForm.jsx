function PersonalDetailsForm({personalDetails, setPersonalDetails, convertToPhoneNumber}) {

    return (
        <form id="personalDetailsForm" className="form">
            <h2>Personal Details</h2>

            <div className="inputField">
                <label htmlFor="name">Full Name</label>
                <input type="text" name="name" id="name" value={personalDetails.name}
                    onChange={(e) => {setPersonalDetails(prev => ({...prev, "name": e.target.value}))}}
                />
            </div>

            <div className="inputField">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" value={personalDetails.email}
                    onChange={(e) => {setPersonalDetails(prev => ({...prev, "email": e.target.value}))}}
                />
            </div>

            <div className="inputField">
                <label htmlFor="phone">Phone</label>
                <input type="tel" name="phone" id="phone" value={convertToPhoneNumber(personalDetails.phone)}
                    onChange={(e) => {setPersonalDetails(prev => ({...prev, "phone": e.target.value}))}}
                />
            </div>

            <div className="inputField">
                <label htmlFor="address">Address</label>
                <input type="text" name="address" id="address" value={personalDetails.address}
                    onChange={(e) => {setPersonalDetails(prev => ({...prev, "address": e.target.value}))}}
                />
            </div>
            

        </form>
    )
}

export default PersonalDetailsForm;