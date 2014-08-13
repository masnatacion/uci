@extends('treasury.treasury')

@section('form')
	
	<div class="row">
		<div class="large-6 columns">
	
				<h4>Negociar Pago</h4>
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

			  <div class="row">
			    <div class="large-12 columns">
			      <label>Concepto del pago
			        <select name="concepto">
			          <option value="Concepto del pago">Concepto del pago</option>
			        </select>
			      </label>
			    </div>

			  </div>

			  <div class="row">

			    <div class="large-6 columns">
			      <label>Porcentaje de Beca
			        <input type="text" name="beca" disabled placeholder="Porcentaje de Beca" />
			      </label>
			    </div>
			    <div class="large-6 columns">
			      <label>Porcentaje de Crédito
			        <input type="text" name="credito" disabled placeholder="Porcentaje de Crédito" />
			      </label>
			    </div>
			  </div>

		</div>

		<div class="large-6 columns">
			
			  <div class="row">

			    <div class="large-12 columns panel">
					<div class="row">
						<input id="checkbox1" type="checkbox"><label for="checkbox1">Configurar</label>
						<div class="row" style="margin-left: 2em;">
							<div class="large-12 columns">
						      <label>Fecha del pago
						        <input type="date" name="fecha_pago" placeholder="Fecha del pago" />
						      </label>
							</div>
							<div class="large-12 columns">
						      <label>
						        <input id="checkbox1" type="checkbox"><label for="checkbox1">Aplicar porcentaje de beca</label>
						      </label>
							</div>
							<div class="large-12 columns">
						      <label>Numero de recargos
						        <input type="text" name="recargos" placeholder="Numero de recargos" />
						      </label>
							</div>
						</div>
					</div>
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
@stop