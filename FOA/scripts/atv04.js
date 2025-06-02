
function ex04() {
    
    const form = document.querySelector('#form04')
    const input = form.querySelector('input[name="in_04"]').value

    const num = input.split(" ").map(Number)
    let perfeito = resolve04(...num);

    form.reset()
    document.getElementById('output').innerText = perfeito.join(" ");
}

function resolve04(...numeros) {
    return numeros.filter(filter_perfeito);
}

function filter_perfeito(val){
    let soma = 0
    for (let i=1; i<val; i++){
        if(val % i == 0){
            soma += i;
        }
    }
    return soma == val;
}

