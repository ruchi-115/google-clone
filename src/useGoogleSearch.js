import { useState, useEffect } from "react";
import API_KEY from "./keys";

const CONTEXT_KEY = "1f69f219a36c2cf46";
// Get your context key through this link: https://programmablesearchengine.google.com/cse/create/new
const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=
        ${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
      )
        .then((response) => response.json())
        .then((result) => {
          setData(result);
        });
    };
    fetchData();
  }, [term]);

  return { data };
};

export default useGoogleSearch;
