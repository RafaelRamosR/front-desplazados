const API_URL = 'https://jsonplaceholder.typicode.com';

export const getDataService = async (path) => {
  try {
    const response = await fetch(`${API_URL}${path}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw Error(error);
  }
}
