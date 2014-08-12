@extends('treasury.dashboard')

@section('content')
<section class="content">

<h3>Treasury Services</h3>
<dl class="sub-nav">
  <dd class="active"><a href="./registro-varios">Registro Varios</a></dd>
  <dd><a href="./conceptos-varios">Conceptos Varios</a></dd>
  <dd><a href="./pagos-varios">Pagos Varios</a></dd>
  <dd><a href="./pago-externo">Pago Externo</a></dd>
  <dd><a href="./nota-de-credito">Nota de credito</a></dd>
  <dd><a href="./cancelacion-transaccion">Cancelacion transaccion</a></dd>
  <dd><a href="./cartera-vencida">Cartera vencida</a></dd>
  <dd><a href="./actualizar-cuenta">Actualizar cuenta</a></dd>
  <dd><a href="./negociar-pago">Negociar pago</a></dd>
</dl>


<section>
	<div class="row">
		<div class="large-6 columns">
			<div class="panel">
				<div class="row">
					<div class="large-3 columns">
						<span class="icon-man" style="font-size:8em"></span>
					</div>
					<div class="large-9 columns">
						<ul class="no-bullet">
							<li><h4>NC. 1025824</h4></li>
							<li>Juan Manuel Rodriguez Lopez</li>
							<li>Lic Diseño Grafico</li>
							<li>Periodo: 14-3</li>
							<li>Estatus: Activo</li>
						</ul>
						
					</div>
				</div>
				<div class="row">
					<div class="large-12 columns">
						<hr>
						<div class="row">
							<div class="large-6 columns">
								<button class="button expand background-gray">Inscripción</button>
							</div>
							<div class="large-6 columns">
								<button class="button expand background-gray">Datos personales</button>
							</div>
						</div>
						<div class="row">
							<div class="large-6 columns">
								<button class="button expand background-gray">Documentación</button>
							</div>
							<div class="large-6 columns">
								<button class="button expand background-gray">Baja de alumno</button>
							</div>
						</div>
						<div class="row">
							<div class="large-6 columns">
								<button class="button expand background-gray">Reactivar alumno</button>
							</div>
							<div class="large-6 columns">
								<button class="button expand background-gray">Reinscripción</button>
							</div>
						</div>
						<div class="row">
							<div class="large-6 columns">
								<button class="button expand background-gray">Kardex</button>
							</div>
							<div class="large-6 columns">
								<button class="button expand background-gray">Calificaciones</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="large-6 columns">
			@yield("form")
		</div>
	</div>
</section>

</section>
@stop