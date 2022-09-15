import React from 'react'
import { Stack,Box } from '@mui/material'
import {VideoCard,ChannelCard,Loader} from './'

const Videos = ({videos,direction}) => {
  console.log(videos)
    if(!videos?.length) return <Loader/>
  return (
    <Stack direction={direction ||'row'} flexWrap={"wrap"} justifyContent='center' gap={3}>
     { videos.map((item,idx) => (
        <Box key={idx}>
         {
          item.id.videoId && <VideoCard vido={item}/>}
        {
          item.id.channelId && <ChannelCard chnl={item}/>
         }
        </Box>
      ))}

    </Stack>
  )
}

export default Videos