Ext.define('Base.data.Store', {
    extend			: 'Ext.data.Store',
    fields	 		: [],
    data	 		: [], 	
    url				: '',
    params			: '',
    pageSize: 10,
    getDataProxy : function($url)
    {


        return  {
            type: 'ajax',
            url : !Ext.isObject($url) ? $url: null,
            api : Ext.isObject($url) ? $url: null,
            reader: {
                type		: 'json',
                root		: 'results',
                totalProperty	: 'total',
                successProperty     : 'success'
            }
        };
    },
    setUrl     : function($url){
        var me = this;
        var proxy = me.getDataProxy($url);                        
        me.setProxy(proxy);   
    },
    constructor: function() {

        var me = arguments[0];

        if(Ext.isEmpty(me.autoSync))
            me.autoSync =  Ext.isObject(me.url) ? true : false;

        if(!Ext.isEmpty(me.url))	
        {				
            Ext.apply(me,{proxy: this.getDataProxy(me.url)});
        }

        Base.data.Store.superclass.constructor.apply(this, arguments);
		
    }

});