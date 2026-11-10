function maiornum(num1, num2, num3) {
  return Math.max(num1, num2, num3);
}

function ordenar(nm1, nm2, nm3) {
  return [nm1, nm2, nm3].sort((a, b) => a - b);
}


function ehPalindromo(palavra) {
  const limpa = palavra.toLowerCase().replace(/\s+/g, "");
  const invertida = limpa.split("").reverse().join("");
  return limpa === invertida;
}

function verificaSubconjunto(palavra1, palavra2) {
  if (
    typeof palavra1 !== "string" || typeof palavra2 !== "string" ||
    palavra1.trim() === "" || palavra2.trim() === ""
  ) {
    return "erro";
  }

  return palavra1.includes(palavra2) ? "é um subconjunto" : "não é um subconjunto";
}

function diaDaSemana(data) {
  const dias = [
    "domingo", "segunda-feira", "terça-feira", "quarta-feira",
    "quinta-feira", "sexta-feira", "sábado",
  ];

  let dataObj;

  if (data instanceof Date) {
    dataObj = data;
  } else if (typeof data === "string") {
    // formato esperado: "dd/mm/aaaa"
    const [dia, mes, ano] = data.trim().split("/").map(Number);
    dataObj = new Date(ano, mes - 1, dia);
  } else {
    return "erro";
  }

  if (isNaN(dataObj.getTime())) {
    return "erro";
  }

  return dias[dataObj.getDay()];
}


document.getElementById("btnMaior").addEventListener("click", () => {
  const n1 = Number(document.getElementById("n1").value);
  const n2 = Number(document.getElementById("n2").value);
  const n3 = Number(document.getElementById("n3").value);
  document.getElementById("resultadoMaior").textContent = maiornum(n1, n2, n3);
});

document.getElementById("btnOrdenar").addEventListener("click", () => {
  const nm1 = Number(document.getElementById("o1").value);
  const nm2 = Number(document.getElementById("o2").value);
  const nm3 = Number(document.getElementById("o3").value);
  document.getElementById("resultadoOrdenar").textContent =
    ordenar(nm1, nm2, nm3).join(", ");
});

document.getElementById("btnPal").addEventListener("click", () => {
  const palavra = document.getElementById("palavraPal").value;
  document.getElementById("resultadoPal").textContent =
    ehPalindromo(palavra) ? "É palíndromo" : "Não é palíndromo";
});

document.getElementById("btnSubconjunto").addEventListener("click", () => {
  const p1 = document.getElementById("palavra1").value;
  const p2 = document.getElementById("palavra2").value;
  document.getElementById("resultadoSubconjunto").textContent =
    verificaSubconjunto(p1, p2);
});

document.getElementById("btnDia").addEventListener("click", () => {
  const data = document.getElementById("data").value;
  document.getElementById("resultadoDia").textContent = diaDaSemana(data);
});