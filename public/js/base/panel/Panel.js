Ext.define('Base.panel.Panel', {
    extend		: 'Ext.form.FormPanel',
    bodyStyle		: 'padding:5px;background:white',
    msgCargando		: 'Cargando...',
    border		: 0,

    defaults: {
	enableKeyEvents :true,
        anchor: '100%',
        border: false
    },
    fieldDefaults: {
    	labelAlign      : 'right',
    	labelWidth      : 150,
	selectOnFocus   : true,
    	anchor          : '100%'
    },
    
    getParent: function()
    {
    	return this.ownerCt;
    },

    cargando	: function(){
	
	var me = this;
	
	me.listo();
	
        var msg=this.cargando.arguments[0] || this.msgCargando; 
        var url=this.cargando.arguments[1] || ''; 
        var isbody=this.cargando.arguments[2] || false; 
        var mask = this.getEl();
        
        if(isbody)
        	mask=this.getView().getEl();
        
        	mask.mask(msg);   
        
        if(!Ext.isEmpty(url))
        {	
	        var maskEl= mask.child('.x-mask-msg .x-mask-msg-text');
		
		if(url == "none")
			maskEl.setStyle('padding', '0px');
		
	        maskEl.setStyle('background-image', 'url('+url+')');
        }
    },
    listo		: function(){
   	 this.getEl().unmask();
	 
	 if(this.body)
	 this.body.unmask();
    },
    error		: function(){
    	var msg=this.error.arguments[0] || 'Lo sentimos, ha ocurrido un problema, intente mas tarde..'; 
    	
        Ext.MessageBox.show({
            title		 : 'Error',
            msg	 		 : msg,
            buttons		 : Ext.MessageBox.OK,
            icon		 : Ext.MessageBox.ERROR
        }); 	
		
    }
    
});

