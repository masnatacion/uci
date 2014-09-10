Ext.define('UCI.academic.Kardex', {
	extend			: 'Base.grid.DynamicGrid',
	materias 		: "./GetCTSubjects.json",
	calificaciones 	: "./GetSubjects.json",
	data : [],
	requires : ["Ext.grid.plugin.RowExpander"],
	initComponent   : function (){
	
		var me = this;

        Ext.Ajax.request ({
            url: me.materias,
            success: function (file) {
                var materias = Ext.decode(file.responseText);


                //materias = me.sortByKey(materias,"n_key");

	            Ext.Ajax.request ({
	                url: me.calificaciones,
	                success: function (file) {
	                    var calificaciones = Ext.decode(file.responseText);
	                    var merge = [];
	                    

	                    calificaciones = me.sortByKey(calificaciones,"SubjectKey");
	                    
	                    //calificaciones.SubjectKey = materias.n_key

	                    Ext.each(materias,function(materia,index){
	                    	Ext.applyIf(materias[index],calificaciones[index]);
	                    	merge[index] = materias[index];
	                    });

	          
				            var reconfig = me._reconfig({columns: me.columns,  data:merge});
				          	
				            me.store.model.setFields(reconfig.fields);

				            me.store.loadData(merge);

	                }
	            }); 

            }
        }); 



		me.columns = [
		
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
				        	
				        	return me.ColumnCal(1,record,metaData);
				        }
	                },
					{
	                    text    	: "P2",
	                    dataIndex	: "p2",
	                    width		: 40,
				        renderer: function(value,metaData,record) {
				        	return me.ColumnCal(2,record,metaData);
				        }
	                 },
	                {
	                    text    	: "P3",
	                    dataIndex	: "p3",
	                    width		: 40,
				        renderer: function(value,metaData,record) {
				        	return me.ColumnCal(3,record,metaData);
				        }
	                },
	                {
	                    text    	: "P4",
	                    dataIndex	: "p4",
	                    hidden :true,
	                    width		: 40,
				        renderer: function(value,metaData,record) {
				        	return me.ColumnCal(4,record,metaData);
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
	        ];



	    me.context = [
				    {
				         text: 'Inscribir',
				         icon: 'resources/icons/pencil.png',
				         menu : [
					         {
					         	text 	: 'Materia Ordinaria',
					         	itemId  : "inscribir_mo"
					         },
					         {
					         	text 	: 'Primer Extraordinario',
					         	itemId 	: "inscribir_pe"
					         },
					         {
					         	text 	: 'Segundo Extraordinario',
					         	itemId  : "inscribir_se"
					         },
					         {
					         	text 	: 'Recurse',
					         	itemId  : "inscribir_re"
					         },
					         {
					         	text 	: 'Equivalencia',
					         	itemId 	: "inscribir_eq"
					         }
				         ]
				     }, {
				         text: 'Calificaciones',
				         itemId : "calificaciones",
				         icon: 'resources/icons/recycleBin.png',
				         menu : [
					         {
					         	text 	: 'Materia Ordinaria',
					         	itemId  : "calificaciones_mo"
					         },
					         {
					         	text 	: 'Primer Extraordinario',
					         	itemId 	: "calificaciones_pe"
					         },
					         {
					         	text 	: 'Segundo Extraordinario',
					         	itemId  : "calificaciones_se"
					         },
					         {
					         	text 	: 'Recurse',
					         	itemId  : "calificaciones_re"
					         },
					         {
					         	text 	: 'Equivalencia',
					         	itemId 	: "calificaciones_eq"
					         }
				         ]
				     },
					 {
				         text: 'Eliminar',
				         itemId : "eliminar",
				         icon: 'resources/icons/recycleBin.png',
				         menu : [
					         {
					         	text 	: 'Materia Ordinaria',
					         	itemId  : "eliminar_mo"
					         },
					         {
					         	text 	: 'Primer Extraordinario',
					         	itemId 	: "eliminar_pe"
					         },
					         {
					         	text 	: 'Segundo Extraordinario',
					         	itemId  : "eliminar_se"
					         },
					         {
					         	text 	: 'Recurse',
					         	itemId  : "eliminar_re"
					         },
					         {
					         	text 	: 'Equivalencia',
					         	itemId 	: "eliminar_eq"
					         }
				         ]
				     },
					 {
				         text: 'Cambiar Grupo',
				         itemId : "cambiar_grupo",
				         icon: 'resources/icons/recycleBin.png'
				     }
	    ];

        

        me.callParent(arguments);


        me.on("itemcontextmenu",function(view, record, item, index, e){

        	var raw = record.raw;
        	console.log(raw);
    		me.contextMenu.down("[itemId=inscribir_mo]").hide();
        });
		
	},
    ColumnCal : function (index,record,metaData)
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
    }
});
