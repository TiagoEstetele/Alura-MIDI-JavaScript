function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento != null && elemento.localName === 'audio') {
            elemento.play();
        }
    else {
        console.log('Elemento não encontrado ou seletor invalido');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');


for( let contador = 0 ; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];

    const instrumento = tecla.classList[1]

    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(idAudio);
    }
    
    tecla.onkeydown = function (event) {

        if (event.code === 'Enter' || event.code === 'Space') {
            tecla.classList.add('ativa');
        }
        
    }

    tecla.onkeyup = function (event) {
        if (event.code === 'Enter' || event.code === 'Space') {
            tecla.classList.remove ('ativa');
        }
    }
    
}