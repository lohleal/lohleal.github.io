const data_subjects = []

let id_subject = 1;
function addSubject(){

    const form = document.querySelector('#formSubject')
    const input_descricao = form.querySelector('input[name="descricao"]')
    const table = document.querySelector('#table_subject');
    const select = document.querySelector('#select_subject');
    const option = document.createElement('option');
 
    const line = document.createElement('tr')
    const col_id = document.createElement('td')
    const col_nome = document.createElement('td')

    const newSubject = {
        id: id_subject,
        descricao: input_descricao.value
    };
    data_subjects.push(newSubject);

    col_id.textContent = newSubject.id
    col_nome.textContent = newSubject.descricao

    option.value = newSubject.id
    option.textContent = newSubject.descricao
    
    line.appendChild(col_id);
    line.appendChild(col_nome);
    id_subject++;
 
    table.appendChild(line);
}

