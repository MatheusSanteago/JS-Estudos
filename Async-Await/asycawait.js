async function pushGitData() {
  const data = await fetch("https://api.github.com/users/MatheusSanteago");
  const dataJson = await data.json();
  console.log(dataJson);
}

pushGitData();

