// Function to increase text size
function increaseSize() {
    const textInput = document.getElementById('textinput');
    textInput.style.fontSize = "24pt";
}

// Function to show a simple alert
function showAlert() {
    alert("Hello, World!");
}

// Function to apply fancy styling to the text
function fancyStyle() {
    const textInput = document.getElementById('textinput');
    textInput.style.fontWeight = "bold";
    textInput.style.color = "blue";
    textInput.style.textDecoration = "underline";
}

// Function to revert to normal styling
function normalStyle() {
    const textInput = document.getElementById('textinput');
    textInput.style.fontWeight = "normal";
    textInput.style.color = "black";
    textInput.style.textDecoration = "none"; // Changed from null to 'none'
}

// Function to convert text to uppercase and add a suffix
function upperCaseText() {
    const textInput = document.getElementById('textinput');
    textInput.value = textInput.value.toUpperCase();
    addSuffix(textInput);
}

// Function to add "-Moo" suffix to the last word of each sentence
function addSuffix(element) {
    const sentences = element.value.split(".");

    for (let i = 0; i < sentences.length; i++) {
        const words = sentences[i].trim().split(" ");
        if (words.length > 0) {
            words[words.length - 1] += "-Moo"; // Append suffix to the last word
        }
        sentences[i] = words.join(" ");
    }

    element.value = sentences.join(".");
}