const data_agents = [];
let id_agent = 1;

function addAgent() {
    const form = document.querySelector('#formAgent');
    const input_agent = form.querySelector('input[name="nome"]');
    const select_regional = document.querySelector('#select_regional');

    const selectedRegionalId = select_regional.value;
    const selectedRegionalText = select_regional.options[select_regional.selectedIndex].text;

    const newAgent = {
        id: id_agent++,
        nome: input_agent.value,
        regional_id: selectedRegionalId,
        regional_nome: selectedRegionalText
    };

    data_agents.push(newAgent);

    addTableAgent(newAgent);
    addSelectAgent(newAgent); 

    addQuant('Agentes');

    input_agent.value = '';
    select_regional.value = '';
}

function addTableAgent({ id, nome, regional_nome }) {
    const table = document.querySelector('#table_agent');
    const line = document.createElement('tr');

    const col_id = document.createElement('td');
    const col_nome = document.createElement('td');
    const col_regional = document.createElement('td');

    col_id.textContent = id;
    col_nome.textContent = nome;
    col_regional.textContent = regional_nome;

    line.appendChild(col_id);
    line.appendChild(col_nome);
    line.appendChild(col_regional);

    table.appendChild(line);
}

function addSelectAgent({ id, nome }) {
    const select = document.querySelector('#select_agent');
    const option = document.createElement('option');

    option.value = id;
    option.textContent = nome;

    select.appendChild(option);
}
