let yCarros = [40,320,183,250,92];
let xCarros = [1,1,1,1,1];
let velocidadecarros = [8,5,6,8,7];
//0,1,2
let comprimentocarro = 70

let alturacarro = 33


function mostraCarro(){
    for (let i = 0; i < imagemCarros.length; i++){
        image(imagemCarros[i],xCarros[i],yCarros[i],comprimentocarro,alturacarro)
}}

function movimetocarro(){
    for (let i = 0; i <  imagemCarros.length ; i++){
        xCarros[i] +=  velocidadecarros[i]
    }
    
}

function voltaposicao(){
    for(let i = 0; i < imagemCarros.length; i++)
    if (verificarcolisao(xCarros[i])){
        xCarros[i] = -65;
    }
}

function verificarcolisao(xCarros){
    return xCarros > 510;
}