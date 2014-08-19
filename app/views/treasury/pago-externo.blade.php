@extends('treasury.treasury')


@section('form')
<form>
	<div class="row">
		<h4>Pago Externo</h4>
		<div class="large-6 columns">

			  <div class="row">
			    <div class="large-6 columns">
			      <label>Nombre
			        <input type="text" name="nombre" placeholder="Nombre" />
			      </label>
			    </div>
			    <div class="large-6 columns">
			      <label>RFC
			        <input type="text" name="rfc" placeholder="RFC" />
			      </label>
			    </div>
			  </div>
			  
			  <div class="row">  
			    <div class="large-12 columns">
			      <label>Dirección
			        <input type="text" name="direccion" placeholder="Dirección" />
			      </label>
			    </div>
			  </div>



			  <div class="row">
			    <div class="large-12 columns">
			      <label>Fecha
			        <input type="date" placeholder="Fecha" />
			      </label>
			    </div>
			  </div>

			  <div class="row">
			    <div class="large-12 columns">
			      <label>Observaciones
			        <textarea name="observaciones" id="" cols="30" rows="3"></textarea>
			      </label>
			    </div>
			  </div>

		</div>

		<div class="large-6 columns">

		  <div class="row">
		    <div class="large-12 columns">
		      <label>Escriba o selecione de la lista el concepto del pago
		        <input type="text" placeholder="Concepto" />
		      </label>
		    </div>
		  </div>


		  <div class="row">
		    <div class="large-12 columns">
		      <select name="concepto-combo" multiple style="height:10em">
		      	<option value="tramites">1Tramites por equivalencia</option>
		      	<option value="tramites">2Tramites por equivalencia</option>
		      	<option value="tramites">3Tramites por equivalencia</option>
		      	<option value="tramites">4Tramites por equivalencia</option>
		      	<option value="tramites">5Tramites por equivalencia</option>
		      </select>
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