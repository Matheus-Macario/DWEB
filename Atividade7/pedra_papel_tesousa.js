function jogar() {
    let decisão = Math.floor(Math.random() * 3) + 1;
    alert("Escolha: 1 - Pedra, 2 - Papel, 3 - Tesoura");
    let sua_decisão = prompt("Escolha: 1 - Pedra, 2 - Papel, 3 - Tesoura");
 
    if (decisão == 1) {
        decisão = "Pedra";
    }
    if (sua_decisão == 1) {
        sua_decisão = "Pedra";
    }
 
    if (decisão == 2) {
        decisão = "Papel";
    }
    if (sua_decisão == 2) {
        sua_decisão = "Papel";
    }
    if (decisão == 3) {
        decisão = "Tesoura";
    }
    if (sua_decisão == 3) {
        sua_decisão = "Tesoura";
    }
 
    if (decisão == sua_decisão) {
        alert("Empate!");
    }
 
    if (decisão == "Pedra" && sua_decisão == "Tesoura") {
        alert("Você perdeu! Pedra ganha de Tesoura");
    }
 
    if (decisão == "Tesoura" && sua_decisão == "Papel") {
        alert("Você perdeu! Tesoura ganha de Papel");
    }
 
    if (decisão == "Papel" && sua_decisão == "Pedra") {
        alert("Você perdeu! Papel ganha de Pedra");
    }
 
    if (sua_decisão == "Pedra" && decisão == "Tesoura") {
        alert("Você ganhou! Pedra ganha de Tesoura");
    }
    if (sua_decisão == "Tesoura" && decisão == "Papel") {
        alert("Você ganhou! Tesoura ganha de Papel");
    }
 
    if (sua_decisão == "Papel" && decisão == "Pedra") {
        alert("Você ganhou! Papel ganha de Pedra");
    }
}
 

window.addEventListener("load", () => {
    setTimeout(jogar, 100);
});