Ext.define('UCI.academic.kardex.GridPanel', {
	extend			: 'Base.grid.DynamicGrid',
	materias 		: "./GetCTSubjects.json",
	calificaciones 	: "./GetSubjects.json",
	data : [],
	forceFit: true,
	//columnsToEdit : ['s_group','period','p1','p2','p3','p4'],

    plugins: {
        ptype: 'rowediting',
        clicksToEdit: 2,
        listeners: {
            beforeedit: function(e, editor,o){
            	var raw    = editor.record.raw;
                var record = editor.record.data;

                if(raw.f_grade4 > 0)
            	{
            		if(record.p1 > 0 && record.p2 > 0 && record.p3 > 0 && record.p4 > 0)
            			return false;
            	}else
            	{
            		if(record.p1 > 0 && record.p2 > 0 && record.p3 > 0)
            			return false;
            	}


            }
        }
    },
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
							var found = Ext.Array.filter(calificaciones, function(calficacion) {
							    return calficacion.SubjectKey == materia.n_key;
							});

							if(Ext.isArray(found))
							{
								

								if(found.length == 1)
								{
									var calificacion = { childs : [] };
									Ext.apply(calificacion,found[0]);
								}
								else
								{
									found = me.sortByKeyDesc(found,"n_id_tinscription");

									console.log(found);

									var calificacion = { childs : found };
									Ext.apply(calificacion,found[0]);
								}

								Ext.applyIf(materias[index],calificacion);
		                    	merge[index] = materias[index];
							}



	                    });
	                    	console.log(merge[0].f_grade4)


	                    	if(merge[0].f_grade4 > 0)
	                    		me.down("[dataIndex=p4]").show()

	                    // Ext.each(materias,function(materia,index){
	                    // 	Ext.applyIf(materias[index],calificaciones[index]);
	                    // 	merge[index] = materias[index];
	                    // });

	          
				            var reconfig = me._reconfig({columns: me.columns,  data:merge});
				          	
				            me.store.model.setFields(reconfig.fields);

				            me.store.loadData(merge);

	                }
	            }); 

            }
        }); 

// The data store containing the list of states
var states = Ext.create('Ext.data.Store', {
    fields: ['abbr', 'name'],
    data : [
        {"abbr":"AL", "name":"Alabama"},
        {"abbr":"AK", "name":"Alaska"},
        {"abbr":"AZ", "name":"Arizona"}
        //...
    ]
});

// Create the combo box, attached to the states data store
var combo = Ext.create('Ext.form.ComboBox', {
    store: states,
    queryMode: 'local',
    displayField: 'name',
    valueField: 'abbr'
});


var combo2 = Ext.create('Ext.form.ComboBox', {
    store: states,
    queryMode: 'local',
    displayField: 'name',
    valueField: 'abbr'
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
	                    dataIndex 	: "period",
	                    width		: 50,
				        renderer: function(value,metaData,record) {
				        	var row = record.raw;

				        	if(!Ext.isEmpty(row.s_year))
				        	{
				        		record.data.period = row.s_year+""+row.Course;
				            	return row.s_year+""+row.Course;
				        	}
				        	else
				        		return;
				        }
	                },
					{
	                    text    	: "Grupo",
	                    dataIndex 	: "s_group",
	                    width		: 40,
	                    editor: combo2,
	                 },
	                {
	                    text    	: "P1",
	                    width		: 30,
	                    dataIndex	: "p1",
	                    editor: Ext.create('UCI.academic.field.Number'),
				        renderer: function(value,metaData,record) {
				        	
				        	return me.ColumnCal(1,record,metaData);
				        }
	                },
					{
	                    text    	: "P2",
	                    dataIndex	: "p2",
	                    width		: 30,
	                    editor: Ext.create('UCI.academic.field.Number'),
				        renderer: function(value,metaData,record) {
				        	return me.ColumnCal(2,record,metaData);
				        }
	                 },
	                {
	                    text    	: "P3",
	                    dataIndex	: "p3",
	                    width		: 30,
	                    editor: Ext.create('UCI.academic.field.Number'),
				        renderer: function(value,metaData,record) {
				        	return me.ColumnCal(3,record,metaData);
				        }
	                },
	                {
	                    text    	: "P4",
	                    dataIndex	: "p4",
	                    width		: 30,
	                    hidden		: true,
	                    editor: Ext.create('UCI.academic.field.Number'),
				        renderer: function(value,metaData,record) {
				        	return me.ColumnCal(4,record,metaData);
				        }
	                },
	                {
	                    text    	: "Final",
	                    width		: 30,
	                    dataIndex	: "avg",
				        renderer: function(value,metaData,record) {
				        	
				        	var divisor = (record.data.p1 > 0 ? 1 : 0)+ (record.data.p2 > 0 ? 1 : 0) + (record.data.p3 > 0 ? 1 : 0) + (record.data.p4 > 0 ? 1 : 0);

				        	record.data.avg = parseFloat(record.data.p1) + parseFloat(record.data.p2) + parseFloat(record.data.p3) + parseFloat(record.data.p4);
				        	
				        	//console.log(parseFloat(record.data.p1) + parseFloat(record.data.p2)+ parseFloat(record.data.p3)+ parseFloat(record.data.p4));
				        	//record.data.avg = (record.data.avg / divisor).toFixed(2);

				        	record.data.avg = (record.data.avg / divisor).toFixed(2);

				        	if(record.data.avg > 10)
				        		record.data.avg = record.data.avg / 10;

				        	var decimal =  (record.data.avg - Math.floor(record.data.avg)).toFixed(2);


				        	
				        	//console.log(record.data.n_key+" : "+record.data.avg+" "+decimal)

				        	if(decimal >= 0.6)
				        		record.data.avg = Math.round(record.data.avg);
				        	else
				        		record.data.avg = Math.floor(record.data.avg);



				        	if(record.data.avg >= 6)
				        		metaData.style="background:#5ec23d;color: white;";
				        	else if(record.data.avg < 6)
				        		metaData.style="background:#f04124;color: white;";

				        	metaData.style+="font-size:1.3em;"

				        	return record.data.avg > 0 ? record.data.avg : "";
				        }
	                },
					{
					    xtype: 'actioncolumn',
					    dataIndex :'history',
					    width: 20,
					    items: [
							{
						        icon: './img/icons/clock.png',
						        // Use a URL in the icon config
						        tooltip: 'Historial',
						        style : 'marging-right:1em',
						        handler: function (grid, rowIndex, colIndex) {
						            var record = me.getStore().getAt(rowIndex);
					            	var history = Ext.create('UCI.academic.kardex.History',{ColumnCal: me.ColumnCal,childs:record.raw.childs});
				            		history.show();
					            	history.setTitle(record.raw.n_key+" - "+record.raw.s_name);
					        	},
						        getClass: function(value,meta,record,rowIx,colIx, store) {            
						            if(record.raw.childs == 0)
						            	return 'x-hide-display';  //Hide the action icon
						        }
					    	}
					    ]
					},
					{
					    xtype: 'actioncolumn',
					    width: 30,
					    items: [
							{
						        icon: './img/icons/arrow-return-180-left.png',
						        // Use a URL in the icon config
						        tooltip: 'Extraordinario / Recurse',
						        handler: function (grid, rowIndex, colIndex) {

					        	},
						        getClass: function(value,meta,record,rowIx,colIx, store) {            
						            if(record.raw.childs == 0)
						            	return 'x-hide-display';  //Hide the action icon
						        }
					    	}
					    ]
					},
					{
					    xtype: 'actioncolumn',
					    //text : "Eliminar",
					    hidden: true,
					    width: 35,
					    items: [{
						        icon: 'js/extjs/src/ux/grid/plugin/resources/images/grid-grouping/delete.png',
						        // Use a URL in the icon config
						        tooltip: 'Eliminar',
						        handler: function (grid, rowIndex, colIndex) {
						            var rec = me.getStore().getAt(rowIndex);
						            me.onDelete(rec,rowIndex);
					            
					        		}

					    		}
					    ]
					}
	        ];


        

        me.callParent(arguments);



		
	},


	

    ColumnCal : function (index,record,metaData)
    {
    	var row = record.raw;

    	record.data["p"+index] = 0;
    	if(row["f_grade"+index] > 0)
    	{

    		record.data["p"+index] = (row["f_grade"+index] / row["n_p"+index] * 100).toFixed(2);

	    	if(record.data["p"+index] > 10)
	    		record.data["p"+index] = (record.data["p"+index] / 10).toFixed(2);

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
