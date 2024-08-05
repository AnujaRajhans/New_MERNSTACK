import axios from "axios";
import React, { useEffect, useState } from "react";

const useProducts = (urlFromUser) => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true);
  const [error, setError] = useState(false);

  const fetchProducts = () => {
    console.log('Fetching products');
    try {
      axios.get(urlFromUser).then((res) => {
        setData(res.data);
        setLoader(false);
      });
    } catch(error) {
        setError(true);
        setLoader(false);
    }
  };

  useEffect(()=>fetchProducts(),[])

  return {data, loader, error,};
};

export default useProducts;