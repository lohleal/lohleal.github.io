const data_regional = []

let id_regional = 1;
function addRegional(){

    const form = document.querySelector('#formRegional')
    const input_sigla = form.querySelector('input[name="sigla"]')
    const input_cidade = form.querySelector('input[name="cidade"]')
    const table = document.querySelector('#table_regional');
    const select = document.querySelector('#select_regional');
    const option = document.createElement('option');
 
    const line = document.createElement('tr')
    const col_id = document.createElement('td')
    const col_sigla = document.createElement('td')
    const col_cidade = document.createElement('td')

    const newRegional = {
        id: id_regional,
        sigla: input_sigla.value,
        cidade: input_cidade.value
    };
    data_regional.push(newRegional);

    col_id.textContent = newRegional.id 
    col_sigla.textContent = newRegional.sigla
    col_cidade.textContent = newRegional.cidade

    option.value = newRegional.id
    option.textContent = newRegional.sigla

    select.appendChild(option);
    line.appendChild(col_id);
    line.appendChild(col_sigla);
    line.appendChild(col_cidade);

    id_regional++;
 
    table.appendChild(line);
    
}

    

