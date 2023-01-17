import { Grid } from '@mui/material'
import React, { useState, useRef } from 'react'
import Typography from '@mui/material/Typography';
import myvideo from "./video.mp4"
import Button from '@mui/material/Button';
import Navbar from '../Components/Navbar';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import g1 from "../Pages/g1.gif"
import g2 from "../Pages/g2.gif"
import g3 from "../Pages/g3.gif"
import g4 from "../Pages/g4.gif"
import g5 from "../Pages/g5.gif"
import g6 from "../Pages/g6.gif"


const Projects = () => {

  const videoRef = useRef(null)
  const [playing, setPlaying] = useState(false);


  const handler = (control) => {
    if (control === "play") {
      videoRef.current.play();
      setPlaying(true);
    } else if (control === "pause") {
      videoRef.current.pause();
      setPlaying(false);
    }
  };
  return (

    <>
      <div className='background min-h-screen p-1 ' id='projects' >
        <Navbar />
        {/* .................... */}
        <Grid sx={{}}>
          <Typography variant='h5' mt={5} sx={{ fontWeight: "bold", color: "white" }}
          ><h1 className="lg:ml-24 md:ml-24 sm:ml-4  ">
              <span className='text-xl text-emerald-300 '>.03</span> Some Things I’ve Built</h1>
          </Typography>
        </Grid>
        {/* .................... */}

        <Grid container sx={{
          width: "80%",
          minHeight: "60vh",
          margin: "auto",
          marginTop: "40px",
          paddingTop: "20px"
        }} >

          {/* video............ */}
          <Grid item lg={8} sx={{}}>
            <video ref={videoRef} src={myvideo}></video>

            {playing ? (
              <Button sx={{ marginTop: "10px" }} variant='contained' className='text-white p-5 '
                onClick={() => handler("pause")}

              >pause</Button>
            ) : (
              <Button class="bg-emerald-500 pl-4 pr-4 pt-1 pb-1 rounded mt-2 hover:bg-transparent border border-emerald-500 hover:text-emerald-500 hover:font-bold text-white" sx={{ marginTop: "10px" }} variant='contained' var className='text-white '
                onClick={() => handler("play")}
              >play</Button>
            )}
          </Grid>

          <Grid lg={4} sx={{}} >
            <div className='flex flex-col lg:ml-5 md:ml-0  sm:ml-0 h-96 justify-around ' >
              <p className='text-white '>→ Animations: (
                Parallax scrolling ,
                Loading animations ,
                Landing page animations ,
                Slider animations ,
                Color changing text animations ,
                Glow animations ,
                Slide-in animations , (click)
                Hover Animations ,
                Rotate Animations ,
                ) </p>
              <p className='text-white '>→ Form validation (formik)</p>
              <p className='text-white '>→ Responsive Websites (Using Bootstrap , Tailwind CSS , Material ui)</p>
              <p className='text-white '>→ Multipages Websites</p>
              <p className='text-white '>→ One Page Love [Single page websites (Using ReactJS) ]</p>
            </div>
          </Grid>
        </Grid>

        <Grid sx={{ width: "90%", margin: "auto", paddingTop: "5%", paddingBottom: "5%" }}>
          <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around", gap: "20px" }}>
            <div className='lg:w-96 md:w-96 sm:w-full '>
              <Card class='bg-transparent shadow-2xl rounded-2xl pb-5' sx={{ maxWidth: "100%", height: "100%", }}>
                <CardMedia className='g1 h-48 '
                  component="img"
                  alt="green iguana"
                  image={g1}

                />
                <CardContent>
                  <Typography className='text-emerald-500 ' gutterBottom variant="h5" component="div">
                    HTML CSS
                  </Typography>
                  <Typography class="text-slate-400" variant="body2">
                    I have done all most 100+ projects by using the HTML CSS ,Bootstrap in very short period of time. I have done some extra core concepts
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button class='hover:bg-emerald-500 border border-emerald-500 text-emerald-500 hover:text-white p-1 rounded' size="small" variant='outlined'>GitHub</Button>
                  <Button class='hover:bg-white hover:text-emerald-500 border border-emerald-500  bg-emerald-500 text-white p-1 rounded ' size="small" variant='outlined'>Live Demo</Button>
                </CardActions>
              </Card>
            </div>

            <div className='lg:w-96 md:w-96 sm:w-full'>
              <Card class='bg-transparent shadow-2xl rounded-2xl pb-5' sx={{ maxWidth: "100%", height: "100%" }}>
                <CardMedia className='g1'
                  component="img"
                  alt="green iguana"
                  height="140"
                  image={g2}
                />
                <CardContent>
                  <Typography className='text-emerald-500' gutterBottom variant="h5" component="div">
                    JavaScript
                  </Typography>
                  <Typography variant="body2" class="text-slate-400">
                    I have done all most 120+ projects by using pure Javascript ES6 and many more concepts in very short period of time.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button class='hover:bg-emerald-500 border border-emerald-500 text-emerald-500 hover:text-white p-1 rounded' size="small" variant='outlined'>GitHub</Button>
                  <Button class='hover:bg-white hover:text-emerald-500 border border-emerald-500  bg-emerald-500 text-white p-1 rounded ' size="small" variant='outlined'>Live Demo</Button>
                </CardActions>
              </Card>
            </div>

            <div className='lg:w-96 md:w-96 sm:w-full'>
              <Card class='bg-transparent shadow-2xl rounded-2xl pb-5' sx={{ maxWidth: "100%", height: "100%" }}>
                <CardMedia className='g1'
                  component="img"
                  alt="green iguana"
                  height="140"
                  image={g3}
                />
                <CardContent>
                  <Typography className='text-emerald-500' gutterBottom variant="h5" component="div">
                    Jquery
                  </Typography>
                  <Typography variant="body2" class="text-slate-400">
                    I have done all most 60+ projects by using JQuery library and many more in very short period of time.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button class='hover:bg-emerald-500 border border-emerald-500 text-emerald-500 hover:text-white p-1 rounded' size="small" variant='outlined'>GitHub</Button>
                  <Button class='hover:bg-white hover:text-emerald-500 border border-emerald-500  bg-emerald-500 text-white p-1 rounded ' size="small" variant='outlined'>Live Demo</Button>
                </CardActions>
              </Card>
            </div>

            <div className='lg:w-96 md:w-96 sm:w-full'>
              <Card class='bg-transparent shadow-2xl rounded-2xl pb-5' sx={{ maxWidth: "100%", height: "100%" }}>
                <CardMedia className='g1'
                  component="img"
                  alt="green iguana"
                  height="140"
                  image={g4}
                />
                <CardContent>
                  <Typography className='text-emerald-500' gutterBottom variant="h5" component="div">
                    ReactJs
                  </Typography>
                  <Typography variant="body2" class="text-slate-400">
                    I have done 50+ projects by using REACT ( ReactBootstrap, Tailwindcss). Also hands on experience with different core concepts of React ( States, Routing, Hooks, Redux) .
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button class='hover:bg-emerald-500 border border-emerald-500 text-emerald-500 hover:text-white p-1 rounded' size="small" variant='outlined'>GitHub</Button>
                  <Button class='hover:bg-white hover:text-emerald-500 border border-emerald-500  bg-emerald-500 text-white p-1 rounded ' size="small" variant='outlined'>Live Demo</Button>
                </CardActions>
              </Card>
            </div>

            <div className='lg:w-96 md:w-96 sm:w-full'>
              <Card class='bg-transparent shadow-2xl rounded-2xl pb-5' sx={{ maxWidth: "100%", height: "100%" }}>
                <CardMedia className='g1'
                  component="img"
                  alt="green iguana"
                  height="140"
                  image={g5}
                />
                <CardContent>
                  <Typography className='text-emerald-500' gutterBottom variant="h5" component="div">
                    NodeJS
                  </Typography>
                  <Typography variant="body2" class="text-slate-400">
                    I have done all most 30+ projects by using pure Node.js framework and also create RESTful API's. I store data in a database by using SQL and NoSQl databases.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button class='hover:bg-emerald-500 border border-emerald-500 text-emerald-500 hover:text-white p-1 rounded' size="small" variant='outlined'>GitHub</Button>
                  <Button class='hover:bg-white hover:text-emerald-500 border border-emerald-500  bg-emerald-500 text-white p-1 rounded ' size="small" variant='outlined'>Live Demo</Button>
                </CardActions>
              </Card>
            </div>

            <div className='lg:w-96 md:w-96 sm:w-full  h-88 rounded-3xl '>
              <Card class='bg-transparent shadow-2xl rounded-2xl pb-5' className='rounded-3xl' sx={{ maxWidth: "100%", height: "100%" }}>
                <CardMedia className='g1 '
                  component="img"
                  alt="green iguana"
                  height="140"
                  image={g6}
                />
                <CardContent>
                  <Typography className='text-emerald-500' gutterBottom variant="h5" component="div">
                    MERN Stack
                  </Typography>
                  <Typography variant="body2" class="text-slate-400">
                    I have done 20+ big projects by using FrontEnd React.js backend Node.js and store it in MongoDB. I handled MVC workflow of the projects.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button class='hover:bg-emerald-500 border border-emerald-500 text-emerald-500 hover:text-white p-1 rounded ' size="small" variant='outlined'>GitHub</Button>
                  <Button class='hover:bg-white hover:text-emerald-500 border border-emerald-500  bg-emerald-500 text-white p-1 rounded ' size="small" variant='outlined'>Live Demo</Button>
                </CardActions>
              </Card>
            </div>
          </Box>
        </Grid>
      </div>
    </>
  )
}

export default Projects
