/* document.write('hola desde javascript');*/


/*Devuelve un arreglo de los elementos que tengan esa eitqueta*/
/* const title = document.getElementsByTagName('h1');
title[0].innerHTML = 'Titulo cambiado desde js';

const texto = document.getElementById('text');
texto.innerHTML = 'Este texto esta escrito desde js';
texto.style.background = 'blue';
texto.style.color = 'white';

console.log(texto); */

const texto = document.querySelector('#text');
texto.textContent = 'estoy escribiendo desde JavaScript'



/* obtiene un elemento por id */
document.getElementById
/* obtene todos los elementos de una clase y devuelve un arreglo */
document.getElementsByClassName
/* obtiene todos los elementos por nombre y devuelve un arreglo */
document.getElementsByName

const texto = document.querySelector('#text');
texto.textContent = 'Estoy escribiendo desde js';

/* crear elementos html */

const div = document.createElement('div');
const body = document.querySelector('body');

body.append(div);