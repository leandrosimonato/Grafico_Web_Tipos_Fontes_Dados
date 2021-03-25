function desenharGraficoBarrasJson(){
//grafico de barras com arquivo json
		var dadosJson = $.ajax({
			//url: 'dados.json',
			url: 'https://gist.githubusercontent.com/cassiass/369d0b789eb610c0d4fa5a8eae7e4eb8/raw/458c60460002b96aa2969069956f12e31df062d9/dados.json',
			dataType: 'json',
			async: false
		}).responseText;

		var tabela = new google.visualization.DataTable(dadosJson);

		tabela.sort([{ column: 1, desc: true }]);

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

		var grafico = new google.visualization.BarChart(
			document.getElementById('graficoBarrasJson'));	
		grafico.draw(tabela, opcoes);
}