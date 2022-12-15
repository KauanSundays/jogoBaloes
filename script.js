function addBola() { //funcao chamada addBola
    var bola = document.createElement("div");//criando variavel e uma div criada
    bola.setAttribute("class", "bola");//adicionando uma class chamada bola

    var p1 = Math.floor(Math.random() * 500); //gerando numero aleatorios ate 500 e arredondando
    var p2 = Math.floor(Math.random () * 400);//gerando numero aleatorios ate 400 e arredondando
    bola.setAttribute("style", "left:"+p1+"px;top:"+p2+"px;");
    //style="left:160px;top:196px;"
    bola.setAttribute("onclick", "estourar(this)");

    document.body.appendChild(bola);//vai adicionar 1 vez
};

function estourar(elemento) {
    document.body.removeChild(elemento); //eliminar este elemento em especifico
};

function iniciar() {
    setInterval(addBola, 1000);//setando um intervalo de 1 seg a cada nova adicao
};