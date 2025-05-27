const data_report = [];
let id_report = 1;

function addReport() {
    const form = document.querySelector('#formReport');
    const input_data = form.querySelector('input[name="data"]');

    const select_subject = document.querySelector('#select_subject');
    const selectedSubjectId = select_subject.value;
    const selectedSubjectText = select_subject.options[select_subject.selectedIndex].text;

    const select_agent = document.querySelector('#select_agent');
    const selectedAgentId = select_agent.value;
    const selectedAgentText = select_agent.options[select_agent.selectedIndex].text;

    const newReport = {
        id: id_report++,
        data: input_data.value,
        subject_id: selectedSubjectId,
        subject_desc: selectedSubjectText,
        agent_id: selectedAgentId,
        agent_nome: selectedAgentText
    };

    data_report.push(newReport);

    addTableReport(newReport);

    addQuant('Relatorios');

    input_data.value = '';
    select_subject.value = '';
    select_agent.value = '';
}

function addTableReport({ id, data, subject_desc, agent_nome }) {
    const table = document.querySelector('#table_report');
    const line = document.createElement('tr');

    const col_id = document.createElement('td');
    const col_data = document.createElement('td');
    const col_subject = document.createElement('td');
    const col_agent = document.createElement('td');

    col_id.textContent = id;
    col_data.textContent = data;
    col_subject.textContent = subject_desc;
    col_agent.textContent = agent_nome;

    line.appendChild(col_id);
    line.appendChild(col_data);
    line.appendChild(col_subject);
    line.appendChild(col_agent);

    table.appendChild(line);
}
