function updateText() {
  const input = document.getElementById("inputText").value.trim();
  const studioText = document.getElementById("studioText");
  if (input !== "") {
    studioText.textContent = input.toUpperCase();
  }
}
