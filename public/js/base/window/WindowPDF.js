Ext.define('Base.window.WindowPDF',{
    extend	: 'Base.window.WindowIframe',
    url		: '',
	initComponent: function() {

	    var me = this;

	    me.url = "https://docs.google.com/viewer?embedded=true&url="+me.url;
	    me.callParent(arguments);		
	}
})