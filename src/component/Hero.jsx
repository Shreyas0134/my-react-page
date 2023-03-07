import React from 'react'
import Typewriter from 'typewriter-effect';


const Hero = () => {
    return (
        <div className=' text-white'>
            <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
                <p className='text-[#00df9a] text-xl sm:text-2xl md:text-4xl  font-bolt '>Growing With Data Analytics</p>
                <h1 className=' md:text-4xl sm:text-2xl text-lg font-bold md:py-4'>Grow With Data</h1>
                <div className='flex justify-center items-center'>
                    <p className=' md:text-2xl sm:text-xl py-2  font-bold'>Fast ,Flexible , Financing For</p>
                    <span className='md:text-xl sm:text-lg py-2 pl-2 text-md font-bold'>
                        <Typewriter
                            options={{

                                strings: ['BTB', 'BTC', 'SCSS'],
                                deleteSpeed: '150',
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Hero