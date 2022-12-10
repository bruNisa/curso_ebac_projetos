const form = document.getElementById('formulario')

const elementoNumeroA = document.getElementById("numeroA");
const elementoNumeroB = document.getElementById("numeroB");
const elementoMsg = document.getElementById("msg");

form.addEventListener('submit', function(e){
    e.preventDefault();

    if (parseFloat(elementoNumeroA.value)  > parseFloat(elementoNumeroB.value) ){
        elementoMsg.innerHTML="Dados inválidos! <br> O primeiro número é maior que o segundo.";
        elementoMsg.style.backgroundColor = 'red';

    }else{
        elementoMsg.innerHTML="Dados validados com sucesso! <br> O segundo número é maior que o primeiro.";
        elementoMsg.style.backgroundColor = 'green';
    }
    elementoMsg.style.display = "block";

})