
function Margins({margins, setResumeMargins, handleSliderValueChange}) {
    return (
        <div id="customizationsMenu">
            <label htmlFor="margins">Margins</label>
            <input type="range" name="margins" id="margins" min="0" max="10"
                onChange={handleSliderValueChange}
            />
        </div>
    )
}

function Customizations(props) {

    function handleSliderValueChange(event) {
        const value = event.target.value;
        console.log(value);
        props.setResumeMargins(prev => ({...prev, padding: value+"px"}));
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