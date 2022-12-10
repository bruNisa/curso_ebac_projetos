const form = document.getElementById("form-contato");
let linhas = "";
let nomes = [];

form.addEventListener("submit", function(e){
    e.preventDefault();

    adicionaLinha();  
    atualizaTabela();
    atualizaTotal();
})

function adicionaLinha(){
    const inputNome = document.getElementById("input-nome");
    const inputTel = document.getElementById("input-tel");

    if(nomes.includes(inputNome.value)){
        alert(`O nome ${inputNome.value} já foi inserido.`);
    } else{
        nomes.push(inputNome.value);

        let linha = "<tr>";
        linha += `<td>${inputNome.value}</td>`;
        linha += `<td>${inputTel.value}</td>`;
        linha += `</tr>`;
    
        linhas += linha;
    }

    inputNome.value = "";
    inputTel.value = "";
}

function atualizaTabela(){
    let corpoTabela = document.querySelector("tbody");
    corpoTabela.innerHTML = linhas;
}

function atualizaTotal(){
    const campoTotal = document.getElementById("totalDeContatos");

    campoTotal.innerHTML = nomes.length;
}