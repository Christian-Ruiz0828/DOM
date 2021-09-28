/*function agregado(item,num){
    console.log("agregado " + item + num);
    alert("agregado " + item + num)
} */


const $btn = document.querySelector('#btn');
const $list = document.querySelector('#list');

$btn.addEventListener('click',() =>{
    //<li></li>
    const listItem = document.createElement('li');
    //<li>Nuevo item</li>
    listItem.textContent= 'Nuevo item';
    $list.appendChild(listItem);
});