@extends('treasury.dashboard')

@section('content')

<!-- Ext JS Files -->
<link rel="stylesheet" href="./js/extjs/resources/ext-theme-neptune/ext-theme-neptune-all.css"/>
<script type="text/javascript" src="./js/extjs/ext-all-debug.js"></script>


<section class="content2">

<h3>Kardex</h3>


<section>
    <!-- App Files -->
    <script type="text/javascript">
		Ext.Loader.setConfig({
		    enabled			: true,
		    disableCaching	: true,
		    paths  : {
		      UCI   : "./js/uci/",
		      Base  : "./js/base/",
		      Ext   : "./js/extjs/src/"
		   }
		});

		Ext.application({
		    name        : 'UCI',
		    appFolder   : "./js/UCI/",
		    
		    launch: function() {
		        var me = this;

		        grid = Ext.create('Base.grid.EditorGrid',{
		            renderTo: "grid",
		            data : [
					        {
					            filter : true,
					            columns: [{
					                        text    : "Data",
					                        type    : "datefield"
					                     },
					                    {
					                        text    : "Name"
					                     }],
					            // columns: ["Data"],        
					            data : [
					                {"Data":"2014-09-08 10:48:24.0","Name":"Adam","Result":""},
					                {"esta":"esta2","Data":"2012-09-08 10:48:34.0","Name":"Carol","Result":"5.26"},
					                {"Data":"2012-09-08 10:48:24.0","Name":"Adam","Result":""},
					            ]

					        }
					],
		            //url: './grid.json',


		        });

		    }
		});
    </script>
	<div id="grid"></div>
</section>

</section>
@stop