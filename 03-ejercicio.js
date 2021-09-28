const edad = 18;

const mensaje = edad >= 18? resultado.textcontent ='Eres mayor de edad' : resultado.textcontent ='Eres menor de edad'

const input = document.querySelector('#input');

const writeage = () => {
    const inputvalue = input.value;
    mensaje.textcontent = inputvalue
}

