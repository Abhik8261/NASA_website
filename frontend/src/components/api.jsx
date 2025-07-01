

import axios from 'axios';
const BASE_URL=`http://localhost:5000/api`;
export const fetchApodData = (date) => {
  
   return  axios.get(`${BASE_URL}/apod?date=${date}`)
    
    
}

