@extends('treasury.treasury')

@section('form')
	
	<div class="row">
		<div class="large-12 columns large-centered">
	
			<form>
				<h4>Cartera Vencida</h4>
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
			    <div class="large-6 columns">
			      <label>Concepto del pago
			        <select name="concepto">
			          <option value="Concepto del pago">Concepto del pago</option>
			        </select>
			      </label>
			    </div>
			    <div class="large-6 columns">
			      <label>Fecha de vencimiento
			      	<input type="date" name="fecha" placeholder="Fecha de pago" />
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
			  <div class="row">
			    <div class="large-12 columns">
			      <label>Cantidad
			        <input type="text" name="cantidad" placeholder="Cantidad" />
			      </label>
			    </div>
			  </div>

			  <div class="row">
			  	<div class="large-12 columns">

					<table class="responsive">
						<tr>
							<th>Descripción</th>
							<th>Cuenta</th>
							<th>Monto</th>
							<th>Periodo</th>
							<th>Fecha de vencida</th>
						</tr>
						<tr>
							<td>Primer Pago Curso Ingles TOEIC</td>
							<td>143</td>
							<td>698</td>
							<td>698</td>
							<td>698</td>
						</tr>
						<tr>
							<td>Primer Pago Curso Ingles TOEIC</td>
							<td>143</td>
							<td>698</td>
							<td>698</td>
							<td>698</td>
						</tr>
					</table>
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