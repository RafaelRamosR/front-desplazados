import { globalConfig } from '../config/index.js';
import { createAlert } from "../controllers/base.controller.js";
const API_URL = 'http://localhost/desplazados-main/app/servicios.php?accion=';

export const getDataService = async (path) => {
  try {
    const response = await fetch(
      `${API_URL}${globalConfig[path].readAllPath}`
    );
    const { data } = await response.json();
    return data;
  } catch (error) {
    throw Error(error);
  }
};

export const getByIdDataService = async (path, id) => {
  try {
    console.log(path)
    const form = new FormData();
    form.append('id', id);
    const response = await fetch(
      `${API_URL}${globalConfig[path].readByIdPath}`,
      {
        method: 'POST',
        body:  form,
      }
    );
    const { data } = await response.json();
    return data;
  } catch (error) {
    throw Error(error);
  }
};

export const deleteDataService = async (id, path) => {
  try {
    const sendData = new FormData();
    sendData.append('id', id);
    const response = await fetch(
      `${API_URL}${globalConfig[path].deletePath}`,
      {
        method: 'POST',
        body: sendData,
      }
    );

    if (response.ok) {
      createAlert('good');
    }
  } catch (error) {
    createAlert('bad');
  }
};

export const createSelect = async (path, selectId) => {
  try {
    const inputSelect = document.getElementById(selectId);
    if (inputSelect) {
      const response = await fetch(
        `${API_URL}${path}`
      );
      const { data } = await response.json();
      inputSelect.innerHTML = data;
    }
  } catch (error) {
    console.log(`Hubo un error: ${error}. Esto debería ser un logger.`);
  }
};

export const handlerSubmit = async (path, actionPath) => {
  try {
    const formData = new FormData(document.getElementById('main-form'));
    const response = await fetch(
      `${API_URL}${globalConfig[path][actionPath]}`,
      {
        method: 'POST',
        body: formData,
      }
    );

    if (response.ok) {
      createAlert('good');
    }
  } catch (error) {
    createAlert('bad');
  }
};
