//const data_agents = []

let id_agent = 1

function addAgent(objRegional) {

    const form = document.querySelector('#formAgent')
    const input_agent = form.querySelector('input[name="nome"]')
    const table = document.querySelector('#table_agent')

    const line = document.createElement('tr')
    const col_id = document.createElement('td')
    const col_nome = document.createElement('td')

    col_id.textContent = id_agent
    id_agent++
    col_nome.textContent = input_agent.value

    line.appendChild(col_id)
    line.appendChild(col_nome)

    table.appendChild(line)


    const select = document.querySelector('#select_regional');
    const op = document.createElement("option");
         
    op.textContent = objRegional_sigla.value
    op.value = objRegional_sigla.value
    select.appendChild(op)

    form.reset()

}

//erro no obj