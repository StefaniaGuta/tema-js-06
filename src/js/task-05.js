const insertName = document.getElementById("name-input");
const outputSpan = document.getElementById("name-output");

insertName.addEventListener('input', e => {
    var inputValue = insertName.value.trim();
    outputSpan.textContent = inputValue || "Anonymous";
});
