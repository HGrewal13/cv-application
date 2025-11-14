function PersonalDetailsForm({personalDetails, setPersonalDetails, convertToPhoneNumber}) {

    function handlePhoneBlur(event) {
        const digitsOnly = event.target.value.replace(/\D/g, "");

        if(digitsOnly.length < 10) {
            event.target.setCustomValidity("Must be at least 10 characters");
        } else {
            event.target.setCustomValidity("");
        }
        event.target.reportValidity();
    }

    function handleEmailBlur(event) {
        const email = event.target;

        if(email.validity.typeMistmatch) {
            email.setCustomValidity("Please enter a valid email address");
        } else {
            email.setCustomValidity("");
        }
        email.reportValidity();
    }

    function handleAddressBlur(event) {
        const value = event.target.value;

        if(value.length < 6) {
            event.target.setCustomValidity("Must be at least 6 characters");
        } else {
            event.target.setCustomValidity("");
        }
        event.target.reportValidity();
    }

    function requiredOnBlur(event) {
        event.target.reportValidity();
    }

    return (
        <form id="personalDetailsForm" className="form">
            <h2>Personal Details</h2>

            <div className="inputField">
                <label htmlFor="name">Full Name</label>
                <input type="text" name="name" id="name" value={personalDetails.name} required
                    onChange={(e) => {setPersonalDetails(prev => ({...prev, "name": e.target.value}))}}
                    onBlur={requiredOnBlur}
                />
            </div>

            <div className="inputField">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" value={personalDetails.email} required
                    onChange={(e) => {setPersonalDetails(prev => ({...prev, "email": e.target.value}))}}
                    onBlur={handleEmailBlur}
                />
            </div>

            <div className="inputField">
                <label htmlFor="phone">Phone</label>
                <input type="tel" name="phone" id="phone" maxLength={14} value={convertToPhoneNumber(personalDetails.phone)} required
                    onChange={(e) => {setPersonalDetails(prev => ({...prev, "phone": e.target.value}))}}
                    onBlur={handlePhoneBlur}
                />
            </div>

            <div className="inputField">
                <label htmlFor="address">Address</label>
                <input type="text" name="address" id="address" value={personalDetails.address} required
                    onChange={(e) => {setPersonalDetails(prev => ({...prev, "address": e.target.value}))}}
                    onBlur={handleAddressBlur}
                />
            </div>
            

        </form>
    )
}

export default PersonalDetailsForm;