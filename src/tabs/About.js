import React, { useCallback, useEffect, useState } from 'react'
import neo from '../assets/neo.png'
import download from '../assets/downlaod.svg'
import matrixVideo from '../assets/matrix.mp4';
import matriximg from '../assets/matrix_bg.jpg'

function About({ aboutData }) {
    const [intro, setIntro] = useState(['', '', '', '']);

    const createTypingEffect = (myArray, i) => {
        setTimeout(() => {
            setIntro([...myArray])
        }, i * 200)
    }
    const addTextAnimation = useCallback(() => {
        let tempArray = ['', '', '', ''];
        for (let i = 0; i < 50; i++) {

            tempArray = [aboutData.Experience.substr(0, tempArray[0].length + 1),
            aboutData.Education.substr(0, tempArray[1].length + 1),
            aboutData.Current_Designation.substr(0, tempArray[2].length + 1),
            aboutData.Hobbies.substr(0, tempArray[3].length + 1)]

            createTypingEffect(tempArray, i)
        }
    })



    useEffect(() => {
        addTextAnimation();
    }, [])

    
    // style={{ backgroundImage: `url(${matriximg})` }}
    return (
        <div className='h-screen p-10 -z-50' >
            <div className="flex flex-col md:flex-row justify-between p-10 text-green-300">
                <div className='md:w-1/2 p-10 flex flex-col justify-between'>
                    <div className="intro shadoweffect1 border border-green-500 rounded-lg p-6 mb-10 shadow-lg h-80 relative overflow-hidden">
                        <video className="video-bg absolute inset-0 w-full h-full object-cover" src={matrixVideo} autoPlay loop muted />
                        <h3 className="text-green-300 text-xl font-mono p-4 shadow relative">

                            <div className="mb-4">
                                <span className="text-green-500">Hello, This is</span>
                                <span className="text-green-300"> <span className="text-red-800 font-bold">{aboutData.Name}</span></span>
                            </div>
                            <div className="mb-4">
                                <span className="text-green-500">Education:</span>
                                <span className="text-green-300"> {intro[1]}</span>
                            </div>
                            <div className="mb-4">
                                <span className="text-green-500">Work Experience:</span>
                                <span className="text-green-300"> {intro[0]}</span>
                            </div>
                            <div className="mb-4">
                                <span className="text-green-500">Current Designation:</span>
                                <span className="text-green-300"> {intro[2]}</span>
                            </div>
                            <div className="mb-4">
                                <span className="text-green-500">Hobbies:</span>
                                <span className="text-green-300"> {intro[3]}</span>
                            </div>
                        </h3>

                    </div>
                    <div className='flex flex-col md:flex-row gap-4 md:gap-10 items-center'>
                        <a href='https://drive.google.com/file/d/1ozJP53JsYn8f32V-oGSF8GxVB7Ly9pRL/view?usp=sharing' className='bg-green-500 p-2 rounded-lg flex gap-1 items-center font-mono text-xl text-white font-bold hover:bg-green-700' target="_blank" rel='noreferrer'>
                            <img src={download} alt="" className='h-4 w-4' />
                            Resume
                        </a>
                    </div>
                </div>
                <div className=''>
                    <img src={neo} alt="Neo" className='neo-image' />
                </div>
            </div>
        </div>
    )
}

export default About
