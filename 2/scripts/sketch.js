function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(estradaImg);
  mostraAtor();
  mostraCarro();
  movimetocarro();
  movimetoator();
  voltaposicao();
  colisao();
  ponto();
  marcaponto();
}

