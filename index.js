let avalia1 = document.getElementById("avalia1");
let avalia2 = document.getElementById("avalia2");
let avalia3 = document.getElementById("avalia3");
let avalia4 = document.getElementById("avalia4");
let nomeAluno = document.getElementById("nome");

const media = () => {
  let nota1 = Number(avalia1.value);
  let nota2 = Number(avalia2.value);
  let nota3 = Number(avalia3.value);
  let nota4 = Number(avalia4.value);

  let soma = nota1 + nota2 + nota3 + nota4;
  let media = soma / 2;

  let saida = document.getElementById("media");
  saida.innerHTML = `Média: ${media}`;

  let resultado = document.getElementById("resultado");

  let nome = nomeAluno.value;

  if (saida >= 7) {
    resultado.innerHTML = `<p>O aluno/a ${nome} está aprovado!</p>`;
  } else {
    resultado.innerHTML = `<p>O aluno/a ${nome} está reprovado!</p>`;
  }
};
