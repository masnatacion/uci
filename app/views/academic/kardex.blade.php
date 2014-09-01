@extends('treasury.dashboard')

@section('content')
<section class="content2">

<h3>Academic Services</h3>
<dl class="sub-nav">
	<dd class="active"><a href="./nuevo-alumno">Nuevo Alumno</a></dd>
	<dd><a href="./modificar-datos-personales">Modificar Datos Personales</a></dd>
	<dd><a href="./documentacion">Documentación</a></dd>
	<dd><a href="./baja-de-alumno">Baja de Alumno</a></dd>
	<dd><a href="./reactivar-alumno">Reactivar Alumno</a></dd>
	<dd><a href="./inscripcion">Inscripción</a></dd>
	<dd><a href="./reinscripcion">Reinscripción</a></dd>
	<dd><a href="./kardex">Kardex</a></dd>
	<dd><a href="./caddficaciones">Caddficaciones</a></dd>
	<dd><a href="./faltas">Faltas</a></dd>
	<dd><a href="./administrar-beca">Administrar Beca</a></dd>
	<dd><a href="./cambiar-contrasena">Cambiar Contraseña</a></dd>
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