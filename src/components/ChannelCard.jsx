import React from 'react';
import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Link } from 'react-router-dom';
import { demoProfilePicture } from '../utils/constants';

const ChannelCard = ({ chnl, marginTop }) => {  
    console.log(chnl)
  return (<Box
    sx={{
      boxShadow: 'none',
      borderRadius: '20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: { xs: '356px', md: '320px' },
      height: '326px',
      margin: 'auto',
      marginTop,
    }}
  >
    <Link to={`/channel/${chnl?.id?.channelId}`}>
      <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', color: '#fff' }}>
        <CardMedia     
          image={chnl?.snippet?.thumbnails?.high?.url || demoProfilePicture}
          alt={chnl?.snippet?.title}
          sx={{ borderRadius: '50%', height: '180px', width: '180px', mb: 2, border: '1px solid #e3e3e3' }}
        />
        <Typography fontFamily={'Acme'} variant="h6" fontWeight={'bold'}>
          {chnl?.snippet?.title}{' '}
          <CheckCircleIcon sx={{ fontSize: '14px', color: 'gray', ml: '5px' }} />
        </Typography >
        {chnl?.statistics?.subscriberCount && (
          <Typography sx={{ fontSize: '15px', fontWeight: 500, color: 'gray',fontFamily:'Acme' }}>
            {parseInt(chnl?.statistics?.subscriberCount).toLocaleString('en-US')} Subscribers
          </Typography>
        )}
      </CardContent>
    </Link>
  </Box>
);
        }

export default ChannelCard;