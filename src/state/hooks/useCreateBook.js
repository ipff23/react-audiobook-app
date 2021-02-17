import { useState } from "react";
import axios from 'axios';

const client = axios.create({
    baseURL: `https://api.contentful.com/spaces/${process.env.REACT_APP_API_SPACE_ID}/environments/${process.env.REACT_APP_API_ENVIROMENT}`,
    headers: {
        Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
        'Content-Type': 'application/json',
        'X-Contentful-Content-Type': 'audiocontent-v12',
    },
});

const useCreateBook = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);


    const createData = async (inputs) => {
        setLoading(true);
        setError(null);


        const bodyRequest = `{
       
    "fields": {
      "title": {
        "es-MX": "${inputs.bookName}"
      },
      "is_original": {
        "es-MX": false
      },
      "street_date": {
        "es-MX": "2020-12-25T00:00-06:00"
      },
      "cost_per_play": {
        "es-MX": ${inputs.costPlay}
      },
      "authors": {
        "es-MX": [
          "${inputs.author}"
        ]
      },
      "narrators": {
        "es-MX": [
          "${inputs.narrators}"
        ]
      },
      "duration": {
        "es-MX": ${inputs.duration}
      },
      "cover": {
        "es-MX": "${inputs.cover}"
      }
    }

        
        }`

        try {
            const response = await client.post('/entries',bodyRequest);
            setData(response.data);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };


    return {
        data,
        error,
        loading,
        createData,
    };
};

export default useCreateBook;