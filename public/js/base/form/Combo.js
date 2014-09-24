Ext.define('Base.form.Combo', {
	    extend		: 'Ext.form.ComboBox',
	    fields		: ['id', 'nombre'],
	    data		: [],
	    params		: '',
	    url			: '',
	    template		: '',
            //itemId		: 'combo',
	    enableKeyEvents     : true,
	    emptyText 		: 'Escribe o elige',
	    width		: 200,
	    //displayField	: 'nombre',
	    //valueField		: 'id',	
	    queryMode		: 'local',
	    allowBlank		: false,  // requires a non-empty value
	    forceSelection 	: true,
            load                : true,
	    typeAhead		: true,
	    //pageSize		: 10,
	    minChars		: 1,
	    autoLoad		: false,

		initComponent: function() {

		var me=this;
		
		var data={
		    fields	 : this.fields,
		    data	 : this.data,
		    url		 : this.url,
		    params	 : this.params
		};
		
                if(Ext.isObject(me.fields[0]))
                 me.valueField = me.fields[0].name;
                else
                 me.valueField = me.fields[0];
                 
                if(Ext.isObject(me.fields[1]))
                 me.displayField = me.fields[1].name;
                else
                 me.displayField = me.fields[1];

                
			if(!Ext.isEmpty(this.template))	{
				var tpl={
			        listConfig: {
                                    maxHeight   : 400,
			            loadingText	: 'Buscando...',
			            emptyText	: '<br><center>No se encontraron resultados</center><br>',
    
			            getInnerTpl: function() {
			               return me.template;
			            }
                                    
			        }
				};
				
				Ext.apply(this,tpl);
			}

			this.store=Ext.create('Base.data.Store',data);
                        
                        if(me.$autoLoad)
                                this.store.load();    
			
			Base.form.Combo.superclass.initComponent.apply(this,arguments);	


	        this.on({
	            // delete the previous query in the beforequery event or set
	            // combo.lastQuery = null (this will reload the store the next time it expands)
	            beforequery: function(qe){
	                delete qe.combo.lastQuery;
	            }
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
	    }
	    
	    
	});