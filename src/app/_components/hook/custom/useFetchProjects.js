import axios from 'axios';
import React, { useState } from 'react'
import { GetProjectsApi } from '../../Apis/api';

const useFetchProjects = () => {
    const [allProjects, setAllProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
  
    const handleFetch = () => {
      setIsLoading(true);
      axios.get(`${GetProjectsApi}`)
        .then(function (response) {
          if (response.status === 200) {
            setAllProjects(response.data.data);
            setIsLoading(false);
          }
        })
        .catch(function (error) {
          setError(error);
          setIsLoading(false);
        });
    }
    return {allProjects,isLoading,error,handleFetch}
}

export { useFetchProjects}