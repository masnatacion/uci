@extends('treasury.dashboard')

@section('content')


    <link rel="stylesheet" type="text/css" href="./js/extjs/src/ux/grid/feature/resources/MultiGroupingSummary.css" /> 
    <link rel="stylesheet" type="text/css" href="./js/extjs/src/ux/grid/plugin/resources/GroupingPanel.css" /> 
<!-- Ext JS Files -->
<link rel="stylesheet" href="./js/extjs/resources/ext-theme-neptune/ext-theme-neptune-all.css"/>
<script type="text/javascript" src="./js/extjs/ext-all-debug.js"></script>


<section class="content2">

<h3>Kardex</h3>


<section>
    <!-- App Files -->
    <script type="text/javascript">
		Ext.Loader.setConfig({
		    enabled			: true,
		    disableCaching	: true,
		    paths  : {
		      UCI   : "./js/uci/",
		      Base  : "./js/base/",
		      Ext   : "./js/extjs/src/"
		   }
		});

		Ext.application({
		    name        : 'UCI',
		    appFolder   : "./js/UCI/",
		    
		    launch: function() {
		        var me = this;

		        function ColumnCal(index,record,metaData)
		        {
		        	var row = record.raw;

		        	record.data["p"+index] = 0;
		        	if(row.f_grade1 > 0)
		        	{
		        		record.data["p"+index] = (row["f_grade"+index] / row["n_p"+index] * 100).toFixed(2);

			        	if(record.data["p"+index] >= 6)
			        		metaData.style="color: #5ec23d;";
			        	else if(record.data["p"+index] < 6)
			        		metaData.style="color: #f04124;";

		        		
		            	return record.data["p"+index];
		        	}
		        	else
		        		return;
		        };


		        

		        var grid = Ext.create('UCI.academic.Kardex',{
		            
					columns : [
					
								{
				                    header    	: "Clave",
				                    dataIndex 	: "n_key",

				                    width		: 40,
				                    groupable:      true,
					                groupHeaderTpl: 'n_key: {name}',
					                //summaryType:    'max',
				                    renderer	: function(value,metaData){
				                    	metaData.style+="font-size:1.3em;"
				                    	return value;
				                    }
				                 },
				                {
				                    text    	: "Seriación",
				                    dataIndex 	: "n_id_precedence",
				                    width		: 40,
				                    groupable:      true,
					                groupHeaderTpl: 'Due: {name}',
				                },
								{
				                    text    	: "Nombre de la Materia",
				                    dataIndex 	: "s_name",
				                    groupable:      true,
					                groupHeaderTpl: 'Due: {name}',
				                 },
				                {
				                    text    	: "Nivel",
				                    dataIndex 	: "n_id_level",
				                    width		: 30,
				                },
								{
				                    text    	: "Tipo",
				                    dataIndex 	: "GradeType",
				                    width		: 20,
				                 },
				                {
				                    text    	: "Periodo",
				                    width		: 50,
							        renderer: function(value,metaData,record) {
							        	var row = record.raw;
							        	if(!Ext.isEmpty(row.s_year))
							            	return row.s_year+""+row.Course;
							        	else
							        		return;
							        }
				                },
								{
				                    text    	: "Grupo",
				                    dataIndex 	: "s_group",
				                    width		: 40,
				                 },
				                {
				                    text    	: "P1",
				                    width		: 40,
				                    dataIndex	: "p1",
							        renderer: function(value,metaData,record) {
							        	
							        	return ColumnCal(1,record,metaData);
							        }
				                },
								{
				                    text    	: "P2",
				                    dataIndex	: "p2",
				                    width		: 40,
							        renderer: function(value,metaData,record) {
							        	return ColumnCal(2,record,metaData);
							        }
				                 },
				                {
				                    text    	: "P3",
				                    dataIndex	: "p3",
				                    width		: 40,
							        renderer: function(value,metaData,record) {
							        	return ColumnCal(3,record,metaData);
							        }
				                },
				                {
				                    text    	: "P4",
				                    dataIndex	: "p4",
				                    hidden :true,
				                    width		: 40,
							        renderer: function(value,metaData,record) {
							        	return ColumnCal(4,record,metaData);
							        }
				                },
				                {
				                    text    	: "Promedio",
				                    width		: 40,
				                    dataIndex	: "avg",
							        renderer: function(value,metaData,record) {
							        	
							        	var divisor = (record.data.p1 > 0 ? 1 : 0)+ (record.data.p2 > 0 ? 1 : 0) + (record.data.p3 > 0 ? 1 : 0) + (record.data.p4 > 0 ? 1 : 0);

							        	record.data.avg = parseFloat(record.data.p1) + parseFloat(record.data.p2) + parseFloat(record.data.p3) + parseFloat(record.data.p4);
							        	record.data.avg = (record.data.avg / divisor).toFixed(2);

							        	var decimal =  record.data.avg - Math.floor(record.data.avg);

							        	if(record.data.avg >= 6)
							        		metaData.style="background:#5ec23d;color: white;";
							        	else if(record.data.avg < 6)
							        		metaData.style="background:#f04124;color: white;";

							        	metaData.style+="font-size:1.3em;"

							        	return record.data.avg > 0 ? record.data.avg : "";
							        }
				                },
				                ]

		        });

				var search = Ext.create('Ext.form.field.Text',{
					style : "margin-right:1em",
					emptyText:"¿Que estás buscando?",
					enableKeyEvents : true,
					listeners : {
						'keyup' : function(_me){

							
							grid.filter.setFilter(function(rowCache, rowId){
							     return true;
							});
						}
					}
				});
				var panel = Ext.create('Ext.panel.Panel',{
					renderTo: "grid",
					layout : "fit",
					items : [
						search,
						grid

					]
				});

		    }
		});
    </script>
	<div id="grid"></div>
</section>

</section>
@stop