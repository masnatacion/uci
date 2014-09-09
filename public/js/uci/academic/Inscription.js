Ext.define('UCI.academic.Inscription', {
	extend			: 'Base.grid.DynamicGrid',
	deleteRow		: true,
	columnFilter	: false,
	url 			: [
						{"query" : "./GetSubjects.json"},
						{"delete": "./response.json"}
					   ],
	columns 		: [
						{
		                    header    	: "Producto",
		                    dataIndex 	: "GradeId"
		                 },
						{
		                    header    	: "SubProducto",
		                    dataIndex 	: "n_key"
		                 },
						{
		                    header    	: "Modalidad",
		                    dataIndex 	: "n_key"
		                 }
				        ]
});
