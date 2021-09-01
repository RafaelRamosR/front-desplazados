import {
  createSelect,
  deleteDataService,
  handlerSubmit
} from './services/http.js';
import {
  initialState,
  insertCard,
  openForm,
} from './controllers/base.controller.js';

// De esto depende la app xd
const PATH = window.location.pathname.split('views/');
const CURRENT_PATH = PATH[PATH.length - 1].split('.')[0];

const $ = (e) => document.getElementById(e);
const cardList = $('card-list');
const btnForm = $('btn-form');
const mainForm = $('main-form');
const paginate = $('paginate');
const trash = $('trash');

// Arrastrar elementos
Sortable.create(cardList, {
  group: 'cardList',
  sort: false,
  onStart: () => trash.classList.add('trash-select'),
  onEnd: () => trash.classList.remove('trash-select'),
});

// Eliminar elementos
Sortable.create(trash, {
  group: 'cardList',
  onAdd: async (e) => {
    const id = e.item.dataset.id;
    deleteDataService(id, CURRENT_PATH);
    trash.removeChild(e.item);
    trash.classList.remove('trash-select');

    if (!cardList.childElementCount) {
      await initialState(CURRENT_PATH);
    }
  },
});

// Paginación
paginate.addEventListener('click', (event) => {
  if (event.target.value) {
    const value = event.target.value;
    insertCard(CURRENT_PATH, value - 5, value);
  }
});

// Agregar y modificar
mainForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const actionPath = mainForm[0].value ? 'updatePath' : 'createPath';
  await handlerSubmit(CURRENT_PATH, actionPath);
  await insertCard(CURRENT_PATH);
  openForm(true);
});

btnForm.addEventListener('click', openForm);
window.addEventListener('DOMContentLoaded', initialState(CURRENT_PATH));
window.addEventListener('load', () => {
  createSelect('get_all_documentos', 'id_tipo_documento');
  createSelect('get_all_sexos', 'id_sexo');
  createSelect('get_all_motivo_desplazamiento', 'id_motivo_desplazamiento');
  createSelect('get_all_municipios', 'id_municipio_nacimiento');
  createSelect('get_all_municipios', 'id_municipio_residencia');
  createSelect('get_all_municipios', 'id_municipio_desplazamiento');
  createSelect('get_all_personas_option', 'id_persona');
});
