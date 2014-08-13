@extends('treasury.dashboard')

@section('content')
<section class="content2">

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


<div class="row">
	<div class="large-12 columns">
		<div class="panel">
			<div class="row">
				<div class="large-1 columns">
					<span class="icon-man" style="font-size:3em"></span>
				</div>
				<div class="large-11 columns">

					<div class="row">
						<div class="large-4 columns">
							<ul class="no-bullet">
								<li><h3>NC. 1025824</h3></li>

							</ul>
						</div>
						<div class="large-4 columns">
							<ul class="no-bullet">
								<li>Juan Manuel Rodriguez Lopez</li>
								<li>Lic Diseño Grafico</li>
							</ul>
						</div>
						<div class="large-4 columns">
							<ul class="no-bullet">
								<li>Periodo: 14-3</li>
								<li>Estatus: Activo</li>
							</ul>
						</div>
					</div>

					
				</div>
			</div>

		</div>
	</div>
</div>

<section>
	@yield("form")
</section>

</section>
@stop