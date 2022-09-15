import React from 'react'
import { useState,useEffect } from 'react'
import {Box} from '@mui/material'
import { useParams } from 'react-router-dom'
import {Videos,ChannelCard} from './'
import axios from 'axios'

const ChannelDetail = () => {
  const [ChannelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([])
  const {id}=useParams()
  console.log(videos)
  useEffect(()=>{
    const options = {
      method: 'GET',
      url: `https://youtube-v31.p.rapidapi.com/channels?part=snippet&id=${id}`,
      params: {
        maxResults: '51'
      },
      headers: {
        'X-RapidAPI-Key': 'be56a98e0amsh6b1c249374fa5f2p1b4abfjsn82bcf6859fe4',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
      }
    };  
    axios.request(options)
    .then(function (response) {
      setChannelDetail(response.data?.items[0]);
    }).catch(function (error) {
      console.error(error);
    });

    const options2 = {
      method: 'GET',
      url: `https://youtube-v31.p.rapidapi.com/search?channelId=${id}&part=snippet%2Cid&order=date`,
      params: {
        maxResults: '51'
      },
      headers: {
        'X-RapidAPI-Key': 'be56a98e0amsh6b1c249374fa5f2p1b4abfjsn82bcf6859fe4',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
      }
    };  
    axios.request(options2)
    .then(function (response) {
      setVideos(response.data?.items);
    }).catch(function (error) {
      console.error(error);
    });
    }, [id])
  return (
    <Box minHeight={"95vh"} sx={{background:"#000"}}>
      <Box>
      <div style={{
        background: "linear-gradient(132deg, rgb(255, 0, 0) 0.00%, rgb(255, 213, 0) 100.00%)",
        zIndex:10,
        height:'150px'
      }}/>
      <ChannelCard chnl={ChannelDetail} marginTop={'-110px'}/>
    </Box>
    <Box display={'flex'} >
      <Videos videos={videos}/>    

    </Box>
    </Box>
  )
}

export default ChannelDetail