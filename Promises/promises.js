
const MyPromise = new Promise((resolve, reject) => {
  const nome = "Matheus";

  if (nome === "Matheus") {
    resolve("Usuario encotrado!  -- PROMISE EXEMPLO 1");
  } else {
    reject("Usuario desconhecido -- PROMISE EXEMPLO 1");
  }
});

MyPromise.then((data) => {
  console.log(data);
});

// ENCADEAMENTOS DE THEN'S

MyPromise.then((data) => {
  return data.toLowerCase();
}).then((newString) => {
  //console.log(newString);
});

// RETORNO DE CATCH'S
const myPromise2 = new Promise((resolve, reject) => {
  const nome = "Matheus";

  if (nome === "João") {
    resolve("Usuario encotrado!");
  } else {
    reject("Usuario não encotrado! -- PROMISE EXEMPLO CATCH");
  }
});

myPromise2.then((data) => {
  console.log(data);
}).catch(err => {
    console.log("Aconteceu um error: " + err);
});

// RESOLVER VÁRIOS PROMISES

const p1 = new Promise((resolve, reject) => {
    setTimeout(() =>{
        resolve('p1 ok');
    },2000)
});
const p2 = new Promise((resolve, reject) => {
    setTimeout(() =>{
        resolve('p2 ok')
    },3000)
    
});
const p3 = new Promise((resolve, reject) => {
    resolve('p3 ok')
});
const resolveAll = Promise.all([p1,p2,p3]).then((data) => {
    console.log(data);
})


// RACE
// RESOLVER VÁRIOS PROMISES

const p4 = new Promise((resolve, reject) => {
    setTimeout(() =>{
        resolve('p4 ok');
    },2000)
});
const p5 = new Promise((resolve, reject) => {
    setTimeout(() =>{
        resolve('p5 ok')
    },3000)
    
});
const p6 = new Promise((resolve, reject) => {
    resolve('P6 - PROMISE.RACE')
});
const resolveRace = Promise.race([p4,p5,p6]).then((data) => {
    console.log(data); // O PROMISE QUE SER RESOLVIDO PRIMEIRO APARECE PRIMEIRO, DEPOIS RETORNA O RESTO;
})

// FETCH API 

const user = "MatheusSanteago";

fetch(`https://api.github.com/users/${user}`,{
    method: 'GET', //opcional
    headers: {
        Accept: 'application/vnd.github.v3+json',
    }
}).then(response => { // RESPOSTA RECEBIDA;
    return response.json();
}).then((data) => {
    console.log(" O nome do user é " + data.name);
    console.log(data);
}).catch((err) => {
    console.log("Hove um erro" + err);
})