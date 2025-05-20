//const data_subjects = []

let id = 1;
function addSubject(){

    const form = document.querySelector('#formSubject')
    const input_descricao = form.querySelector('input[name="descricao"]')
    const table = document.querySelector('#table_subject');
 
    const line = document.createElement('tr')
    const col_id = document.createElement('td')
    const col_nome = document.createElement('td')
   
    col_id.textContent = id; 
    id++;
    col_nome.textContent = input_descricao.value
    
    line.appendChild(col_id);
    line.appendChild(col_nome);
 
    table.appendChild(line);
}

