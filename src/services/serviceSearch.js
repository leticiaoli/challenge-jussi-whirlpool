import axios from "axios";

const serviceSearch = async ( {term} ) => {
  const response = await axios.get(`http://localhost:4000/search/geladeira`)
  return response
};

export default serviceSearch;