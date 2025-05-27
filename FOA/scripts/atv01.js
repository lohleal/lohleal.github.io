
/*let soma = 0;
function ex01() {
    

    for (i in arguments) {
        soma += arguments[i];
    }
    return soma;
}*/
//console.log(ex01());
//document.getElementById('output').innerText = 'output: ' + soma;

let soma = 0
const n1 = []
function ex01() {
    const form = document.querySelector('#form01')
    const num = form.querySelector('input[name="in_01"]').value

    n1.forEach(num => soma += num);
    

    //const quantN = n1.length;

    form.reset()
    document.getElementById('output').innerText = n1;
}

