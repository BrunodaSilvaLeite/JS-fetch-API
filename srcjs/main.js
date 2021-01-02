const cep = document.querySelector("#cep")

const showData =(result)=>{
    for(const campo in result){
        if(document.querySelector("#" + campo)){
            document.querySelector("#" + campo).value = result[campo]
        }
      
    }
}

cep.addEventListener("blur", (e)=>{
    let search = cep.value.replace("-","")
    const options = {
        method: "GET",
        mode:"cors",
        cache: "default",
    }

    fetch(`https://viacep.com.br/ws/${search}/json/`)
    .then(response=>{response.json()
        .then(data => showData(data))
    })
    .catch( erro=> alert("CEP NÃO EXISTENTE "),
    document.getElementById('cep').value='',
    document.getElementById('logradouro').value='',
    document.getElementById('bairro').value='',
    document.getElementById('localidade').value='',
    document.getElementById('uf').value='')
    });
  



