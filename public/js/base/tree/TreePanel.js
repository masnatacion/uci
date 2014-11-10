Ext.define('Base.tree.TreePanel', {
	extend		: 'Ext.tree.Panel',
	rootVisible	: false,
	dd		: 'tree',
	isDragable	: true,
	requires	: ["Ext.data.TreeStore"],
	//columns		: [], // { header: 'Company', dataIndex: 'company', flex: 1, xtype: 'treecolumn' }
	fields	 	: [],
	data	 	: [],
	url		: '',
   	width		: 300,
   	layout		: 'fit',
   	split		: true,
	autoScroll	: true,
	msgCargando	: 'Cargando...',
	viewConfig: {
		emptyText :"No hay resultados de b&uacute;squeda",
		stripeRows: true
    },

	initComponent: function (){
    	
    	var me = this;
    	
	if(me.isDragable)
	{
		me.viewConfig = 
		{	
			plugins: {
			    ddGroup: me.dd,
			    ptype: 'treeviewdragdrop'
			},
			listeners: {
			
				beforedrop: function (node, data, overModel, dropPosition) {
					me.fireEvent("beforedrop",node, data, overModel, dropPosition);
				},
				
				drop : function(node, data, overModel, dropPosition){
					me.fireEvent("drop",node, data, overModel, dropPosition);
				}
			}
		};
	}

    	me.on("itemmove",function(node, oldParent, newParent, index, eOpts ){

		if(!Ext.isEmpty(me.url.drop))
		{
			console.log(node)
			Ext.Ajax.request({
			    url: me.url.drop,
			    params: {
				data: Ext.JSON.encode({ "id": node.internalId, "parent_k" : newParent.internalId, "order":index })
			    }
			});
		}


	});
   
	var data={
		    //fields	 : this.fields,
		    data	 : me.data,
		    url		 : me.url
		};
	me.store=Ext.create('Ext.data.TreeStore',data);	
				
 
    	Base.tree.TreePanel.superclass.initComponent.apply(this,arguments);
        
		
		this.relayEvents(this.store,[
		      	
			/**
			 * @event load
			 * Se copia el evento load de su store. DIsparado al cargar los datos
			 * @param {Store} store el store de este grid
			 * @param {records} Arrrecords Arreglo de records cargados en el store
			 */
		     "load",
		     /**
			 * @event beforeload
			 * Disparado justo antes de cargar. Si regresa falso, el store no se carga
			 * @param {Store} store El store de este grid
			 * @param {Params} params Los parametos a enviar por post para cargar este store
			 */
		     "beforeload"]);
        
		if(this.loadOnRender)
			this.on({
				scope:this,
				render: function(){
					this.load();
				}
	        });        
        
        
	},
	findRecord: function(field, value) {
	    return this.getRootNode().findChild(field,value,true);
	},
    
	/*
		https://gist.github.com/colinramsay/1789536
	*/
	filterByText: function(text) {
	    this.filterBy(text, 'text');
	},
     
     
	/**
	 * Filter the tree on a string, hiding all nodes expect those which match and their parents.
	 * @param The term to filter on.
	 * @param The field to filter on (i.e. 'text').
	 */
	filterBy: function(text, by) {
     
	    this.clearFilter();
     
	    var view = this.getView(),
		me = this,
		nodesAndParents = [];
     
	    // Find the nodes which match the search term, expand them.
	    // Then add them and their parents to nodesAndParents.
	    this.getRootNode().cascadeBy(function(tree, view){
		var currNode = this;
     
		if(currNode && currNode.data[by] && currNode.data[by].toString().toLowerCase().indexOf(text.toLowerCase()) > -1) {
		    me.expandPath(currNode.getPath());
     
		    while(currNode.parentNode) {
			nodesAndParents.push(currNode.id);
			currNode = currNode.parentNode;
		    }
		}
	    }, null, [me, view]);
	    
     
	    // Hide all of the nodes which aren't in nodesAndParents
	    this.getRootNode().cascadeBy(function(tree, view){
		var uiNode = view.getNodeByRecord(this);
     
		if(uiNode && !Ext.Array.contains(nodesAndParents, this.id)) {
		    Ext.get(uiNode).setDisplayed('none');
		}
	    }, null, [me, view]);
		
	},
	
	clearFilter: function() {
	    var view = this.getView();
     
	    this.getRootNode().cascadeBy(function(tree, view){
		var uiNode = view.getNodeByRecord(this);
     
		if(uiNode) {
		    Ext.get(uiNode).setDisplayed('table-row');
		}
	    }, null, [this, view]);
	},
	onEliminar: function(record){
		
		var me = this;
		Ext.Msg.confirm('Eliminar', 'Se eliminara &#191;Esta seguro?', function(button) {
		    if (button === 'yes') {
			var node = me.store.getNodeById(record.internalId);
			node.destroy();
			me.fireEvent("onEliminar",me,record,node);
		    }
		});

	},
	
	onAgregar : function(record){
		var me = this;
		
		var node = me.store.getRootNode();
		node.insertChild(0,record);
		me.fireEvent("onAgregar",me,record,node);

	}, 
	
	unSelection : function(){
		var me = this;
		var record = tree.getStore().getRootNode();
		me.getSelectionModel().select(record)	
	},
	
	selectById:function(id)
	{
		var me = this;
		var record = me.getStore().getNodeById(id);

		me.getSelectionModel().select(record)	
	},
	
	getSelection: function (){
	    return this.getSelectionModel().getSelection();
	},
            
   	cargando: function(){  
                var msg=this.cargando.arguments[0] || this.msgCargando; 
		this.getEl().mask(msg);   
        },
                
	listo	: function(){
                this.body.unmask();
        },
                
	error	: function(){
                var msg=this.error.arguments[0] || 'Lo sentimos, ha ocurrido un problema, intente mas tarde..'; 
                	
                    Ext.MessageBox.show({
                        title		 : 'Error',
                        msg	 	 : msg,
                        buttons		 : Ext.MessageBox.OK,
                        icon		 : Ext.MessageBox.ERROR
                    }); 	
                	
                },
    
	reload: function (d){
			this.store.reload(d);
	},
    
	addRecords : function(records){
			this.store.add(records);
		    },
		    
	removeAt : function(index){
			    this.store.removeAt(index);
		    },
    
	removeAll : function(){
			    this.store.removeAll();
		    },
		    
	getCount : function(){        
			    return this.store.getCount();    
		    },
    
	getAt : function(index){
			    return this.store.getAt(index);
		    },
		    
	load : function(options) {
			this.store.load(options);
		    },
		      
	loadData : function(o, append){
			    this.store.loadData(o, append);
		    },	
	getParent: function()
	{
	    return this.ownerCt;
	}
});
