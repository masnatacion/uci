Ext.define('UCI.academic.reinscripcion.Tree', {
	extend		: 'Ext.tree.Panel',
    width		: 400,
    height		: 450,
    rootVisible	: false,

	materias 		: "./GetCTSubjects.json",
	calificaciones 	: "./GetSubjects.json",
    listeners: {
        checkchange: function( node, checked, eOpts ){
            if(node.hasChildNodes()){
                node.eachChild(function(childNode){
                    childNode.set('checked', checked);
                });
            }
        }
    },
	initComponent: function (){
    	
    	var me = this;


	    me.plugins = [
	    	Ext.create('Ext.grid.plugin.CellEditing',{
	    		clicksToEdit: 2,
		        listeners: {
		            beforeedit: function(e, editor,o){
		                var record = editor.record.data;

		                if(record.leaf)
		                	return false;
		            }
		        }
	    	})
	    ];

    	me.columns =  [
                {
                    xtype: 'treecolumn',
                    dataIndex: 'text',
                    flex: 2,
                    text: 'Niveles'
                },
                {
                    xtype: 'gridcolumn',
                    flex: 1,
                    text: 'Grupo',
                    editor:'combobox'
                }
            ];

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

									var calificacion = { childs : found };
									Ext.apply(calificacion,found[0]);
								}

								Ext.applyIf(materias[index],calificacion);
		                    	merge[index] = materias[index];
							}



	                    });


function arrayFromObject(obj) {
    var arr = [];
    for (var i in obj) {
        arr.push(obj[i]);
    }
    return arr;
}

function groupBy(list, fn) {
    var groups = {};
    for (var i = 0; i < list.length; i++) {
        var group = JSON.stringify(fn(list[i]));
        if (group in groups) {
            groups[group].push(list[i]);
        } else {
            groups[group] = [list[i]];
        }
    }
    return arrayFromObject(groups);
}

var results = groupBy(merge, function(item)
{
  return [item.n_id_level];
});


var store = [];

Ext.each(results,function(result,index){

	var children = [];

	Ext.each(result,function(m,i){
		children[i] = { text: m.s_name,leaf: true,checked: false };
	})
	
	store[index] = { text: "Nivel "+(parseInt(index)+1),checked: false, expanded: false, children: children };

});



			me.store.setRootNode({
		        expanded: true,
		        children: store
		    });

	                }
	            }); 

            }
        }); 





		me.store = Ext.create('Ext.data.TreeStore', {
		    root: {
		        expanded: true,
		        children: [
		          
		            { text: "homework", expanded: true, children: [
		                { text: "book report", leaf: true,checked: false },
		                { text: "algebra", leaf: true,checked: false}
		            ] }
		        ]
		    }
		});

		me.callParent(arguments);

	},

    sortByKey :function (array, key) {
        return array.sort(function(a, b) {
            var x = a[key];
            var y = b[key];

            if (typeof x == "string")
            {
                x = x.toLowerCase(); 
                y = y.toLowerCase();
            }

            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        });
    },

    sortByKeyDesc :function (array, key) {
        return array.sort(function(a, b) {
            var x = a[key];
            var y = b[key];

            if (typeof x == "string")
            {
                x = x.toLowerCase(); 
                y = y.toLowerCase();
            }

            return ((x > y) ? -1 : ((x < y) ? 1 : 0));
        });
    }

});