
function ex05() {
    
    const form = document.querySelector('#form05')
    const input = form.querySelector('input[name="in_05"]').value
    
    let obj;
    obj = JSON.parse(input); // Converte string JSON em objeto
   
    let novaSaída = resolve05(obj);

    form.reset()
    document.getElementById('output').innerText = `${novaSaída}`;
}

function resolve05(obj) {
    return construtora(obj);
}

function construtora(data) {
    return `Id: ${data.id} \nNome: ${data.nome} \nMédia: ${data.media}`;
}

