const data_regional = [];
let id_regional = 1;

function addRegional() {
    const form = document.querySelector('#formRegional');
    const input_sigla = form.querySelector('input[name="sigla"]');
    const input_cidade = form.querySelector('input[name="cidade"]');

    const newRegional = {
        id: id_regional++,
        sigla: input_sigla.value,
        cidade: input_cidade.value
    };

    data_regional.push(newRegional);

    addTableRegional(newRegional);
    addSelectRegional(newRegional);

    addQuant('Regionais');

    input_cidade.value = '';
    input_sigla.value = '';
}

function addTableRegional({ id, sigla, cidade }) {
    const table = document.querySelector('#table_regional');
    const line = document.createElement('tr');

    const col_id = document.createElement('td');
    const col_sigla = document.createElement('td');
    const col_cidade = document.createElement('td');

    col_id.textContent = id;
    col_sigla.textContent = sigla;
    col_cidade.textContent = cidade;

    line.appendChild(col_id);
    line.appendChild(col_sigla);
    line.appendChild(col_cidade);

    table.appendChild(line);
}

function addSelectRegional({ id, sigla }) {
    const select = document.querySelector('#select_regional');
    const option = document.createElement('option');

    option.value = id;
    option.textContent = sigla;

    select.appendChild(option);
}
