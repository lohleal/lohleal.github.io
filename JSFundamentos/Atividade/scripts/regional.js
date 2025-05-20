//const data_regionals = []

let id = 1;
function addRegional(){

    const form = document.querySelector('#formRegional')
    const input_descricao = form.querySelector('input[name="regional"]')
    const table = document.querySelector('#table_regional');
 
    const line = document.createElement('tr')
    const col_id = document.createElement('td')
    const col_sigla = document.createElement('td')
    const col_city = document.createElement('td')

    col_id.textContent = id; 
    id++;
    col_sigla.textContent = input_descricao.value
    col_city.textContent = input_descricao.value

    line.appendChild(col_id);
    line.appendChild(col_sigla);
    line.appendChild(col_city);
 
    table.appendChild(line);
}

