import React from 'react';

const VideoTitle = ({ title, overview }) => {
    return (
        <div className='w-screen aspect-video pt-[20%] px-16 absolute text-white bg-gradient-to-r from-black'>
            <h1 className='text-2xl md:text-6xl font-bold'>{title}</h1>
            <p className='hidden md:inline-block py-6 text-lg w-4/12'>{overview}</p>
            <div className=''>
                <button className='bg-white text-black p-1 md:p-2 px-3 md:px-8 text-xl hover:bg-opacity-70 rounded-md font-semibold'>
                    ► Play
                </button>
                <button className='hidden md:inline-block mx-2 bg-gray-500 text-white p-2 px-8 text-xl hover:bg-opacity-70 bg-opacity-50 rounded-md font-semibold'>
                    ⓘ More Info
                </button>
            </div>
        </div>
    )
};

export default VideoTitle;
