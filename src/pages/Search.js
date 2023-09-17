import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import serviceSearch from "../services/serviceSearch";

const Search = () => {
  const { search } = useLocation()
  const queryString = new URLSearchParams(search)
  const term = queryString.get('q')

  useEffect(() => {
    const response = serviceSearch(term)
  }, [term])

  return <h1>Resultado para a busca: { term }</h1>;
};

export default Search;
