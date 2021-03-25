function desenharGraficoBarrasSocket(){

	const socket = io.connect(
		'https://bytebank-servidor.herokuapp.com/'
		);

	socket.on('atualizaBarras', function(dadosServidor)
		{
			var tabela = new google.visualization.DataTable(
				dadosServidor);

			var opcoes = {
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

		tabela.sort([{ column: 1, desc: true }]);
		
		var grafico = new google.visualization.BarChart(
			document.getElementById('graficoBarrasSocket'));
		
			grafico.draw(tabela, opcoes);
		
	

	})





}