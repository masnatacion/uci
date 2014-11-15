@extends('treasury.dashboard')

@section('content')
<h3>Catalog</h3>

<section class="content">


    <div class="row">
        <div class="large-12 columns">
            <div id="grid"></div>
        </div>
    </div>

</section>



<script type="text/javascript">


Ext.application({
    name: 'UCI',
    appFolder   : "./js/UCI/",

    launch: function () {
        var me = this;


        Ext.create('UCI.catalogs.GridPanel', {
            
            height   : 400,
            width    : "100%",
            renderTo : "grid",
            data : [
                { name : 'Lisa',  email : 'lisa@simpsons.com',  phone : '555-111-1224', active : true  },
                { name : 'Bart',  email : 'bart@simpsons.com',  phone : '555-222-1234', active : true  },
                { name : 'Homer', email : 'home@simpsons.com',  phone : '555-222-1244', active : false },
                { name : 'Marge', email : 'marge@simpsons.com', phone : '555-222-1254', active : true  }
            ],
            columns  : [
                { text : 'Nombre del subproducto', dataIndex : 'email', flex : 1 },
                { xtype : 'checkcolumn', text : 'Active', dataIndex : 'active' }
            ]
        });

    }

});

</script>
@stop