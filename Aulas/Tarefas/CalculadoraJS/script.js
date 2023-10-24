function calcularMelhorCombustivel() {
    const etanol = parseFloat(document.frdados.txtetanol.value);
    const gasolina = parseFloat(document.frdados.txtgasolina.value);

    const gaugeElement = document.querySelector('.gauge');

    if (etanol < 0.7 * gasolina) {
        // Etanol é mais vantajoso
        gaugeElement.classList.remove('rischio2', 'rischio3');
        gaugeElement.classList.add('rischio1');
        document.querySelector('.state').textContent = 'Etanol';
    } else if (etanol > 0.7 * gasolina) {
        // Gasolina é mais vantajosa
        gaugeElement.classList.remove('rischio1', 'rischio2');
        gaugeElement.classList.add('rischio3');
        document.querySelector('.state').textContent = 'Gasolina';
    } else {
        // Ambos têm o mesmo custo
        gaugeElement.classList.remove('rischio1', 'rischio3');
        gaugeElement.classList.add('rischio2');
        document.querySelector('.state').textContent = 'Qualquer';
    }
}

function limpar() {
    document.frdados.txtetanol.value = '';
    document.frdados.txtgasolina.value = '';
    
    // Reseta a classe da gauge para rischio2
    document.querySelector('.gauge').classList.remove('rischio1', 'rischio3');
    document.querySelector('.gauge').classList.add('rischio2');
    
    // Reseta o texto da classe .state
    document.querySelector('.state').textContent = '';
}


/* Versão do Jorcivan 

var gasolina, etanol;

function melhor(){
    etanol = parseFloat(frdados.txetanol.value.replace("," , "."));
    gasolina = parseFloat(frdados.txgasolina.value.replace("," , "."));
    
    if(etanol < 0.7*gasolina){
        document.getElementById("imagem").src="img/etanol.jpg";
    } else {
        document.getElementById("imagem").src="img/gasolina.jpg";
    }
}

function limpar(){
    document.getElementById("imagem").src="img/normal.jpg";
}*/
