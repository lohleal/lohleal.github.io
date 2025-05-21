const data_report = []

let id_report = 1

function addReport() {

    const form = document.querySelector('#formReport')
    const table = document.querySelector('#table_report')
    const input_data = form.querySelector('input[name="data"]')

    const select_subject = document.querySelector('#select_subject');
    //const selectedsubjectId = select_subject.value;
    //const selectedsubjectText = select_subject.options[select_subject.selectedIndex].text;

    const line = document.createElement('tr')
    const col_id = document.createElement('td')
    const col_data = document.createElement('td')

    const newReport = {
        id: id_report,
        data: input_data.value, 
    };
    data_report.push(newReport);

    col_id.textContent = newReport.id
    col_data.textContent = newReport.data

    line.appendChild(col_id)
    line.appendChild(col_data)

    id_report++

    table.appendChild(line)

}

