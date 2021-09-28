const nameTitle = document.querySelector('#title')
const input = document.querySelector('#input');

const writeName = () => {
    const inputvalue = input.value;
    nameTitle.textContent = inputvalue;
}