Ext.define('Base.grid.EditorGrid', {
	extend		: 'Base.grid.DynamicGrid',
	//selType		: 'cellmodel',
	editor 		: true,
	selModel: {
	     selType: 'cellmodel'
	},
	onEdit	: function(record,column){
		var me = this;
		me.CellEditing.cancelEdit();
		
		me.CellEditing.startEdit(record,column);
		e.fireEvent("onEdit",me,record,0);
	},
	initComponent   : function (){
	
		var me = this;
		if(me.editor)
		{
			me.CellEditing = Ext.create('Ext.grid.plugin.CellEditing', {clicksToEdit:2});
			me.plugins.push(me.CellEditing);

		}


		if(me.editor)
		{
			// me.HeaderFilters = Ext.create('Ext.ux.grid.plugin.HeaderFilters');
			// me.plugins.push(me.HeaderFilters);

		}

		Base.grid.EditorGrid.superclass.initComponent.apply(this,arguments);	
	},
	onAdd : function(record){
		var me = this;
		
		me.getStore().insert(0, record);
		me.fireEvent("onAdd",me,record,0);

	}
});
