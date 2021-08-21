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
		$("#tipo_documentos").html(r.data);
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
		$("#sexos").html(r.data);
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
		$("#municipios_n").html(r.data);
    $("#municipios_r").html(r.data);
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
	$.ajax({
		url: BASE_URL+'add_persona()',
		type: 'POST',
		dataType: 'json',
		data: {},
	})
	.done(function(r) {
		$("#recibe_data").html(r.data);
	});
}



function get_persona(id) {
	$.ajax({
		url: BASE_URL+'get_persona',
		type: 'POST',
		dataType: 'json',
		data: {id:id},
	})
	.done(function(r) {
		$("#nombre").val(r.data.nombre);
		$("#apellido").val(r.data.apellido);
		$("#celular").val(r.data.celular);

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
