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

        me.callParent(arguments);
		
	},
    // plugins: [{
    //     ptype: 'rowexpander',
    //     rowBodyTpl : new Ext.XTemplate(
    //         '<p><b>Company:</b> {GradeType}</p>',
    //         //'<p><b>Change:</b> {change:this.formatChange}</p><br>',
    //         //'<p><b>Summary:</b> {desc}</p>',
    //     {
    //         formatChange: function(v){
    //             var color = v >= 0 ? 'green' : 'red';
    //             return '<span style="color: ' + color + ';">' + Ext.util.Format.usMoney(v) + '</span>';
    //         }
    //     })
    // }],
        //collapsible: true,
        //animCollapse: false,
        //enableLocking: true,
});
