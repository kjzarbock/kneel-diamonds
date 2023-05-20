import { setStyleChoice } from "./TransientState.js";

export const StyleOptions = async () => {
    const response = await fetch("http://localhost:8088/styles");
    const styles = await response.json();

    document.addEventListener("change", handleStyleChoice)

    let optionsHTML = "";

    // Use map() to generate new array of strings
    const divStringArray = styles.map((style) => {
        return `<div>
            <input type='radio' name='style' value='${style.id}' /> ${style.style}
        </div>`;
    });

    optionsHTML += divStringArray.join("");

    return optionsHTML;
};

const handleStyleChoice = (event) => {
    // Make sure you change this condition if you named your inputs differently
    if (event.target.name === "style") {
        setStyleChoice(parseInt(event.target.value))
    }
}

/*export const StyleOptions = async () => {
    const response = await fetch("http://localhost:8088/styles")
    const styles = await response.json()

    let styleOptionsHTML = " "
    for (const style of styles) {
        styleOptionsHTML += `<div class="options">
        <input type="radio" name="style" value="${style.id}"/> ${style.style}
        </div>`
    }


    return styleOptionsHTML
}*/

