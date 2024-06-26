import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(()=> {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(url);
        setData(response.data);
        setLoading(false)
      } catch (error) {
        setError(true) 
      }
      setLoading(false)
    };
    fetchData();
  }, [url]);


  const reFetch = async () => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      setData(response.data);
    } catch (error) {
      setError(true); 
    }
    setLoading(false);
  };

  return { data, loading, error, reFetch };
};

export default useFetch;