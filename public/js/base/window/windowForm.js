Ext.define('Base.window.WindowForm',{
    extend	: 'Base.window.Window',
    _form     : [], // object form
    form      : [], // params of the form
    initComponent: function() {
        var me = this;

        me._form = Ext.create("Base.panel.FormPanel", me.form)
        
        Ext.applyIf(me.items,me._form);
        
        me.callParent(arguments);
    
    },
    getForm  : function(){
        var me = this;
        return me._form;
    }
})