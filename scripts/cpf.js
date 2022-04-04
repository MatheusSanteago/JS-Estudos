let CPF = "73645611029";
setTimeout(() => {
  calc();
}, 1000);

var numbers = [];

function calc() {
  try {
    if (verificarCPF(numbers) == true) {
        console.log(`CPF Válido\n${CPF}`);
    
    } else {
      throw new Error("CPF Inválido");
    }
  } catch (e) {
    console.log(e);
  }
}

function verificarCPF() {
  let v1 = CPF[0] * 10;
  let v2 = CPF[1] * 9;
  let v3 = CPF[2] * 8;
  let v4 = CPF[3] * 7;
  let v5 = CPF[4] * 6;
  let v6 = CPF[5] * 5;
  let v7 = CPF[6] * 4;
  let v8 = CPF[7] * 3;
  let v9 = CPF[8] * 2;

  media = v1 + v2 + v3 + v4 + v5 + v6 + v7 + v8 + v9;
  total = CPF.length - (media % 11);

  if (total == CPF[9]) {
    return true;
  }
}
