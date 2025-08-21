import React from 'react'
import { IoIosInformationCircleOutline } from "react-icons/io";
import { FaPlay } from "react-icons/fa";

const VideoTitle = ({ title, overview }) => {
    return (
        <div className='pt-[20%] px-6 md:px-12 absolute text-white bg-gradient-to-tr from-black/80 via-black/30 to-transparent w-screen aspect-video'>
            <h1 className='text-lg md:text-6xl drop-shadow-md '>{title}</h1>
            <p className='hidden md:inline-block py-6 text-lg w-1/4 drop-shadow-md '>{overview}</p>

            <div className=''>
                <button className=' bg-white text-black my-2 md:my-0 py-2 px-3 md:py-3 md:px-12 text-lg  rounded-lg hover:bg-opacity-80 transition' >
                    <div className='flex align-middle items-center gap-1'>
                        <FaPlay />
                        Play
                    </div>
                </button>
                <button className=' hidden md:inline-block mx-2 bg-gray-500 text-white p-3 px-12 text-xl bg-opacity-50 rounded-lg hover:bg-opacity-80 transition' >
                    <div className=' flex items-center  gap-1 '>
                        <IoIosInformationCircleOutline />
                        More Info
                    </div>
                </button>
            </div>
        </div>
    )
}

export default VideoTitle