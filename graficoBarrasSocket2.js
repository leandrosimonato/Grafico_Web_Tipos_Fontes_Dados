function desenharGraficoBarrasSocket(){


	var filtro = new google.visualization.ControlWrapper({

		controlType: 'NumberRangeFilter',

		containerId: 'filtro',

		options: {

			filterColumnLabel: 'Valor'
		}


	});



	const socket = io.connect(
		'https://bytebank-servidor.herokuapp.com/'
		);

	socket.on('atualizaBarras', function(dadosServidor)
		{
			var tabela = new google.visualization.DataTable(
				dadosServidor);

			tabela.sort([{ column: 1, desc: true }]);

			var grafico = new google.visualization.ChartWrapper(
			{
				chartType: 'BarChart',

				containerId: 'graficoBarras',

				options: {
					title: 'Usuários e Poupanças',
					height: 400,
					width: 800,
					legend: 'none',
					hAxis: {
						gridlines: {
							color: 'transparent'
						},
						textPosition: 'none'
					},
					annotations: 
					{
						alwaysOutside: true
					}
		}

			});

			

		
		
		var dashboard = new google.visualization.Dashboard(
			document.getElementById('dashboard'));

		
			dashboard.bind(filtro, grafico);

			dashboard.draw(tabela);
		
	

	})





}