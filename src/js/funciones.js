const BASE_URL = 'http://localhost/desplazados-main/app/servicios.php?accion=';

jQuery(document).ready(function ($) {
  get_all_documentos();
  get_all_sexos();
  get_all_municipios();
});

function handlerSubmit(path, alertCallback) {
  const formData = $('#main-form').serialize();

  $.ajax({
    url      : BASE_URL + path,
    type     : 'POST',
    dataType : 'json',
    data     : formData,
    success  : () => alertCallback('good'),
    error    : () => alertCallback('bad'),
  });
}

function getDataById(path, id, callback) {
  $.ajax({
    url      : BASE_URL + path,
    type     : 'POST',
    dataType : 'json',
    data     : { id },
  }).done((res) => callback(res.data));
}

function deleteData(id, path, alertCallback) {
  $.ajax({
    url      : BASE_URL + path,
    type     : 'POST',
    dataType : 'json',
    data     : { id },
    success  : () => alertCallback('good'),
    error    : () => alertCallback('bad'),
  });
}

function get_all_documentos() {
  $.ajax({
    url: BASE_URL + 'get_all_documentos',
    type: 'POST',
    dataType: 'json',
    data: {},
  }).done(function (r) {
    $('#id_tipo_documento').html(r.data);
  });
}

function get_all_sexos() {
  $.ajax({
    url: BASE_URL + 'get_all_sexos',
    type: 'POST',
    dataType: 'json',
    data: {},
  }).done(function (r) {
    $('#id_sexo').html(r.data);
  });
}

function get_all_municipios() {
  $.ajax({
    url: BASE_URL + 'get_all_municipios',
    type: 'POST',
    dataType: 'json',
    data: {},
  }).done(function (r) {
    $('#id_municipio_nacimiento').html(r.data);
    $('#id_municipio_residencia').html(r.data);
  });
}
