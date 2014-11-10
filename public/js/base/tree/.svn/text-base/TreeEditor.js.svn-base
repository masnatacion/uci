Ext.define('Base.tree.TreeEditor', {
	extend		: 'Base.tree.TreePanel',
	selType		: 'cellmodel',
	onEditar	: function(record,column){
		var me = this;
		me.CellEditing.cancelEdit();
		
		me.CellEditing.startEdit(record,column);
	},
	initComponent   : function (){
	
		var me = this;
		
		me.CellEditing = Ext.create('Ext.grid.plugin.CellEditing', {clicksToEdit:2});
		me.plugins =[me.CellEditing];
		
		Base.tree.TreeEditor.superclass.initComponent.apply(this,arguments);	
	}
	/*
	columns: [      
	{
	    xtype: 'treecolumn', //this is so we know which column will show the tree
	    text: 'Categoria',
	    flex: 3,
	    sortable: true,
	    dataIndex: 'text',
	    editor:{xtype:'textfield',allowBlank:false}
	}
	]
	*/ 
});
