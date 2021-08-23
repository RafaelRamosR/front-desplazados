import { getDataService } from '../services/http.js';

const $ = (e) => document.getElementById(e);
const fragment = document.createDocumentFragment();
const cardList = $('card-list');
const paginate = $('paginate');
const btnForm = $('btn-form');
const formContainer = $('form-container');
const trash = document.getElementById('trash');

const openForm = () => {
  btnForm.classList.toggle('rotate');
  formContainer.classList.toggle('active');
};

const paginateGenerate = (length) => {
  const limit = length / 5;
  let n = 0;
  let paginateRadio = '';
  while (n < limit) {
    n++;
    const isChecked = n === 1 ? 'checked' : '';
    paginateRadio += `
      <label>
        <input
          ${isChecked}
          class="pagination__radio"
          name="paginate"
          value="${n * 5}"
          type="radio"
        />
        <div class="pagination__design"></div>
      </label>
    `;
  }

  paginate.innerHTML = paginateRadio;
};

const insertCard = async (start = 0, end = 5) => {
  try {
    const data = await getDataService('/users');
    const insertData = data.slice(start, end).map((e, num) => {
      return `
        <div class="card glass" data-id="${e.id}">
          <span class="card-number">${++start || ++num}</span>
          <div class="card-items">
            <div class="card-item">
              <h2 class="card-item__title">Nombre completo</h2>
              <p class="card-item__content">${e.name}</p>
            </div>
            <div class="card-item">
              <h2 class="card-item__title">Residencia</h2>
              <p class="card-item__content">${e.address.city}</p>
            </div>
            <div class="card-item">
              <h2 class="card-item__title">Fecha de nacimiento</h2>
              <p class="card-item__content">${e.address.zipcode}</p>
            </div>
          </div>
        </div>
      `;
    });
    cardList.innerHTML = insertData.join('');
    document
      .querySelectorAll('.card.glass')
      .forEach((e) => e.addEventListener('click', () => {
        const id = e.getAttribute('data-id');
        openForm(id);
      }));
    return data.length;
  } catch (error) {
    const errorMessage = document.createElement('p');
    errorMessage.innerText = error;
    fragment.appendChild(errorMessage);
    cardList.appendChild(fragment);
  }
};

const initialState = async () => {
  const cardLength = await insertCard();
  paginateGenerate(cardLength);
};

// Eliminar elementos
Sortable.create(cardList, {
  group: 'cardList',
  sort: false,
  onStart: () => trash.classList.add('trash-select'),
  onEnd: () => trash.classList.remove('trash-select'),
});

Sortable.create(trash, {
  group: 'cardList',
  onAdd: async (e) => {
    console.log(e.item.dataset.id);
    trash.removeChild(e.item);
    trash.classList.remove('trash-select');

    if (!cardList.childElementCount) {
      await initialState();
    }
  }
});

paginate.addEventListener('click', (event) => {
  if (event.target.value) {
    const value = event.target.value;
    insertCard(value - 5, value);
  }
});

btnForm.addEventListener('click', openForm);
window.addEventListener('load', initialState);
