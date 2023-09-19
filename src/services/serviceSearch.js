import axios from "axios";

const serviceSearch = async ( term ) => {
  const response = await axios.get(`https://server-brastemp.vercel.app/api/products/search/${term}`)
  return response
};

export default serviceSearch;