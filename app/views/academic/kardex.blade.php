@extends('treasury.dashboard')

@section('content')


<link rel="stylesheet" type="text/css" href="./js/extjs/src/ux/grid/feature/resources/MultiGroupingSummary.css" /> 
<link rel="stylesheet" type="text/css" href="./js/extjs/src/ux/grid/plugin/resources/GroupingPanel.css" /> 
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


		        grid = Ext.create('UCI.academic.kardex.GridPanel');

				var search = Ext.create('Ext.form.field.Text',{
					style : "margin-right:1em;width:100%",
					emptyText:"¿Que estás buscando?",
					enableKeyEvents : true,
					listeners : {
						'keyup' : function(_me){
						    grid.store.clearFilter();
						    grid.store.filter([
                                {
						            property: 'n_key',
						            value   : _me.getValue(),
						            anyMatch: true
                                },
                                /*
                                {
                                    property: 's_name',
                                    value: _me.getValue(),
                                    anyMatch: true
                                }*/

						    ]);
						}
					}
				});
				var panel = Ext.create('Ext.panel.Panel',{
					renderTo: "grid",
					layout : "fit",
					items : [
						search,
						grid

					]
				});

		    }
		});
    </script>
	<div id="grid"></div>
</section>

</section>
@stop