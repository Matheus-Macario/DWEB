        num1 = prompt("Qual é a sua primeiro numero?: ");
        num2 = prompt("Qual é a sua segundo numero?: ");
        soma = parseFloat(num1) + parseFloat(num2);
        subtração = parseFloat(num1) - parseFloat(num2);
        produto = parseFloat(num1) * parseFloat(num2);
        divisão = parseFloat(num1) / parseFloat(num2);
        resto = parseFloat(num1) % parseFloat(num2);

        alert("A soma é: " + soma + "\n" + "A subtração é: " + subtração + "\n" + "O produto é: " + produto + "\n" + "A divisão é: " + divisão + "\n" + "O resto da divisão é: " + resto);