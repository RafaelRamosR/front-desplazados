import { globalConfig } from '../config/index.js';
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
