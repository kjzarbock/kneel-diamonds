import { setMetalChoice } from "./TransientState.js"

export const MetalOptions = async () => {
    const response = await fetch("http://localhost:8088/metals");
    const metals = await response.json();

    document.addEventListener("change", handleMetalChoice)

    let optionsHTML = "";

    // Use map() to generate new array of strings
    const divStringArray = metals.map((metal) => {
        return `<div>
            <input type='radio' name='metal' value='${metal.id}' /> ${metal.metal}
        </div>`;
    });

    optionsHTML += divStringArray.join("");

    return optionsHTML;
};

// The setMetalChoice() function used below is just an example.
// Change it to the name of the setter function you created.


const handleMetalChoice = (event) => {
    // Make sure you change this condition if you named your inputs differently
    if (event.target.name === "metal") {
        setMetalChoice(parseInt(event.target.value))
    }
}


/*export const MetalOptions = async () => {
    const response = await fetch("http://localhost:8088/metals")
    const metals = await response.json()

    let metalOptionsHTML = " "
    for (const metal of metals) {
        metalOptionsHTML += `<div class="options">
        <input type="radio" name="metal" value="${metal.id}"/> ${metal.metal}
        </div>`
    }
    return metalOptionsHTML
}*/