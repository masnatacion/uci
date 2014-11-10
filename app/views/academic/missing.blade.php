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

//UpdateMissings(int student, int subprod, int course, int subjectkey,int? p1, int? p2, int? p3, int? p4)
		        var grid = Ext.create('UCI.academic.missing.GridPanel',{
		        	renderTo: Ext.getBody()
		        });

		        


		    }
		});
    </script>
    <div id="combo"></div>

</section>

</section>
@stop