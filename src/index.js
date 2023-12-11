// Defina o nome e a quantidade de experiência (xp) do herói
var nomeHeroi = "B de Vingança";
var xpHeroi = 7500;

// Utilize uma estrutura de decisão para determinar o nível com base na quantidade de xp
var nivelHeroi;

if (xpHeroi < 1000) {
  nivelHeroi = "Ferro";
} else if (xpHeroi >= 1001 && xpHeroi <= 2000) {
  nivelHeroi = "Bronze";
} else if (xpHeroi >= 2001 && xpHeroi <= 5000) {
  nivelHeroi = "Prata ouro";
} else if (xpHeroi >= 5001 && xpHeroi <= 8000) {
  nivelHeroi = "Platina Diamante";
} else if (xpHeroi >= 8001 && xpHeroi <= 9000) {
  nivelHeroi = "Ascendente";
} else if (xpHeroi >= 9001 && xpHeroi <= 10000) {
  nivelHeroi = "Imortal";
} else {
  nivelHeroi = "Radiante";
}

// Apresente a mensagem com base no nível do herói
console.log("O Herói " + nomeHeroi + " está no nível " + nivelHeroi + ".");

