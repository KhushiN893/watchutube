import React from 'react'
import { Typography,Card,CardContent,CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import {  demoVideoUrl,demoChannelTitle,demoVideoTitle,demoChannelUrl } from '../utils/constants'
const VideoCard = ({vido :{id:{videoId },snippet}}) => {
    // console.log(videoId,snippet)
  return (
    
    <Card sx={{width:{xs:'100%',sm:'270px' ,md:'262px'},boxShadow:'2px 2px 6px #FC712E',borderRadius:1,'&:hover':{boxShadow:'-2px -2px 6px #FC712E'}}}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl } >
        <CardMedia image={snippet?.thumbnails?.high?.url}
        alt={snippet?.title}
        sx={{
            width:{
                xs:'100%',
                sm:'270px',
                md:'262px'
            },height:150}} />
        </Link>
        <CardContent sx={{backgroundColor:'#1e1e1e',height:'88px'}}>
<Link to={videoId?`/video/${videoId}`:demoVideoUrl}>
    <Typography variant='subtitle1'  fontWeight={'bold'} color={'#fff'} fontFamily='Acme'>
        {
            snippet?.title.slice(0,60)||
            demoVideoTitle.slice(0,60)
        }
    </Typography>
</Link>
        
<Link to={snippet?.channelId?`/channel/${snippet?.channelId}`:demoChannelUrl}>
    <Typography fontFamily='Acme' variant='subtitle2' fontWeight={'bold'} color={'gray'}>
        {
            snippet?.channelTitle||
            demoChannelTitle
        }
        <CheckCircle sx={{fontSize:15,color:'gray',ml:'7px'}}/>

    </Typography>
</Link>
        </CardContent >
    </Card>
  )
}

export default VideoCard