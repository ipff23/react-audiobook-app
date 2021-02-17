import {useState} from "react";
import axios from 'axios';

const client = axios.create({
    baseURL: `https://api.contentful.com/spaces/${process.env.REACT_APP_API_SPACE_ID}/environments/${process.env.REACT_APP_API_ENVIROMENT}`,
    headers: {
        Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
        'Content-Type': 'application/json',
    },
});

const useDeleteBook = () => {
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const removeData = async (sysID) => {
        setLoading(true);
        setError(null);

        try {
            const response = await client.delete(`/entries/${sysID}`);
            setSuccess(response.status === 204);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    // useEffect(() => {
    //     removeData();
    //
    //     return () => {
    //         setSuccess(null);
    //         setError(null);
    //         setLoading(false);
    //     };
    // }, []);

    return {
        success,
        error,
        loading,
        removeData,
    };
};

export default useDeleteBook;