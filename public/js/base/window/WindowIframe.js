Ext.define('Base.window.WindowIframe',{
    extend	: 'Base.window.Window',
    layout 	: 'fit',
    url		: '',
	initComponent: function() {

	    var me = this;

	    me.items = [{
	        xtype : "component",
	        autoEl : {
	            tag : "iframe",
	            src : me.url
	        }
	    }];

	    me.callParent(arguments);		
	}
})