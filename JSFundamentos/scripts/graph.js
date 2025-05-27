const quantidade = {
    Agentes: 0,
    Regionais: 0,
    Assuntos: 0,
    Relatorios: 0
};

let chart;
let data;

function drawChart() {
    data = google.visualization.arrayToDataTable([
        ['Entidade', 'Quantidade', { role: 'style' }],
        ['Assuntos', quantidade.Assuntos, 'color: #36b9cc'],
        ['Regionais', quantidade.Regionais, 'color:rgb(255, 0, 0)'],
        ['Agentes', quantidade.Agentes, 'color:rgb(255, 138, 205)'],
        ['Relatorios', quantidade.Relatorios, 'color: #f6c23e']
    ]);

    //para y cmc no 0
    const maxValor = Math.max(
        quantidade.Assuntos,
        quantidade.Regionais,
        quantidade.Agentes,
        quantidade.Relatorios,
        1 // garante pelo menos 1 como máximo
    );

    const options = {
        legend: { position: 'none' },

        vAxis: {
            viewWindow: {
                min: 0,
                max: maxValor
            }
        }    
    };

    chart = new google.visualization.ColumnChart(document.getElementById('chart'));
    chart.draw(data, options);
}

function addQuant(nomeRegistro) {
    quantidade[nomeRegistro]++;
    drawChart();
}
