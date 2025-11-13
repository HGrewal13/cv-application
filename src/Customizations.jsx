
function Margins({margins, setResumeMargins, handleSliderValueChange}) {
    return (
        <div id="customizationsMenu">
            <label htmlFor="margins">Vertical Margins</label>
            <input type="range" name="margins" id="verticalMargins" min="0" max="20"
                onChange={handleSliderValueChange}
            />

            <label htmlFor="margins">Horizontal Margins</label>
            <input type="range" name="margins" id="horizontalMargins" min="0" max="20"
                onChange={handleSliderValueChange}
            />
        </div>
    )
}



function Customizations(props) {

    function handleSliderValueChange(event) {
        const value = event.target.value;
        const orientation = event.target.id;
        console.log(value);
        if(orientation == "verticalMargins") {
            props.setResumeMargins(prev => ({...prev, "padding-top": value+"px", "padding-bottom": value+"px"}));
        } else if(orientation == "horizontalMargins") {
            props.setResumeMargins(prev => ({...prev, "padding-left": value+"px", "padding-right": value+"px"}));
        }
        // props.setResumeMargins(prev => ({...prev, padding: value+"px"}));
    }

    return (
        <Margins
            margins = {props.resumeMargins}
            setResumeMargins = {props.setResumeMargins}
            handleSliderValueChange = {handleSliderValueChange}
        />
    )

    
}

export default Customizations;