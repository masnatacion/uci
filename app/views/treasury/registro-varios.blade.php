@extends('treasury.treasury')

@section('form')
<form>
	<div class="row">
		<h4>Registros Varios</h4>
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
		    <div class="large-6 columns">
		      <label>Producto
		        <select name="producto">
		          <option value="Producto">Producto</option>
		        </select>
		      </label>
		    </div>
		    <div class="large-6 columns">
		      <label>SubProducto
		        <select name="subproducto">
		          <option value="SubProducto">SubProducto</option>
		        </select>
		      </label>
		    </div>
		  </div>


		</div>

		<div class="large-6 columns">

		  <div class="row">
		    <div class="large-6 columns">
		      <label>Concepto del pago
		        <select name="concepto">
		          <option value="Concepto del pago">Concepto del pago</option>
		        </select>
		      </label>
		    </div>
		    <div class="large-6 columns">
		      <label>Porcentaje de Crédito
		        <input type="text" name="porcentaje" placeholder="Porcentaje de Crédito" />
		      </label>
		    </div>
		  </div>

		  <div class="row">
		    <div class="large-12 columns">
		      <label>Fecha de pago
		        <input type="date" name="fecha" placeholder="Fecha de pago" />
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
		</div>

	</div>	
</form>
@stop