//Ator
let xAtor = 90;
let yAtor = 370;
let colidira = false;
let comprimentoator = 30;
let alturaator = 30;
//pontos
let pontos = 0

function mostraAtor(){
    image(atorimagem,xAtor,yAtor,comprimentoator,alturaator); 
}

function movimetoator(){
    if (keyIsDown(UP_ARROW)){
    yAtor -= 5;
    }
    if (keyIsDown(DOWN_ARROW)) {
        if (podemover()){
    yAtor += 5;}
}
}
function colisao(){
    //collideRectCircle(xAtor, yAtor, width1, height1, cx, cy, diameter)
    for (let i = 0; i < imagemCarros.length; i++){
        colidira = collideRectCircle(xCarros[i],yCarros[i],comprimentocarro,alturacarro,xAtor,yAtor,alturaator/2)
        if (colidira){
            colidiu();
            soncolisao.play();
            if (pontos > 0){
            pontos -= 1;
        }
        }
    }
}
function colidiu(){
    yAtor = 370;
}
function ponto(){
    textAlign(CENTER);
    textSize(25);
    fill(255,215,0);
    text(pontos,width/2,20)
}
function marcaponto(){
    if (yAtor < 16){
        pontos += 1;
        colidiu();
        sompontos.play();
    }
}
function podemover(){
    if (yAtor < 370);
}