function displayContent() {
    const userInput = document.getElementById("userInput").value;
    const output1 = document.getElementById("output1");
    const output2 = document.getElementById("output2");
    output1.innerHTML = "Method 1 (innerHTML): " + userInput;
    output2.textContent = "Method 2 (textContent): " + userInput;
}