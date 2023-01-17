import React from 'react'
import { Grid } from '@mui/material'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { Box } from '@mui/system'
import { Link } from "react-router-dom";
import Navbar from '../Components/Navbar'

const Contact = () => {
    return (
        <div className='background min-h-screen lg:max-w-full ' id='contact'>
            <Navbar />
            <Grid justifyContent="center" alignItems="center" container sx={{
                minHeight: "100vh",
                width: "60%",
                margin: "auto",
            }}>
                <Grid item lg={10} md={12} sm={12} justifyContent="center" sx={{
                    height: "60vh",
                    display: "grid",
                    alignItems: "center",
                    direction: "column",
                }}>
                    <Typography variant='h5' >
                        <h1 className='text-white font-bold text-center'>
                            <span className='text-emerald-300 lg:text-md md:text-md sm:text-md text-center' >.04</span> What’s Next?</h1>
                    </Typography>

                    <Typography variant="h2" className="text-white text-center font-[1100] ">
                        <h1 className='bold lg:text-6xl md:text-5xl sm:text-3xl font-bold'>Get In Touch</h1>
                    </Typography>

                    <Typography variant='p font-semibold text-gray-400 block text-center sm:p-2'>
                        Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!
                    </Typography>

                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <Link to={"/resume"}>
                            <Button variant="outlined" className="  w-32 "  >
                                Say Hello
                            </Button>
                        </Link>
                    </Box>
                    
                </Grid>
                <Grid item lg={6} sx={{ height: "10vh" }}>
                    <Box sx={{ textAlign: "center" }}>
                        <Typography variant='p text-sm  text-gray-400'>
                            Created by Ali Hamza
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}

export default Contact
