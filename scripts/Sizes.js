import { setSizeChoice } from "./TransientState.js"

export const SizeOptions = async () => {
    const response = await fetch("http://localhost:8088/sizes");
    const sizes = await response.json();

    document.addEventListener("change", handleSizeChoice)

    let optionsHTML = "";

    // Use map() to generate new array of strings
    const divStringArray = sizes.map((size) => {
        return `<div>
            <input type='radio' name='size' value='${size.id}' /> ${size.carets}
        </div>`;
    });

    optionsHTML += divStringArray.join("");

    return optionsHTML;
};

const handleSizeChoice = (event) => {
    // Make sure you change this condition if you named your inputs differently
    if (event.target.name === "size") {
        setSizeChoice(parseInt(event.target.value))
    }
}

/*export const SizeOptions = async () => {
    const response = await fetch("http://localhost:8088/sizes")
    const sizes = await response.json()

    let sizeOptionHTML = ""
    for (const size of sizes) {
        sizeOptionHTML += `<div class="options">
        <input type="radio" name="size" value="${size.id}"/> ${size.carets}
        </div>`
        
    }
    return sizeOptionHTML
}*/

