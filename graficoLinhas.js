function desenharGraficoLinhas(){

 var tabela = new google.visualization.DataTable();

 	tabela.addColumn('string', 'anos');
	tabela.addColumn('number', 'Conta poupança');
	tabela.addColumn('number', 'Conta salário');
	tabela.addColumn('number', 'Conta corrente');
	tabela.addColumn('number', 'Conta de cartão de crédito');
	tabela.addColumn('number', 'Conta cartão');


	tabela.addRows([
 	['2012',200,275,343,470,322],
	['2013',221,340,380,476,346],
	['2014',343,331,376,450,351],
	['2015',442,391,387,510,357],
	['2016',465,400,412,532,360]
	]);

	var opcoes = {
		title: 'Quantidade de novos usuários nas contas',
		titleTextStyle: {
							color: '#5e5851',
							fontSize: 20,
							fontType: 'Arial'
		},
		width: 950,
		height: 430,
		series: {
			0: {color:'#3682ff', lineWidth: 5},
			1: {color:'#a6a6a6'}, 
			2: {color:'#a6a6a6'},
			3: {color:'#a6a6a6'}, 
			4: {color:'#a6a6a6'}
		},
		vAxis: {
					gridlines: {
									color: 'transparent'
					}
		},
		legend: {
				textStyle: {
								color: '#928e8a',
								fontSize: 16
				}	
		}

	}



	var grafico = new google.visualization.LineChart(
		document.getElementById('graficoLinhas'));
		grafico.draw(tabela, opcoes);



}

