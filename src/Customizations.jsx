
function Margins({handleSliderValueChange, showMargins, toggleMargins}) {

    if(showMargins == true) {
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

                <button type="button"
                    onClick={toggleMargins}
                >
                    Margins
                </button>

            </div>
        )
    } else if(showMargins == false) {
        return (
            <div id="marginsCustomizationCollapsed">
                <button type="button"
                    onClick={toggleMargins}
                >
                    Margins
                </button>
            </div>
        )
    }

}

function LineSpacing() {
    
    return (
        <div id="lineSpacing">
            <label htmlFor="lineSpacing">Line Spacing</label>
            <input type="range" name="lineSpacing" id="lineSpacing" min="0" max="10" />
        </div>
    )
}

function Fonts({font, handleFontChange}) {

    return (
        <div id="fontButtons">
            <button type="button" className="fontButton" id="serif"
                onClick={handleFontChange}
            >
                Serif
            </button>
            <button type="button" className="fontButton" id="sans-serif"
                onClick={handleFontChange}
            >
                Sans-Serif
            </button>
        </div>
    )
}

function Customizations(props) {

    return (
        <div id="customizationsMenu">
            <Margins
                handleSliderValueChange = {props.handleSliderValueChange}
                showMargins = {props.showMargins}
                toggleMargins = {props.toggleMargins}
            />
            <LineSpacing

            />
            <Fonts
                font = {props.font}
                handleFontChange = {props.handleFontChange}
            />
        </div>

    )

    
}

export default Customizations;