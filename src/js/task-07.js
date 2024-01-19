const changeInputSize = document.getElementById("font-size-control");
const textToChange = document.getElementById("text");


changeInputSize.addEventListener('input', e => {
    textToChange.style.fontSize = changeInputSize.value + 'px';
});