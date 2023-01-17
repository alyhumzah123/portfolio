import React from 'react'
import Navbar from './Navbar'
// import Navbar from "../Components/Navbar"

const Header = () => {
    return (

        <>
            {/* <Navbar/> */}
            <div className='columns-1 w-11/12    min-h-max  lg:ml-28 md:ml-28 sm:ml-8 mt-8  flex flex-col justify-around pr-10'>
                <p className='text-emerald-500 pt-5'>Hi , my name is</p>
                <h1 className='lg:text-7xl  lg:max-w-3xl md:max-w-lg   md:text-6xl sm:text-4xl font-bold text-white pt-10'>Ali Hamza</h1>
                <h1 className='lg:text-7xl  md:text-6xl sm:text-4xl font-bold text-gray-200 pt-10 '>I build things for the web.</h1>
                <p className='lg:w-5/12 md:w-8/12 sm:w-11/12   text-base text-slate-200 pt-5 pb-10 '>I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at Upstatement.</p>
                <div className='sm:pb-10'>
                    <button class="w-3/12 md:w-3/12 sm:w-5/12 sm:flex-Nowrap md:text-1xl sm:text-sm h-0/6 bg-transparent  hover:bg-emerald-500 text-cyan-700 font-semibold md:text-sm hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                        Courses
                    </button>
                </div>
            </div>
        </>
    )
}

export default Header
