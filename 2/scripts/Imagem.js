let estradaImg;
let atorimagem;
let carroImagem;
let carrodois;
let carrotres;

let sonstrilha;
let soncolisao;
let sompontos;

function preload(){
    estradaImg = loadImage("imagens/estrada.jpg");
    atorimagem = loadImage("imagens/ator1.png");
    carroImagem = loadImage("imagens/carro1.png")
    carrodois = loadImage("imagens/carro2.png")
    carrotres = loadImage("imagens/carro3.png")
    sompontos = loadSound("sons/ponto.mp3")
    soncolisao = loadSound("sons/colisao.mp3")
    imagemCarros = [carroImagem,carrotres,carrodois,carroImagem,carrodois]
}