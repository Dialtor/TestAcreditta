import axios from 'axios'
import { useEffect, useState } from 'react';

export const useAxiosGet = (url) => {
    const [response, setResponse] = useState([]);
    const [error, setError] = useState('');
    const [loading, setloading] = useState(true);

    const fetchData = () => {
        axios
            .get(url)
            .then((res) => {
                setResponse(res.data);
            })
            .catch((err) => {
                setError(err);
            })
            .finally(() => {
                setloading(false);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    // custom hook returns value
    return [response, error, loading];
};