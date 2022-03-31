
const basic = () => {
        
    try {
        console.log(usernameID)
    } catch (e) {
    console.error(`An error has ocurred \n ${e}`);
    } finally {
    console.warn(`An error has ocurred and verify`);
    }
}

const main = () => {
    var valor = soma(10,8);
    basic();
    try {
        if(valor > 10) {
            console.info(valor);
        } else {
            throw new Error(`O valor está abaixo do desejado \n Valor digitado ${valor}`); // FORÇA UM ERRO CASO VALOR TENHA UM VALOR DIFERENTE DO DESEJADO;
        }
    } catch (error) {
        console.error(`O ERRO FOI \n ${error}`); // LOGA CASO O VALOR NÃO EXISTA
    }
}


soma = (a,b) => {
    return a + b;
}

main();
    

