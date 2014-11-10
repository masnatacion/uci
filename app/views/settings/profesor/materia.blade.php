@extends('treasury.dashboard')

@section('content')
<section class="content2">

	<h3>Materia</h3>

	<div class="row">
	    <div class="large-6 columns">
	    	<div class="row">
		        <div class="large-2 columns">
		            <label>Profesor</label>
		        </div>
		        <div class="large-10 columns">
		            <select id="userid">
		                <option value="0">Selecciona una opción</option>
		            </select>
		        </div>
		    </div>    
	    </div> 
		<div class="large-6 columns">
			<div class="row">
		        <div class="large-2 columns">
		            <label>Producto</label>
		        </div>
		        <div class="large-10 columns">
		            <select id="group" disabled>
		                <option value="0">Selecciona una opción</option>
		            </select>
		        </div>  
			</div>
		</div>   
	</div>


	<div class="row">
		<div class="large-6 columns">
			<div class="row">
		        <div class="large-2 columns">
		            <label>SubProducto</label>
		        </div>
		        <div class="large-10 columns">
		            <select id="group" disabled>
		                <option value="0">Selecciona una opción</option>
		            </select>
		        </div>  
			</div>
		</div>
		<div class="large-6 columns">
			<div class="row">
		        <div class="large-2 columns">
		            <label>Grupo</label>
		        </div>
		        <div class="large-10 columns">
		            <select id="gtype" disabled>
		                <option value="0">Selecciona una opción</option>
		            </select>
		        </div>      
			</div>
		</div>

	</div>
	
	<div class="row">
		<div class="large-12 columns">
			<div id="grid"></div>
		</div>
	</div>
	

</div>



@include('settings.grid')


</section>
@stop