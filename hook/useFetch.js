import { useState, useEffect } from "react";
import axios from 'axios';
import PopularJobCard from "../components/common/cards/popular/PopularJobCard";

 
const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: 'https://jsearch.p.rapidapi.com/${endpoint}',
         headers: {
          'X-RapidAPI-Key': 'e8396f6f78msh0b86c586e0de753p193d31jsne0f6a10b1c09',
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        },
        params: { ...query },
      };

      const fetchData = async () => {
        setIsLoading(true);
        try {
            const response = await axios.request
            (options);

          setData(response.data.data);
          setIsLoading(false);
        } catch (error) {
            setError(error);
            alert('There is an error')

        }finally{
            setIsLoading(false);
        }
      }

      useEffect(() => {
        fetchData();
      }, []);

      const refetch = () => {
        setIsLoading(true);
        fetchData();
      }

      return { data, isLoading, error, refetch};
}
export default useFetch;