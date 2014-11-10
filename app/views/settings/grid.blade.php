<script type="text/javascript">
var store = Ext.create('Ext.data.Store', {
    fields : ['name', 'email', 'phone', 'active'],
    data   : {
        items : [
            { name : 'Lisa',  email : 'lisa@simpsons.com',  phone : '555-111-1224', active : true  },
            { name : 'Bart',  email : 'bart@simpsons.com',  phone : '555-222-1234', active : true  },
            { name : 'Homer', email : 'home@simpsons.com',  phone : '555-222-1244', active : false },
            { name : 'Marge', email : 'marge@simpsons.com', phone : '555-222-1254', active : true  }
        ]
    },
    proxy  : {
        type   : 'memory',
        reader : {
            type : 'json',
            root : 'items'
        }
    }
});

Ext.create('Ext.grid.Panel', {
    
    height   : 400,
    width    : "100%",
    renderTo : "grid",
    store    : store,
    columns  : [
        { text : 'Nombre del subproducto', dataIndex : 'email', flex : 1 },
        { xtype : 'checkcolumn', text : 'Active', dataIndex : 'active' }
    ]
});
</script>