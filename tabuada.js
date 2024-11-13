let tabuada = document.getElementById("tabuada").value;
let entrada = parseInt("tabuada");
let saida = document.getElementById("saida").value;

const calcular = () => {
  let zero = entrada * 0;
  let um = entrada * 1;
  let dois = entrada * 2;
  let tres = entrada * 3;
  let quatro = entrada * 4;
  let cinco = entrada * 5;
  let seis = entrada * 6;
  let sete = entrada * 7;
  let oito = entrada * 8;
  let nove = entrada * 9;
  let dez = entrada * 10;

  saida.innerHTML = `0 X ${entrada} = ${zero}, <br>
                    1 X ${entrada} = ${um}, <br>
                    2 X ${entrada} = ${dois}, <br>
                    3 X ${entrada} = ${tres}, <br>
                    4 X ${entrada} = ${quatro}, <br>
                    5 X ${entrada} = ${cinco}, <br>
                    6 X ${entrada} = ${seis}, <br>
                    7 X ${entrada} = ${sete}, <br>
                    8 X ${entrada} = ${oito}, <br>
                    9 X ${entrada} = ${nove}, <br>
                    10 X ${entrada} = ${dez}, <br>`;
};
