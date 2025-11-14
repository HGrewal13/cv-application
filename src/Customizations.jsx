
function Margins({handleSliderValueChange}) {
    return (
        <div id="marginsCustomization">
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

function LineSpacing() {
    
    return (
        <div id="lineSpacing">
            <label htmlFor="lineSpacing">Line Spacing</label>
            <input type="range" name="lineSpacing" id="lineSpacing" min="0" max="10" />
        </div>
    )
}

function Customizations(props) {

    return (
        <div id="customizationsMenu">
            <Margins
                handleSliderValueChange = {props.handleSliderValueChange}
            />
            <LineSpacing

            />
        </div>

    )

    
}

export default Customizations;