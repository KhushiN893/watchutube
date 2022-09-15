import React,{useEffect,useState} from 'react'
import { Stack,Typography,Box } from '@mui/material'
import {SideBar,Videos} from './'
//import { fetchFromAPI} from '../utils/fetchFromAPI'
import axios from "axios";
const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New")
  const [videos, setVideos] = useState([])
  
  useEffect(() => {
  const options = {
    method: 'GET',
    url: `https://youtube-v31.p.rapidapi.com/search?part=snippet&q=${selectedCategory}`,
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
  }, [selectedCategory])
  
  
  return (
    <Stack sx={{flexDirection:{sx:"column",md:"row"},background:"#000"}}>

      <Box sx={{height:{sx:"auto",md:"92vh"},background:"#000" ,borderRight:'2px solid #3d3d3d',px:{sx:0,md:2}}}>
       <SideBar
       selectedCategory={selectedCategory}
       setSelectedCategory={setSelectedCategory}/>
            </Box>

      <Box p={2} sx={{overflowY:'auto',height:'90vh' ,flex:4}}>
        <Typography variant='h4' fontFamily={'Acme'} fontWeight={'bold'} mb={2} sx={{color:'white' , textAlign:'center'}}>
       {selectedCategory} <span style={{color:'#f29024'}}>Videos</span>
        </Typography>
        <Videos videos={videos}/>
      </Box>

    </Stack>
  )
}

export default Feed