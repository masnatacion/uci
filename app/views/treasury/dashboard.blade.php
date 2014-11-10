@extends("layout")

@section('topbar')
  @extends("treasury.dashboard-topbar")
@stop

@section('content')


<h2>Dashboard</h2>

<div class="row" data-equalizer>
  <div class="medium-4 columns">
    <div class="panel" data-equalizer-watch>


      <script type="text/javascript" src="./js/jquery.js"></script>
      <script type="text/javascript" src="./js/canvasjs.min.js"></script>
      
      <div id="pieContainer" style="height: 400px;position:relative;"></div>


      <script type="text/javascript">
jQuery(document).ready(function ($) {
      var pieChart= new CanvasJS.Chart("pieContainer", {
        theme: "theme2",
        title:{
          text: "Alumnos inscritos para el periodo actual"
        },
        legend:{
          verticalAlign: "bottom",
          horizontalAlign: "center"
        },
        data: [
        {
         type: "doughnut",
         startAngle: 10,
         toolTipContent: "{name} <strong>{y} %<strong>",
         showInLegend: true,
         indexLabel: "{name} {y}%",
         dataPoints: [
         {  y: 83, name:"Google" },
         {  y: 8, name:"Yahoo!"},
         {  y: 5, name:"Bing"},
         {  y: 2, name:"Baidu"},
         {  y: 2, name:"Others"}
         ]
       }
       ]
     });


    pieChart.render();
});

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