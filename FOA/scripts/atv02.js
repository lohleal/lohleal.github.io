function ex02() {
    const form = document.querySelector('#form02')
    const input = form.querySelector('input[name="in_02"]').value

    let num = input.split(" ").map(Number)
    let resultado = resolve02(...num);
    
    form.reset()
    document.getElementById('output').innerText = `Média = ${resultado}`;
}

const resolve02 = (...num) => {
    let soma = 0;
    for (let i=0; i<num.length; i++) {
        soma += num[i];
    }
    return soma / num.length;
}
