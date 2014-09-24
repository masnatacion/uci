Ext.define('Base.form.Search',{
	extend		: 'Base.form.Combo',
	emptyText	: 'Buscar',
	queryMode 	: 'remote',
	pageSize	: 15,
	minChars	: 3,
        initComponent: function() {
	    var me = this;
	    
            if(!Ext.isEmpty(this.template))	{
                    var tpl={
                    listConfig: {
                        maxHeight   : '400',
                        loadingText	: 'Buscando...',
                        emptyText	: '<br><center>No se encontraron resultados</center><br>',
    
                        getInnerTpl: function() {
                           return me.template;
                        }
                        
                    }
                    };
                    
                    Ext.apply(this,tpl);
            }
		
	String.prototype.blank = function()  {
	    return /^\s*$/.test(this);
	  };
	  
	String.prototype.isJSON = function()  {
	    var str = this;
	    if (str.blank()) return false;
	    str = str.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@');
	    str = str.replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']');
	    str = str.replace(/(?:^|:|,)(?:\s*\[)+/g, '');
	    return (/^[\],:{}\s]*$/).test(str);
	}


	
            Base.form.Search.superclass.initComponent.apply(this,arguments);
	    
	    me.on("datosForm",function(form,record){
		
		var input = me.name;
		input = Ext.isEmpty(me._name) ? input : me._name;
		
		var v = eval("record.data."+input);
		
		if(v.isJSON() && !Ext.isNumeric(v)){

			me.forceSelection=false;
			var geo = Ext.JSON.decode(eval("record.data."+input));
			
			if(!Ext.isEmpty(geo.titulo))
				me.setValue(geo.titulo+" "+geo.pais_code);
		}else{
			
			me.store.load({params:{query:v}});
			me.setValue(v);
		}

	    });
	    
        }
});