function ex01() {
    const form = document.querySelector('#form01')
    const input = form.querySelector('input[name="in_01"]').value

    let num = input.split(" ").map(Number)
    let resultado = resolve01(...num);
    
    form.reset()
    document.getElementById('output').innerText = `Média = ${resultado}`;
}

function resolve01() {
    let soma = 0;
    for (let i=0; i<arguments.length; i++) {
        soma += arguments[i];
    }
    return soma / arguments.length;
} 

//let array = texto.split(" "); // ["Olá", "mundo", "bonito"]
//.map(Number) Converte cada item do array em número
