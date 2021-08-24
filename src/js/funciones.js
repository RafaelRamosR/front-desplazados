const BASE_URL = 'http://localhost/desplazados-main/app/servicios.php?accion=';

jQuery(document).ready(() => {
  createSelect('get_all_documentos', 'id_tipo_documento');
  createSelect('get_all_sexos', 'id_sexo');
  createSelect('get_all_motivo_desplazamiento', 'id_motivo_desplazamiento');
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

function createSelect(path, selectId) {
  $.ajax({
    url      : BASE_URL + path,
    type     : 'GET',
    dataType : 'json',
  }).done((res) => $(`#${selectId}`).html(res.data));
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
    $('#id_municipio_desplazamiento').html(r.data);

  });
}
