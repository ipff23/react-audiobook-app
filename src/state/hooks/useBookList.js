import {useEffect, useState} from "react";
import axios from 'axios';

const client = axios.create({
  baseURL: `https://api.contentful.com/spaces/${process.env.REACT_APP_API_SPACE_ID}/environments/${process.env.REACT_APP_API_ENVIROMENT}`,
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
    'Content-Type': 'application/json',
    'X-Contentful-Content-Type': 'audiocontent-v12',

  },
});

const useBookList = (query = "") => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState(query);
  const [refresh, setRefresh] = useState('')


  const fetchData = async (searchData) => {
    setLoading(true);
    setError(null);

    try {
      // `/entries?query=${query}&select=fields,sys.id&locale=es-MX`
      const queryValue = searchData.trim() === '' ? '' : `&query=${searchData}`
      const url = '/entries?locale=es-MX&content_type=audiocontent-v12&select=fields,sys.id,sys.version' + queryValue

      const response = await client.get(url);
      setData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(search);

    return () => {
      setData(null);
      setError(null);
      setLoading(false);
    };
  }, [search, refresh]);

  return {
    data,
    error,
    loading,
    setSearch,
    setRefresh,
    fetchData,
  };
};

export default useBookList;