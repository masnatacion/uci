@extends('treasury.treasury')

@section('form')
<form>
	<div class="row">
		<h4>Cancelación de Transacción</h4>
		<div class="large-6 columns">

			  <div class="row">
			    <div class="large-12 columns">
			      <label>Número de transacción
			        <input type="text" name="numero" placeholder="Número de transacción" />
			      </label>
			    </div>
			  </div>
			   
			  <div class="row">  
			    <div class="large-12 columns">
			      <label>Monto de la transacción
			        <input type="text" name="monto" placeholder="Monto de la transacción" />
			      </label>
			    </div>
			  </div>



		</div>

		<div class="large-6 columns">

		  <div class="row">  
		    <div class="large-12 columns">
		      <label>Porcentaje a devolver
		        <input type="text" name="porcentaje" placeholder="Porcentaje a devolver" />
		      </label>
		    </div>
		  </div>

		  <div class="row">  
		    <div class="large-6 columns">
		        <input id="checkbox1" type="checkbox"><label for="checkbox1">Borrar cuenta de pago</label>
		    </div>
		  </div>


		  <div class="row">
		    <div class="large-6 columns">
		    	<button class="button expand background-green">Aceptar</button>
		    </div>
		    <div class="large-6 columns">
		    	<button class="button expand background-gray">Cancelar</button>
		    </div>
		  </div>
		</div>
	</div>	
</form>
@stop