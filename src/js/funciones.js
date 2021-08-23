const BASE_URL = 'http://localhost/desplazados-main/app/servicios.php?accion=';


jQuery(document).ready(function($) {
  get_all_documentos();
  get_all_sexos();
  get_all_municipios();
  add_persona();

});


function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}


function get_all_documentos() {

	$.ajax({
		url: BASE_URL+'get_all_documentos',
		type: 'POST',
		dataType: 'json',
		data: {},
	})
	.done(function(r) {
		$("#id_tipo_documento").html(r.data);
	});

}

function get_all_sexos() {

	$.ajax({
		url: BASE_URL+'get_all_sexos',
		type: 'POST',
		dataType: 'json',
		data: {},
	})
	.done(function(r) {
		$("#id_sexo").html(r.data);
	});

}


function get_all_municipios() {

	$.ajax({
		url: BASE_URL+'get_all_municipios',
		type: 'POST',
		dataType: 'json',
		data: {},
	})
	.done(function(r) {
		$("#id_municipio_nacimiento").html(r.data);
    $("#id_municipio_residencia").html(r.data);
	});

}


function guardar_formulario() {
	$.ajax({
		url: BASE_URL+'guardar',
		type: 'POST',
		dataType: 'json',
		data: $("#formulario").serialize(),
	})
	.done(function(r) {
		console.log(r);
	});
}


function add_persona() {
  datos=$("#main-form").serialize();


	$.ajax({
		url: BASE_URL+'add_persona',
		type: 'POST',
		dataType: 'json',
		data: datos,
	})

	.done(function(r) {
		console.log(r);


	});
}



function get_all_personas(id) {
	$.ajax({
		url: BASE_URL+'get_all_personas',
		type: 'POST',
		dataType: 'json',
		data: {id:id},
	})
	.done(function(r) {
		$("#nombre").val(r.data.nombre);
		$("#documento").val(r.data.documento);
		$("#sexo").val(r.data.sexo);
    $("#municipio").val(r.data.nombre);
		$("#apellidos").val(r.data.apellidos);
		$("#sexo").val(r.data.sexo);

	});
}


function modificar_formulario() {
	const id = getParameterByName('q');
	$.ajax({
		url: BASE_URL+'modificar&id='+id,
		type: 'POST',
		dataType: 'json',
		data: $("#formulario").serialize(),
	})
	.done(function(r) {
		console.log(r);
	});
}
