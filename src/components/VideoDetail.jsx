


  import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import axios from "axios";

import { Videos2, Loader } from "./";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();
// console.log(videos)
  useEffect(() => {
    const options = {
      method: 'GET',
      url: `https://youtube-v31.p.rapidapi.com/videos?part=snippet,statistics&id=${id}`,
      params: {
        maxResults: '51'
      },
      headers: {
        'X-RapidAPI-Key': 'be56a98e0amsh6b1c249374fa5f2p1b4abfjsn82bcf6859fe4',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
      }
    };  
    axios.request(options).then(function (response) {
      setVideoDetail(response.data.items[0]);
    }).catch(function (error) {
      console.error(error);
    });
        
    const options2 = {
      method: 'GET',
      url: `https://youtube-v31.p.rapidapi.com/search?part=snippet&relatedToVideoId=${id}&type=video`,
      params: {
        maxResults: '51'
      },
      headers: {
        'X-RapidAPI-Key': 'be56a98e0amsh6b1c249374fa5f2p1b4abfjsn82bcf6859fe4',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
      }
    };  
    axios.request(options2).then(function (response) {
      setVideos(response.data.items);
    }).catch(function (error) {
      console.error(error);
    });
  }, [id]);

  if(!videoDetail?.snippet) return <Loader />;

  const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetail;

  return (
    <Box minHeight="95vh" sx={{background:'#000'}}>
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls />
            <Typography fontFamily='Acme' color="#fff" variant="h5" fontWeight="bold" p={2}>
              {title}
            </Typography>
            <Stack direction="row" justifyContent="space-between" sx={{ color: "#fff" }} py={1} px={2} >
              <Link to={`/channel/${channelId}`}>
                <Typography fontFamily='Acme' variant={{ sm: "subtitle1", md: 'h6' }}  color="#fff" >
                  {channelTitle}
                  <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography fontFamily='Acme' variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography fontFamily='Acme' variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box px={2} py={{ md: 1, xs: 5 }} justifyContent="center" alignItems="center" >
          <Videos2 videos={videos} direction="column" />
        
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
