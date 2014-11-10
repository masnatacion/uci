@extends('treasury.dashboard')

@section('content')
<section class="content2">

	<h3>Comandos</h3>

	<div class="row">
	    <div class="large-6 columns">
	    	<div class="row">
		        <div class="large-2 columns">
		            <label>Periodo</label>
		        </div>
		        <div class="large-10 columns">
		            <select id="userid">
		                <option value="0">Selecciona una opción</option>
		            </select>
		        </div>
		    </div>    
	    </div>    
	    <div class="large-6 columns">
	    	<div class="row">
		        <div class="large-2 columns">
		            <label>Academic Services</label>
		        </div>
		        <div class="large-10 columns">
		            <select id="userid">
		                <option value="0">Selecciona una opción</option>
		            </select>
		        </div>
		    </div>    
	    </div> 
	</div>


  <script>
  $(function() {
    $( "#datepicker" ).datepicker();
  });
  </script>
	
	<div class="row">
		<div class="large-12 columns">
			<form action="">
		      <label>Configurar</label>
		      <input type="radio" name="pokemon" value="Red" id="pokemonRed"><label for="pokemonRed">si</label>
		      <input type="radio" name="pokemon" value="Blue" id="pokemonBlue"><label for="pokemonBlue">no</label>
				
				<label>Fecha inicial
					<input type="text" id="datepicker">
				</label>
				
				<label>Fecha final
					<input type="text" id="datepicker">
				</label>

			</form>
		</div>
	</div>
	

</div>



@include('settings.grid')


</section>
@stop