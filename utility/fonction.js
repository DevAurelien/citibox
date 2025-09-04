import axios from "axios";

export async function searchApi(url) {
  try {
    const res = await axios.get(`https://${url}`);
    return res.data;
  } catch (err) {
    console.error(err.response?.status, err.message);
    throw err;
  }
}