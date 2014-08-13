@extends('treasury.treasury')

@section('form')
	
	<div class="row">
		<div class="large-12 columns large-centered">
	
			<form>
				<h4>Actualizar Cuenta</h4>
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
			      <label>Nueva cuenta
			        <select name="nueva_cuenta">
			          <option value="Producto"></option>
			        </select>
			      </label>
			    </div>
			  </div>

			  <div class="row">
			  	<div class="large-12 columns">

					<table class="responsive">
						<tr>
							<th>Descripción</th>
							<th>Periodo</th>
							<th>Cuenta</th>
						</tr>
						<tr>
							<td>Primer Pago Curso Ingles TOEIC</td>
							<td>143</td>
							<td>698</td>
						</tr>
						<tr>
							<td>Primer Pago Curso Ingles TOEIC</td>
							<td>143</td>
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