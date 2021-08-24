import { initialState, insertCard, openForm } from "./controllers/base.controller.js";
//import { delete_persona } from "./funciones.js";
const $ = (e) => document.getElementById(e);
const CURRENT_PATH = window.location.pathname.split('.view.html')[0].split('/')[3];
const cardList = $('card-list');
const paginate = $('paginate');
const btnForm = $('btn-form');
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
    delete_persona(e.item.dataset.id);
    trash.removeChild(e.item);
    trash.classList.remove('trash-select');

    if (!cardList.childElementCount) {
      await initialState(CURRENT_PATH);
    }
  }
});

paginate.addEventListener('click', (event) => {
  if (event.target.value) {
    const value = event.target.value;
    insertCard(CURRENT_PATH, value - 5, value);
  }
});

btnForm.addEventListener('click', openForm);
window.addEventListener('load', initialState(CURRENT_PATH));
