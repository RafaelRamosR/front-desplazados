const BASE_URL = 'http://localhost/desplazados-main/app/servicios.php?accion=';

/*jQuery(document).ready(() => {
  createSelect('get_all_documentos', 'id_tipo_documento');
  createSelect('get_all_sexos', 'id_sexo');
  createSelect('get_all_motivo_desplazamiento', 'id_motivo_desplazamiento');
  createSelect('get_all_municipios', 'id_municipio_nacimiento');
  createSelect('get_all_municipios', 'id_municipio_residencia');
  createSelect('get_all_municipios', 'id_municipio_desplazamiento');
  createSelect('get_all_personas_option', 'id_persona');
});
*/
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
  if (document.getElementById(selectId)) {
    $.ajax({
      url      : BASE_URL + path,
      type     : 'GET',
      dataType : 'json',
    }).done((res) => $(`#${selectId}`).html(res.data));
  }
}
