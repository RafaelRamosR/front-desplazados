const BASE_URL = "http://localhost/desplazados-main/app/servicios.php?accion=";

jQuery(document).ready(function ($) {
  get_all_documentos();
  get_all_sexos();
  get_all_municipios();
});

function getParameterByName(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
  return results === null
    ? ""
    : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function getDataById(path, id, callback) {
  $.ajax({
    url: BASE_URL + path,
    type: "POST",
    dataType: "json",
    data: { id },
  }).done(function (res) {
    console.log(res)
    callback(res.data);
  });
}

function get_all_documentos() {
  $.ajax({
    url: BASE_URL + "get_all_documentos",
    type: "POST",
    dataType: "json",
    data: {},
  }).done(function (r) {
    $("#id_tipo_documento").html(r.data);
  });
}

function get_all_sexos() {
  $.ajax({
    url: BASE_URL + "get_all_sexos",
    type: "POST",
    dataType: "json",
    data: {},
  }).done(function (r) {
    $("#id_sexo").html(r.data);
  });
}

function get_all_municipios() {
  $.ajax({
    url: BASE_URL + "get_all_municipios",
    type: "POST",
    dataType: "json",
    data: {},
  }).done(function (r) {
    $("#id_municipio_nacimiento").html(r.data);
    $("#id_municipio_residencia").html(r.data);
  });
}

function add_persona() {
  const datos = $("#main-form").serialize();

  $.ajax({
    url: BASE_URL + "add_persona",
    type: "POST",
    dataType: "json",
    data: datos,
  })
  .done(function (r) {
    console.log(r);
  });
}

function modificar_formulario() {
  $.ajax({
    url: BASE_URL + "update_persona",
    type: "POST",
    dataType: "json",
    data: $("#main-form").serialize(),
  }).done(function (r) {
    console.log(r);
  });
}

function delete_data(id, path) {
  $.ajax({
    url: BASE_URL + path,
    type: "POST",
    dataType: "json",
    data: { id },
  })
  .done(function (r) {
    console.log(r);
  });
}
