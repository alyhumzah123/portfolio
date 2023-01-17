import React from 'react'
// import hamza from "../Pages/ali2.png"
import Navbar from '../Components/Navbar'
import { Typography } from '@mui/material'
import { useGlobalcontext } from '../Context'
const About = () => {

    const {fill} = useGlobalcontext()
    return (
        <div className='container-fluid  mx-auto  min-h-screen   pt-5 pb-10 background' id='about'>
            <Navbar />
            <div className=' gap-1 lg:w-8/12 md:ml-24 sm:ml-4   flex m-auto  lg:ml-24 pt-10 '>
                <p className='text-white lg:w-5/12 sm:w-full max-w-max lg:text-2xl sm:text-lg font-bold '><span className='text-emerald-500 text-lg'>01.</span> About Me</p>
                <div className='lg:w-4/12 md:w-4/12 sm:w-4/12 lg:ml-12 md:ml-12 sm:ml-4  border-t  mt-5  '></div>
            </div>

            {/* columns................. */}

            <div className='flex flex-wrap lg:w-full md:w-11/12 sm:w-11/12  lg:ml-0 md:ml-16 sm:ml-4   m-auto  mt-10 justify-center justify-around gap-5'>

                <div className=' lg:w-5/12 sm:w-full lg:pl-12 h-max  lg:mr-0  sm:w-full '>
                    <p className='pl-5 pt-5 pb-5 text-lg text-slate-300'>
                        <span className='text-emerald-500'>▸</span> I'm a Frontend Web Developer building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.
                    </p>
                    <p className='pl-5 pt-5 pb-5 text-lg text-slate-300'>
                        <span className='text-emerald-500'>▸</span> I also like sharing content related to the stuff that I have learned over the years in Web Development so it can help other people of the Dev Community. Feel free to Connect or Follow me on my Linkedin where I post useful content related to Web Development and Programming
                    </p>
                    <p className='pl-5 pt-5 pb-5 text-lg text-slate-300'>
                        <span className='text-emerald-500'>▸</span>   I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.
                    </p>
                    <p className='pl-5 pt-5 pb-5 text-lg text-slate-300'>
                        <span className='text-emerald-500'>▸</span>   I'm open to Job opportunities where I can contribute, learn and grow.
                    </p>
                </div>

                <div className=' lg:w-5/12 md:w-full sm:w-full h-full relative flex flex-wrap '>
                    <div className='w-full  flex'>
                        <Typography class=' text-white font-bold ml-0 w-full' variant='h3'>
                            <p className='text-emerald-500 tracking-widest'>Skills :</p>
                            <Typography className='font-normal flex flex-col justify-around ' variant='p'>
                                <p className='mt-4'>▸HTML CSS</p>
                                <div className='lg:w-[80%] md:w-[60%] sm:w-[60%] h-5   bg-white rounded-full relative'>
                                    <div  className={`${fill ? " h-full trans bg-emerald-500 rounded-full w-{asatet}" : ""}`}></div>
                                </div>  
                                <p className='mt-4'>▸JavaScrcipt</p>
                                <div className='lg:w-[80%] md:w-[60%] sm:w-[60%] h-5  rounded bg-white rounded-full relative'>
                                    <div className={`${fill ? " h-full bg-emerald-500 trans rounded-full w2" : ""}`}></div>
                                </div>
                                <p className='mt-4'>▸ReactJS</p>
                                <div className='lg:w-[80%] md:w-[60%] sm:w-[60%] h-5  rounded-full bg-white relative'>
                                    <div className={`${fill ? " h-full bg-emerald-500 trans rounded-full w3" : ""}`}></div>
                                </div>
                                <p className='mt-4'>▸JQuery</p>
                                <div className='lg:w-[80%] md:w-[60%] sm:w-[60%] h-5  rounded-full relative bg-white'>
                                    <div className={`${fill ? " h-full bg-emerald-500 trans rounded-full w1" : ""}`}></div>
                                </div>
                                <p className='mt-4'>▸Bootstrap</p>
                                <div className='lg:w-[80%] md:w-[60%] sm:w-[60%] h-5  rounded-full relative bg-white'>
                                    <div className={`${fill ? " h-full bg-emerald-500 trans rounded-full w4" : ""}`}></div>
                                </div>
                                <p className='mt-4'>▸Tailwind CSS</p>
                                <div className='lg:w-[80%] md:w-[60%] sm:w-[60%] h-5  rounded-full relative bg-white'>
                                    <div className={`${fill ? " h-full bg-emerald-500 trans rounded-full w4" : ""}`}></div>
                                </div>
                                <p className='mt-4'>▸Sass</p>
                                <div className='lg:w-[80%] md:w-[60%] sm:w-[60%] h-5  rounded-full relative bg-white'>
                                    <div className={`${fill ? " h-full bg-emerald-500 trans rounded-full w1" : ""}`}></div>
                                </div>
                                <p className='mt-4'>▸Material ui</p>
                                <div className='lg:w-[80%] md:w-[60%] sm:w-[60%] h-5  rounded-full relative bg-white'>
                                    <div className={`${fill ? " h-full bg-emerald-500 trans rounded-full w4" : ""}`}></div>
                                </div>
                            </Typography>
                        </Typography>
                        {/* <img className='w-12/12 p-2 sm:w-4/5 lg:ml-0   sm:ml-0 relative ml-10  rounded-md p-4 -b-2 -r-2 ' src={hamza} alt="" /> */}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About
