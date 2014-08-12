@extends('home')

@section('content')


	<div data-alert class="alert-box alert">
	  Usuario o Password invalido
	  <a href="#" class="close">&times;</a>
	</div>

		
		<div class="row">
			<div class="large-7 columns">

				<div class="row">
					<div class="large-12">
						<img src="./img/logo.png" alt="">
						<hr>
					</div>
				</div>
				<div class="row">
					<div class="large-12">
						<h3>Avisos</h3>
					</div>
				</div>

				<div class="row">
					<div class="large-2 columns small-3"><img src="http://placehold.it/50x50&text=[img]"/></div>
					<div class="large-10 columns"><p>Bacon ipsum dolor sit amet nulla ham qui sint exercitation eiusmod commodo, chuck duis velit. Aute in reprehenderit</p></div>
				</div>
				<div class="row">
					<div class="large-2 columns small-3"><img src="http://placehold.it/50x50&text=[img]"/></div>
					<div class="large-10 columns"><p>Bacon ipsum dolor sit amet nulla ham qui sint exercitation eiusmod commodo, chuck duis velit. Aute in reprehenderit</p></div>
				</div>
				<div class="row">
					<div class="large-2 columns small-3"><img src="http://placehold.it/50x50&text=[img]"/></div>
					<div class="large-10 columns"><p>Bacon ipsum dolor sit amet nulla ham qui sint exercitation eiusmod commodo, chuck duis velit. Aute in reprehenderit</p></div>
				</div>
				<div class="row">
					<div class="large-2 columns small-3"><img src="http://placehold.it/50x50&text=[img]"/></div>
					<div class="large-10 columns"><p>Bacon ipsum dolor sit amet nulla ham qui sint exercitation eiusmod commodo, chuck duis velit. Aute in reprehenderit</p></div>
				</div>


			</div>
			<div class="large-5 columns">

				{{ Form::open(['data-abide' =>'data-abide']) }}
				  <div class="row">
				    <div class="large-12 columns">
				      <h2>Login</h2> 
				    </div>
				  </div>
				  <div class="row">
				    <div class="large-12 columns @if($errors->first('Email')) error @endif">
				      <label>Email
				        {{ Form::email("Email", $value = null, ["data-invalid"=>"false" ,"placeholder"=>"Email","required"=>"true"]); }}
				        <small class="error">{{ $errors->first("Email"); }}</small>

				      </label>
				      
				    </div>
				  </div>


				  <div class="row">
				    <div class="large-12 columns @if($errors->first('Password')) error @endif">
				      <label>Password
						{{ Form::password("Password", ["placeholder"=>"Password","required"=>"true"]); }}
				         <small class="error">{{ $errors->first("Password"); }}</small>
				      </label>
				      
				    </div>
				  </div>

				  <div class="row">
				    <div class="large-12 columns">
				      <input id="checkbox1" type="checkbox"><label for="checkbox1">Recordar Acceso</label>
				    </div>
				  </div>

				  <div class="row">
				    <div class="large-12 columns">
				      <button class="button expand">Acceder</button>
				    </div>
				  </div>
					
					<div class="row">
						<div class="large-1 columns">
							<span class="icon-warning left"></span>
						</div>
						<div class="large-11 columns">	
							Para acceder al sistema es necesario contar con un nombre de usuario y contraseña, en caso de ser alumno tu usuario es el prefijo 'A' más tu número contable.
						</div>
					</div>

					<div class="row">
						<div class="large-1 columns">
							<span class="icon-warning left"></span>
						</div>
						<div class="large-11 columns">	
							Todo acceso o intento del mismo es monitoreado, todo abuso será castigado, evita problemas y haz buen uso del sistema.
						</div>
					</div>


				 </form>
				{{ Form::close() }}



			</div>

		</div>


@stop