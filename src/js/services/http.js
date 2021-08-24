import { globalConfig } from '../config/index.js';
const API_URL = 'http://localhost/desplazados-main/app/servicios.php?accion=';

export const getDataService = async (path) => {
  try {
    const newPath = path.split('/')[1];
    const response = await fetch(
      `${API_URL}${globalConfig[newPath].getAllPath}`
    );
    const { data } = await response.json();
    return data;
  } catch (error) {
    throw Error(error);
  }
};

export const getByIdDataService = (path, id) => {
  try {
    const newPath = path.split('/')[1];
    const response = await fetch(
      `${API_URL}${globalConfig[newPath].getById}`,
      {
        method: 'POST',
        body: { id },
      }
    );
    return data;
  } catch (error) {
    throw Error(error);
  }
};
