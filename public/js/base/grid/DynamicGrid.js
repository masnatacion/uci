// CONTEXT MENU
// http://devjs.eu/en/adding-context-menu-to-ext-js-4-grid-row/

Ext.define('Base.grid.DynamicGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.dynamicGrid',
    alternateClassName: 'Ext.grid.DynamicGrid',
    selModel: {
            mode: 'MULTI'
        },
    requires: [
        'Base.data.reader.DynamicReader',
        'Ext.ux.grid.FiltersFeature',
        'Ext.ux.grid.plugin.HeaderFilters'
    ],
    deleteRow : false,
    data : [],
    columns : [],
    // URL used for request to the server. Required
    //url: '',
    url : '',
    plugins : [],
    context : null,

    getSelection: function (){
        return this.getSelectionModel().getSelection();
    },

    removeColumn : function(){

        var me = this;
        return {
            xtype: 'actioncolumn',
            width: 50,
            items: [{
                icon: 'js/extjs/src/ux/grid/plugin/resources/images/grid-grouping/delete.png',
                // Use a URL in the icon config
                tooltip: 'Eliminar',
                handler: function (grid, rowIndex, colIndex) {
                    var rec = me.getStore().getAt(rowIndex);
                    me.onDelete(rec,rowIndex);
                    
                }
            }]
        };

    },

    onMask : function(msg){
        var me = this;

        if(!Ext.isObject(me.mask))
            me.mask = new Ext.LoadMask(Ext.getBody(), {msg:msg});
        else
            me.mask.setLoading(msg);

        me.mask.show();
    },

    unMask : function(){
        var me = this;
        me.mask.hide();
    },

    onDelete : function(record,index){
        var me = this;

        Ext.MessageBox.confirm('Eliminar', 'Se eliminara &#191;Esta seguro?', 
                function(btn) {
                   if(btn=='yes')
                   {
                        me.fireEvent('deleting', me, record,index); 
                        
                        //status 1
                        var $delete = me.findEventURL("delete");
                        if($delete)
                        {
                            me.onMask("Eliminando...");
                            me.ajaxRequest($delete.delete,"delete",$delete.params || {});

                            me.on("delete",function(json){
                                if(json.status == 1)
                                    me.store.removeAt(index);
                            });
                        }else
                            me.store.removeAt(index);

                   }
                    
                   
              });
                 
    },


    onSave : function(record,index){
        var me = this;
        var $save = me.findEventURL("save");
        
        me.fireEvent('saving', me, record,index); 

        if($save)
        {
            me.onMask("Guardando...");
            me.ajaxRequest($save.save,"save",$save.params || {});

            me.on("save",function(json){
                if(json.status == 1)
                    me.store.insert(index,record)
            });
        }else
            me.store.insert(index,record)

    },

    findEventURL : function(event){

        var me       = this,
            response = null;

        Ext.iterate(me.url,function(url){
            if(Ext.isDefined(url[event]))
            {
                response =  url;
                return false;
            }
        });

        return response;
    },

    ajaxRequest : function(url,event,params)
    {
        var me = this;


        Ext.Ajax.request({
            url: url,
            params: params || {},
            success: function(response){
                var response = response.responseText;
                var json = Ext.decode(response);

                me.unMask();
                me.fireEvent(event, json); 
                Ext.Msg.alert('Status', json.message || "Error contacte al admon.");
            }
        });
    },


    sortByKey :function (array, key) {
        return array.sort(function(a, b) {
            var x = a[key];
            var y = b[key];

            if (typeof x == "string")
            {
                x = x.toLowerCase(); 
                y = y.toLowerCase();
            }

            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        });
    },

    sortByKeyDesc :function (array, key) {
        return array.sort(function(a, b) {
            var x = a[key];
            var y = b[key];

            if (typeof x == "string")
            {
                x = x.toLowerCase(); 
                y = y.toLowerCase();
            }

            return ((x > y) ? -1 : ((x < y) ? 1 : 0));
        });
    },

    initComponent: function() {
        
        var me = this;
        var recordQuery = me.findEventURL("query");
        
        if(recordQuery)
            me.urlQuery = recordQuery.query;
        else
            me.urlQuery = me.url;



        if(me.deleteRow)
            me.columns.push(me.removeColumn());

        var filters = {
            ftype: 'filters',
            // encode and local configuration options defined previously for easier reuse
            encode: false, // json encode the filter query
            local: true,   // defaults to false (remote filtering)

            // Filters are most naturally placed in the column definition, but can also be
            // added here.
            filters: [
                {
                    type: 'boolean',
                    dataIndex: 'visible'
                }
            ]
        };

        me.features= [filters];

        if (me.urlQuery == '' && me.data.length > 0) {

            //Ext.Error.raise('urlQuery parameter is empty! You have to set proper urlQuery to get data form server.');
            
            if(Ext.isDefined(me.data.data))
                me.data = me.data[0];
            else
                me.data.data = me.data;

            var reconfig = me._reconfig(me.data);

            Ext.apply(me, {
                columns: reconfig.columns,
                forceFit: true,
                store: Ext.create('Ext.data.Store', {
                    data: me.data.data,
                    fields : reconfig.fields
                })
            });

            
            // me.on("afterrender",function(){
            //     me.store.removeAt(0);
            // });
            

        }else if (me.urlQuery == '' && me.data.length == 0) {
            
            //Ext.Error.raise('urlQuery parameter is empty! You have to set proper urlQuery to get data form server.');

            Ext.apply(me, {
                
                forceFit: true,
                store: Ext.create('Ext.data.Store', {
                    data: [],
                    fields : [],
                    
                })
            });

            me.on("afterrender",function(){
                //me.store.removeAt(0);
            });
            

        }else if(me.urlQuery == '')
        {
            //Ext.Error.raise('urlQuery parameter is empty! You have to set proper urlQuery to get data form server.');
            me.data = me.data[0]
            var reconfig = me._reconfig(me.data);

            Ext.apply(me, {
                columns: reconfig.columns,
                forceFit: true,
                store: Ext.create('Ext.data.Store', {
                    data: me.data.data,
                    fields : reconfig.fields
                })
            });

            me.on("afterrender",function(){
                //me.store.removeAt(0);
            });
        }
        else {

            Ext.apply(me, {
                columns: [],
                forceFit: true,
                store: Ext.create('Ext.data.Store', {
                    // Fields have to be set as empty array. Without this Ext will not create dynamic model.
                    fields: [],
                    // After loading data grid have to reconfigure columns with dynamic created columns
                    // in Ext.ux.data.reader.DynamicReader
                    listeners: {
                        'metachange': function(store, meta) {

                            if(me.columns.length == 0){

                                // if(me.deleteRow)
                                //     meta.columns.push(me.removeColumn());

                                me.reconfigure(store, meta.columns);
                            }
                        }
                    },

                    autoLoad: true,
                    remoteSort: false,
                    remoteFilter: false,
                    remoteGroup: false,
                    proxy: {
                        reader: 'dynamicReader',
                        type: 'rest',
                        grid : me,

                        url: me.urlQuery
                    }
                })
            });
        }

        me.callParent(arguments);



        if(Ext.isArray(me.context))
        {
            me.contextMenu = Ext.create('Ext.menu.Menu', {
                 items: me.context
             });
        }

        me.on("itemcontextmenu",function(view, record, item, index, e){

            if(Ext.isArray(me.context))
            {
                e.stopEvent();

                me.contextMenu.data = {
                    view    : view,
                    record  : record,
                    item    : item,
                    index   : index
                };

                me.contextMenu.showAt(e.getXY());
            }

        });

    },

    _reconfig : function (json)
    {

        //var data    = json.data;

        var me      = this;
        var item    = json.columns || json[0];
        var editor  = json.editor;
        var fields  = [];
        var columns = [];
        var items   = [];

        
        

        Ext.iterate(item,function(column,i){
           

            var _editor = {
                xtype       : column.type || 'textfield',
                allowBlank  : false
            };

            if(Ext.isObject(column))
            {


                fields.push({
                                name: column.dataIndex || column.text, 
                                type: column.type || "textfield"
                            });

                columns.push(Ext.applyIf(column,{
                                                text: column.text, 
                                                dataIndex: column.text,
                                                editor : _editor,
                                                filter: {
                                                    type: 'string'  
                                                },
                                            })); 

            }else
            {


                fields.push({name: column, type: 'textfield'});
                columns.push({text: column, dataIndex: column,editor : editor});
            }


        });
            


        if(me.deleteRow)
            columns.push(me.removeColumn());    

        return { fields: fields, columns: columns };
    }
});