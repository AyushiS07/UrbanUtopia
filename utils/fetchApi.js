import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
      'X-RapidAPI-Key': '36eea96517msh44d36a7afa03482p1567adjsn913452146e99'
    }
  });
    
  return data;
}

