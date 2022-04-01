async function pushApi() {
  const data = await fetch("https://api.github.com/users/MatheusSanteago");
  const dataJson = await data.json();
  return dataJson
}

async function get(){
    var userinfo = await pushApi();
    for(i in userinfo){
        console.log(i);
    }
}
get();




