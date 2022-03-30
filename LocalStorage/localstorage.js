    let a = JSON.parse(localStorage.getItem('client'))
    b = a 
    console.log(b);

    arr = []

        for (const i in b) {
            console.log(`O nome do usuário é ${b.name} e sua senha é ${b.password}`);
        }

        function namevalue() {

            var name = document.getElementById('btn-name').value;
            var password = document.getElementById('btn-password').value;
            
            client = {
            name: name,
            password: password,
          }
          arr.push(JSON.stringify(client));

          localStorage.setItem("client", arr)
        }

        // for (const i of JSON.parse(localStorage.jogadores)){
        //     console.log(i.nome);
        //     console.log(i.id);
        // }
        //FOR EACH
        // id.forEach((item,index,array) => {
        //     for (let i = 0; i < id.length; i++) {
        //         console.log(id[i]);
                
        //     }
        // });