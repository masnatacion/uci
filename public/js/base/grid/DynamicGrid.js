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

    data : [],
    columns : [],
    // URL used for request to the server. Required
    url: '',
    context : [{
         text: 'Edytuj',
         icon: 'resources/icons/pencil.png',
         handler: function  () {
             var me = this;
             var data = me.ownerCt.data;
             
         }
     }, {
         text: 'Usuń',
         icon: 'resources/icons/recycleBin.png'
     }],


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

    initComponent: function() {
        
        var me = this;


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

        if (me.url == '' && me.data.length > 0) {

            //Ext.Error.raise('url parameter is empty! You have to set proper url to get data form server.');
            me.data = me.data[0]
            var reconfig = me._reconfig(me.data);

            Ext.applyIf(me, {
                columns: reconfig.columns,
                forceFit: true,
                store: Ext.create('Ext.data.Store', {
                    data: me.data.data,
                    fields : reconfig.fields
                })
            });

            me.on("afterrender",function(){
                me.store.removeAt(0);
            });
            

        }else if (me.url == '' && me.data.length == 0) {
            
            //Ext.Error.raise('url parameter is empty! You have to set proper url to get data form server.');

            Ext.applyIf(me, {
                
                forceFit: true,
                store: Ext.create('Ext.data.Store', {
                    data: [],
                    fields : [],
                    
                })
            });

            me.on("afterrender",function(){
                me.store.removeAt(0);
            });
            

        }else if(me.url == '')
        {
            //Ext.Error.raise('url parameter is empty! You have to set proper url to get data form server.');
            me.data = me.data[0]
            var reconfig = me._reconfig(me.data);

            Ext.applyIf(me, {
                columns: reconfig.columns,
                forceFit: true,
                store: Ext.create('Ext.data.Store', {
                    data: me.data.data,
                    fields : reconfig.fields
                })
            });

            me.on("afterrender",function(){
                me.store.removeAt(0);
            });
        }
        else {

            Ext.applyIf(me, {
                columns: [],
                forceFit: true,
                store: Ext.create('Ext.data.Store', {
                    // Fields have to be set as empty array. Without this Ext will not create dynamic model.
                    fields: [],
                    // After loading data grid have to reconfigure columns with dynamic created columns
                    // in Ext.ux.data.reader.DynamicReader
                    listeners: {
                        'metachange': function(store, meta) {

                            if(me.columns.length == 0)
                                me.reconfigure(store, meta.columns);
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

                        url: me.url
                    }
                })
            });
        }

        me.callParent(arguments);



        if(me.context)
        {
            me.contextMenu = Ext.create('Ext.menu.Menu', {
                 height: 58,
                 width: 140,
                 items: me.context
             });
        }

        me.on("itemcontextmenu",function(view, record, item, index, e){

            if(me.context)
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
            

        return { fields: fields, columns: columns };
    }
});