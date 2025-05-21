const data_agents = []

let id_agent = 1

function addAgent() {

    const form = document.querySelector('#formAgent')
    const input_agent = form.querySelector('input[name="nome"]')
    const table = document.querySelector('#table_agent')
    const select_regional = document.querySelector('#select_regional');
    
    const selectedRegionalId = select_regional.value;
    const selectedRegionalText = select_regional.options[select_regional.selectedIndex].text;

    const line = document.createElement('tr')
    const col_id = document.createElement('td')
    const col_nome = document.createElement('td')
    const col_regional = document.createElement('td')

    const newAgent = {
        id: id_agent,
        nome: input_agent.value,
        regional_id: selectedRegionalId,
        regional_nome: selectedRegionalText  
    };
    data_agents.push(newAgent);

    col_id.textContent = newAgent.id
    col_nome.textContent = newAgent.nome
    col_regional.textContent = newAgent.regional_nome

    line.appendChild(col_id)
    line.appendChild(col_nome)
    line.appendChild(col_regional)

    id_agent++

    table.appendChild(line)

}

