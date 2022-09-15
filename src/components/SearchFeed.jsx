import React,{useEffect,useState} from 'react'
import { Typography,Box } from '@mui/material'
import {Videos} from './'
import axios from "axios";
import { useParams } from 'react-router-dom';
const SearchFeed = () => {
  const [videos, setVideos] = useState([])
  const {searchTerm} = useParams();
  
  useEffect(() => {
  const options = {
    method: 'GET',
    url: `https://youtube-v31.p.rapidapi.com/search?part=snippet&q=${searchTerm}`,
    params: {
      maxResults: '51'
    },
    headers: {
      'X-RapidAPI-Key': 'be56a98e0amsh6b1c249374fa5f2p1b4abfjsn82bcf6859fe4',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };  
  axios.request(options).then(function (response) {
    setVideos(response.data.items);
  }).catch(function (error) {
    console.error(error);
  });
  }, [searchTerm])
  
  return (  
      <Box p={2} sx={{overflowY:'auto',height:'90vh' ,flex:2,background:"#000"}}>
        <Typography textAlign={'center'} fontFamily='Acme' variant='h5' fontWeight={'bold'} mb={2} sx={{color:'white'}}>
     Showing Result for : <span style={{color:'#FC712E'}}>{searchTerm}</span> 
        </Typography>
        <Videos videos={videos}/>
      </Box>
  )
}

export default SearchFeed