import axios from 'axios';


export const getPlacesData = async (type,ne,sw) => {
  if(ne.lat || ne.lng || sw.lat || sw.lng){
    try {
      //console.log(ne.lat,ne.lng,sw.lat,sw.lng);
      const {data :{data}} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,{
        params: {
          bl_latitude: sw.lat,
          tr_latitude: ne.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
        },
        headers: {
          'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_TRAVEL_API_KEY ,
          'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
        }
      
      });
      return data;
    } catch (error) {
      console.log(error);
    }
  }
  
};
