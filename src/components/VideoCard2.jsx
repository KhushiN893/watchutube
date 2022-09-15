import React from 'react'
import { Typography,Card,CardContent,CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import {  demoVideoUrl,demoChannelTitle,demoVideoTitle,demoChannelUrl } from '../utils/constants'
const VideoCard2 = ({vido :{id:{videoId },snippet}}) => {
    // console.log(videoId,snippet)
  return (
    
    <Card sx={{width:{xs:'100%',sm:'100%' ,md:'262px'},boxShadow:'1px 1px 8px #FC712E',borderRadius:0,}}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl } >
        <CardMedia image={snippet?.thumbnails?.high?.url}
        alt={snippet?.title}
        sx={{width:{
            xs:'100%',
            sm:'100%',
            md:'262px'
        } ,height:{md:150,xs:200,sm:250}}} />
        </Link>
        <CardContent sx={{backgroundColor:'#1e1e1e',height:'88px'}}>
<Link to={videoId?`/video/${videoId}`:demoVideoUrl}>
    <Typography fontFamily='Acme' variant='subtitle1' fontWeight={'bold'} color={'#fff'}>
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
        </CardContent>
    </Card>
  )
}

export default VideoCard2