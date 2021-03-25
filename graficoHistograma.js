function desenharGraficoHistograma(){

	var busca = new google.visualization.Query(
			'https://docs.google.com/spreadsheets/d/' +
			'1ajOCGI2RIqxvBQm_20wURD9tsq5plBYNK6qfaGWJa1w/'+
			'gviz/tq?&range=A1:B29'
		);

	busca.send(resultadoDaBusca);

	function resultadoDaBusca(resultado){

		var tabela = resultado.getDataTable();

		var opcoes = {
			title: 'Distribuição de clientes por idade',
			titleTextStyle: {
								color: '#5e5851',
								fontName: 'Arial',
								fontSize: 18
			},
			legend: 'none',
			width: 900,
			height: 500,
			vAxis: {
						gridlines: {
										color: 'transparent'
						}
			},
			histogram: {
							bucketSize: 5,
							hideBucketItems: true,
							minValue: 0,
							maxValue: 70
			},
			bar : {
						gap: 0
			}

		}

		var grafico = new google.visualization.Histogram(
			document.getElementById('graficoHistograma')
			);

			grafico.draw(tabela, opcoes);


	}



}










