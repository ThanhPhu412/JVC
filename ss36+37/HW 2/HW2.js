function toggleContent() {
    const button = document.getElementById("toggleButton");
    if (button.textContent === "OFF") {
        button.textContent = "ON";
    } else {
        button.textContent = "OFF";       
    }
}