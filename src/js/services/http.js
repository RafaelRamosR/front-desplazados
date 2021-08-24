import { globalConfig } from "../config/index.js";
const API_URL = 'http://localhost/desplazados-main/app/servicios.php?accion=';

export const getDataService = async (path) => {
  try {
    const newPath = path.split('/')[1];
    const response = await fetch(`${API_URL}${globalConfig[newPath].getAllPath}`);
    const { data } = await response.json();
    console.log(data)
    return data;
  } catch (error) {
    console.log(error,newPath,globalConfig[newPath])


    throw Error(error);
  }
}
