import axios from "axios";
import { API_KEY, RSI_URL, BASE_URL} from "./config.mjs"; 

export async function searchApi(url) {
  try {
    const res = await axios.get(`https://${url}`);
    return res.data;
  } catch (err) {
    console.error(err.response?.status, err.message);
    throw err;
  }
}

export async function search_citizenApi(mot) {
  const retour = await axios.get(`${BASE_URL}${API_KEY}/${mot}`)
  .then(data => console.log(data));
}