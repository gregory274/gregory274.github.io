function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  // 1. CABEZA AZUL
  fill(0, 150, 255); // Azul Doraemon
  noStroke();
  ellipse(200, 200, 300, 300);
  
  // 2. CARA BLANCA
  fill(255); // Blanco
  ellipse(200, 215, 260, 240);
  
  // 3. LOS OJOS
  stroke(0); // Borde negro
  strokeWeight(2);
  
  // Ojo izquierdo
  fill(255);
  ellipse(170, 110, 60, 80);
  // Pupila izquierda
  fill(0);
  ellipse(180, 110, 15, 25);
  // Brillo ojo izquierdo
  fill(255);
  ellipse(180, 105, 5, 8);
  
  // Ojo derecho
  fill(255);
  ellipse(230, 110, 60, 80);
  // Pupila derecha
  fill(0);
  ellipse(220, 110, 15, 25);
  // Brillo ojo derecho
  fill(255);
  ellipse(220, 105, 5, 8);
  
  // 4. LA NARIZ
  fill(255, 0, 0); // Rojo
  ellipse(200, 150, 40, 40);
  // Brillo de la nariz
  fill(255);
  noStroke();
  ellipse(193, 143, 10, 10);
  
  // 5. LÍNEA DE LA NARIZ A LA BOCA
  stroke(0);
  strokeWeight(3);
  line(200, 170, 200, 275);
  
  // 6. LA BOCA (SONRISA)
  noFill();
  arc(200, 175, 200, 200, 0, PI); // Dibuja un arco hacia abajo
  
  // 7. LOS BIGOTES
  // Bigotes del lado izquierdo
  line(150, 170, 70, 150);
  line(150, 190, 60, 190);
  line(150, 210, 70, 230);
  
  // Bigotes del lado derecho
  line(250, 170, 330, 150);
  line(250, 190, 340, 190);
  line(250, 210, 330, 230);
  
  // 8. EL COLLAR Y CASCABEL
  // Collar rojo
  rectMode(CENTER);
  fill(255, 0, 0);
  noStroke();
  rect(200, 340, 180, 20, 10);
  
  // Cascabel amarillo
  stroke(0);
  strokeWeight(2);
  fill(255, 220, 0); // Amarillo
  ellipse(200, 355, 40, 40);
  // Detalle del cascabel (línea)
  line(181, 350, 219, 350);
  // Detalle del cascabel (hueco)
  fill(50);
  ellipse(200, 362, 10, 10);
}
