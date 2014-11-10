@extends('treasury.dashboard')

@section('content')


<link rel="stylesheet" type="text/css" href="./js/extjs/src/ux/grid/feature/resources/MultiGroupingSummary.css" /> 
<link rel="stylesheet" type="text/css" href="./js/extjs/src/ux/grid/plugin/resources/GroupingPanel.css" /> 
<!-- Ext JS Files -->
<link rel="stylesheet" href="./js/extjs/resources/ext-theme-neptune/ext-theme-neptune-all.css"/>
<script type="text/javascript" src="./js/extjs/ext-all-debug.js"></script>


<section class="content2">

<h3>Reinscripción</h3>


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



				Ext.create('UCI.academic.reinscripcion.Tree', {
				    renderTo: Ext.getBody()
				});



		    }
		});
    </script>
	<div id="tree"></div>
</section>

</section>
@stop