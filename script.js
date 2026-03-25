// Buscando e guardando os elementos em variáveis (Árvore DOM)
const btnIncrementar = document.getElementById('btnIncrementar');
const btnDecrementar = document.getElementById('btnDecrementar');
const contadorDisplay = document.getElementById('contadorDisplay');

const inputTexto = document.getElementById('inputTexto');
const contadorChar = document.getElementById('contadorChar');
const containerParagrafos = document.getElementById('containerParagrafos');

const tipoLista = document.getElementById('tipoLista');
const btnAddItem = document.getElementById('btnAddItem');
const containerListas = document.getElementById('containerListas');

const btnReset = document.getElementById('btnReset');

// Variável de controle do contador
let totalCliques = 0;

//  LÓGICA DO CONTADOR 
btnIncrementar.addEventListener('click', function() {
    totalCliques++;
    contadorDisplay.innerText = totalCliques;
});

btnDecrementar.addEventListener('click', function() {
    
    if (totalCliques > 0) {
        totalCliques--;
        contadorDisplay.innerText = totalCliques;
    } else {
        alert("O contador já está em zero!");
    }
});

// LÓGICA DE TEXTO E CARACTERES 
inputTexto.addEventListener('input', function() {
    
    let textoSemEspaco = inputTexto.value.replace(/\s/g, '');
    contadorChar.innerText = textoSemEspaco.length;
});

inputTexto.addEventListener('keydown', function(event) {
   
    if (event.key === 'Enter') {
        if (inputTexto.value.trim() !== "") {
            let novoP = document.createElement('p');
            novoP.innerText = inputTexto.value;
            containerParagrafos.appendChild(novoP);
            
            
            inputTexto.value = "";
            contadorChar.innerText = "0";
        }
    }
});

// LÓGICA DE ADICIONAR ITEM (LISTAS) 
btnAddItem.addEventListener('click', function() {
    
    let listaPai = document.createElement(tipoLista.value);
    let li = document.createElement('li');
    
    li.innerText = "Item adicionado como " + tipoLista.value.toUpperCase();
    
    listaPai.appendChild(li);
    containerListas.appendChild(listaPai);
});

// LÓGICA DE RESET
btnReset.onclick = function() {
  
    totalCliques = 0;
    contadorDisplay.innerText = "0";
    
    
    inputTexto.value = "";
    contadorChar.innerText = "0";
    containerParagrafos.innerHTML = "";
    
    containerListas.innerHTML = "";
    
    console.log("Sistema resetado com sucesso.");
};