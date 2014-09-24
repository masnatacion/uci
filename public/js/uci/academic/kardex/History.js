Ext.define('UCI.academic.kardex.History', {
	extend	: 'Base.window.Window',
	modal	: true,

	initComponent   : function (){

		var me = this;

		//var reconfig = me._reconfig({columns: me.columns,  data:merge});
				          	

		var grid = Ext.create('Base.grid.DynamicGrid',{
			//renderTo: Ext.getBody(),
			width 			: 800,
			height			: 200,
			columns : [
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
	                    width		: 40
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
	                    text    	: "Cal. Final",
	                    width		: 40,
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
	                }
			]
		});

		console.log(me.childs)
        var reconfig = grid._reconfig({columns: grid.columns,  data:me.childs});
      	
        grid.store.model.setFields(reconfig.fields);

        grid.store.loadData(me.childs);

		me.items = [grid];

		me.callParent(arguments);
	}
});