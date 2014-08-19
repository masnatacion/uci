@extends('treasury.treasury')

<form>
@section('form')
	<div class="row">
		<h4>Pagos Varios</h4>
		<div class="large-6 columns">

				
			  <div class="row">
			    <div class="large-6 columns">
			      <label>Nombre del alumno
			        <input type="text" name="nombre" disabled placeholder="Nombre del alumno" />
			      </label>
			    </div>
			    <div class="large-6 columns">
			      <label>Número contable
			        <input type="text" name="numero" disabled placeholder="Número contable" />
			      </label>
			    </div>
			  </div>


			  <div class="row">
			    <div class="large-12 columns">
			      <label>Fecha
			        <input type="date" name="fecha" placeholder="Fecha" />
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