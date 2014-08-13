@extends('treasury.treasury')

@section('form')
	<div class="row">
		<div class="large-12 columns large-centered">

			<form>
				<h4>Nota de credito</h4>
			  <div class="row">
			    <div class="large-12 columns">
			      <label>Número de transacción
			        <input type="text" name="numero" placeholder="Número de transacción" />
			      </label>
			    </div>
			  </div>
			   
			  <div class="row">  
			    <div class="large-6 columns">
			      <label>Monto de la transacción
			        <input type="text" name="monto" placeholder="Monto de la transacción" />
			      </label>
			    </div>
			    <div class="large-6 columns">
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
			    <div class="large-12 columns">
			      <label>Descripción
			        <textarea name="descripcion" id="" cols="30" rows="3"></textarea>
			      </label>
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

			</form>

		</div>
	</div>	
@stop