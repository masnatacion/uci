@extends("layout")

@section('topbar')
	@extends("treasury.dashboard-topbar")
@stop

@section('content')


<h2>Dashboard</h2>

<div class="row" data-equalizer>
  <div class="medium-4 columns">
    <div class="panel" data-equalizer-watch>

    <div id="canvas-holder">
      <canvas id="chart-area" width="150" height="150"/>
    </div>

      <script>

        Chart.defaults.global.responsive = true;

            var pieData = [
                {
                  value: 300,
                  color:"#F7464A",
                  highlight: "#FF5A5E",
                  label: "Red"
                },
                {
                  value: 50,
                  color: "#46BFBD",
                  highlight: "#5AD3D1",
                  label: "Green"
                },
                {
                  value: 100,
                  color: "#FDB45C",
                  highlight: "#FFC870",
                  label: "Yellow"
                },
                {
                  value: 40,
                  color: "#949FB1",
                  highlight: "#A8B3C5",
                  label: "Grey"
                },
                {
                  value: 120,
                  color: "#4D5360",
                  highlight: "#616774",
                  label: "Dark Grey"
                }

              ];

              window.onload = function(){
                var ctx = document.getElementById("chart-area").getContext("2d");
                window.myPie = new Chart(ctx).Pie(pieData);
              };



  </script>
      
      
    </div>
  </div>
  <div class="medium-4 columns">
    <div class="panel" data-equalizer-watch>
      <h3>Treasury Services</h3>
            <ul>
              <li><a href="./registro-varios">Registro Varios</a></li>
              <li><a href="./conceptos-varios">Conceptos Varios</a></li>
              <li><a href="./pagos-varios">Pagos Varios</a></li>
              <li><a href="./pago-externo">Pago Externo</a></li>
              <li><a href="./nota-de-credito">Nota de credito</a></li>
              <li><a href="./cancelacion-transaccion">Cancelacion transaccion</a></li>
              <li><a href="./cartera-vencida">Cartera vencida</a></li>
              <li><a href="./actualizar-cuenta">Actualizar cuenta</a></li>
              <li><a href="./negociar-pago">Negociar pago</a></li>

            </ul>
    </div>
  </div>
  <div class="medium-4 columns">
    <div class="panel" data-equalizer-watch>
      <h3>Academic Services</h3>
      
      <ul>
        <li><a href="./nuevo-alumno">Nuevo Alumno</a></li>
        <li><a href="./modificar-datos-personales">Modificar Datos Personales</a></li>
        <li><a href="./documentacion">Documentación</a></li>
        <li><a href="./baja-de-alumno">Baja de Alumno</a></li>
        <li><a href="./reactivar-alumno">Reactivar Alumno</a></li>
        <li><a href="./inscripcion">Inscripción</a></li>
        <li><a href="./reinscripcion">Reinscripción</a></li>
        <li><a href="./kardex">Kardex</a></li>
        <li><a href="./calificaciones">Calificaciones</a></li>
        <li><a href="./faltas">Faltas</a></li>
        <li><a href="./administrar-beca">Administrar Beca</a></li>
        <li><a href="./cambiar-contrasena">Cambiar Contraseña</a></li>
      </ul>

    </div>
  </div>  

<!--   <div class="medium-4 columns">
    <div class="panel" data-equalizer-watch>
      <h3>Catalog</h3>
      <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
    </div>
  </div> -->

</div>

<div class="row" data-equalizer>
  <div class="medium-4 columns">
    <div class="panel" data-equalizer-watch>
      <h3>Catalog</h3>
      
      
    </div>
  </div>
  <div class="medium-4 columns">
    <div class="panel" data-equalizer-watch>
      
      <h3>Tareas Programadas</h3>
    </div>
  </div>
  <div class="medium-4 columns">
    <div class="panel" data-equalizer-watch>
      <h3>Reinscripción Automatica</h3>
      <!-- <h3>Reportes</h3> -->
    </div>
  </div>

</div>

@stop