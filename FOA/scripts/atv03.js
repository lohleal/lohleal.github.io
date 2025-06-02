
function ex03() {
    
    const form = document.querySelector('#form03')
    const input = form.querySelector('input[name="in_03"]').value
    
    const num = input.split(" ").map(Number)
    let parImpar = resolve03(...num);

    form.reset()
    document.getElementById('output').innerText = parImpar.join("\n");
}

function resolve03(...numeros) {
    return numeros.map(isEven);
}

function isEven(val) {
    if(val % 2 == 0){
        return "Par";
    }
    else {
        return "Ímpar";
    }
}

//.join para colocar separador