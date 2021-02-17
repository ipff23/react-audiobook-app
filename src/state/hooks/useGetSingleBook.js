import { useState, useEffect } from "react";
import axios from "axios";

const client = axios.create({
  baseURL: `https://api.contentful.com/spaces/${process.env.REACT_APP_API_SPACE_ID}/environments/${process.env.REACT_APP_API_ENVIROMENT}`,
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
  },
});

const useGetSingleBook = ({ sysID }) => {
  const [bookData, setBookData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const getSingleData = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await client.get(
        `/entries?select=fields,sys.id,sys.version&locale=es-MX&sys.id=${sysID}`
      );
      if ((response.data.items).length > 0) {
        setBookData(response.data.items[0]);
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getSingleData();

      return () => {
        setBookData(null);
          setError(null);
          setLoading(false);
      };
  }, []);

  return {
    bookData,
    error,
    loading,
    getSingleData,
  };
};

export default useGetSingleBook;
