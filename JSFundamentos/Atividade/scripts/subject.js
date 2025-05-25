const data_subjects = [];
let id_subject = 1;

function addSubject() {
    const form = document.querySelector('#formSubject');
    const input_descricao = form.querySelector('input[name="descricao"]');

    const newSubject = {
        id: id_subject++,
        descricao: input_descricao.value
    };

    data_subjects.push(newSubject);

    addTableSubject(newSubject);
    addSelectSubject(newSubject);

    input_descricao.value = '';
}

function addTableSubject({ id, descricao }) {
    const table = document.querySelector('#table_subject');
    const line = document.createElement('tr');
    const col_id = document.createElement('td');
    const col_nome = document.createElement('td');

    col_id.textContent = id;
    col_nome.textContent = descricao;

    line.appendChild(col_id);
    line.appendChild(col_nome);

    table.appendChild(line);
}

function addSelectSubject({ id, descricao }) {
    const select = document.querySelector('#select_subject');
    const option = document.createElement('option');

    option.value = id;
    option.textContent = descricao;

    select.appendChild(option);
}
