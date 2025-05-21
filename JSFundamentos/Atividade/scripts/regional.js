//const data_regionals = []

let id_regional = 1;
function addRegional(){

    const form = document.querySelector('#formRegional')
    const input_sigla = form.querySelector('input[name="sigla"]')
    const input_cidade = form.querySelector('input[name="cidade"]')
    const table = document.querySelector('#table_regional');
 
    const line = document.createElement('tr')
    const col_id = document.createElement('td')
    const col_sigla = document.createElement('td')
    const col_cidade = document.createElement('td')

    col_id.textContent = id_regional; 
    id_regional++;
    col_sigla.textContent = input_sigla.value
    col_cidade.textContent = input_cidade.value

    const objRegional = {sigla: input_sigla.value, cidade: input_cidade.value}
    addSelectRegional(objRegional);

    line.appendChild(col_id);
    line.appendChild(col_sigla);
    line.appendChild(col_cidade);
 
    table.appendChild(line);
    
}

    

