import { globalConfig } from "../config/index.js";
import { getDataService } from '../services/http.js';

const fragment = document.createDocumentFragment();
const $ = (e) => document.getElementById(e);
const cardList = $('card-list');
const btnForm = $('btn-form');
const formContainer = $('form-container');
const trash = $('trash');

// public
const openForm = (isReset = false) => {
  btnForm.classList.toggle('rotate');
  formContainer.classList.toggle('active');
  if (isReset) document.forms['main-form'].reset();
};

// private
const initialDataForm = async (path, id) => {
  const completeForm = (data) => {
    const mainForm = document.forms['main-form'].elements;
    Object.keys(data).map(key => {
      if (mainForm[key]) {
        mainForm[key].value = data[key];
      }
    });
  }
  // funciones.js
  getDataById(path, id, completeForm);
};

// public
const createAlert = (responseType) => {
  const alertConfig = {
    bad: {
      icon: 'sad',
      msg: '!Upps¡ Ha sucedido un error.',
    },
    good: {
      icon: 'happy',
      msg: '¡Muy bien! Operación exitosa.'
    }
  };
  const alert = document.createElement('div');
  alert.className = `alert__content alert__content--${responseType} glass`;
  alert.innerHTML = `
    <p>${alertConfig[responseType].msg}</p>
    <img
      class="invert"
      src="../assets/images/svg/${alertConfig[responseType].icon}.svg"
      alt="${responseType} response"
      width="30"
      height="30"
    >
  `;
  fragment.appendChild(alert);
  trash.appendChild(fragment);
  setTimeout(() => trash.removeChild(alert), 3000);
}

// private
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

// private
const cardItemGenerate = (cadrItemData, apiData) => {
  return Object.entries(cadrItemData).map((data) => {
    const [key, value] = data;
    return `
      <div class="card-item">
        <h2 class="card-item__title">${value}</h2>
        <p class="card-item__content">${apiData[key]}</p>
      </div>
    `
  }).join('');
}

// public
const insertCard = async (view, start = 0, end = 5) => {
  try {
    // Insertar las tarjetas en la vista
    const data = await getDataService(view);
    const cadrItemData = globalConfig.cadrItemData[view];
    const insertData = data.slice(start, end).map((e, num) => {
      const cardItems = cardItemGenerate(cadrItemData, data[start]);
      return `
        <div class="card glass" data-id="${e.id}">
          <span class="card-number">${++start || ++num}</span>
          <div class="card-items">
            ${cardItems}
          </div>
        </div>
      `;
    });
    cardList.innerHTML = insertData.join('');

    // Evento para abrir el formulario y llenar los campos
    document
      .querySelectorAll('.card.glass')
      .forEach((e) => e.addEventListener('click', async () => {
        const id = e.getAttribute('data-id');
        await initialDataForm(globalConfig[view].readByIdPath, id);
        openForm();
      }));
    return data.length;
  } catch (error) {
    createAlert('bad');
  }
};

// public
const initialState = async (view) => {
  const cardLength = await insertCard(view);
  paginateGenerate(cardLength);
};

export {
  createAlert,
  initialState,
  insertCard,
  openForm,
}
