import React, { useCallback, useEffect, useState } from 'react'
import neo from '../assets/sideFun.png'
import download from '../assets/downlaod.svg'

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
        <div id="about" className='h-screen p-10 font-playpen overflow-x-hidden'>
            <div className="flex flex-col md:flex-row justify-between p-10 text-green-300">
                <div className='md:w-1/2 p-10 flex flex-col justify-between'>
                    <div className="intro p-2 mb-10 h-80 relative">
                        <h3 className="text-pink-800 text-xl p-2 relative">
                            <div className="mb-4">
                                <span className="text-blue-500 font-extrabold text-3xl">Hello,<br/> This is</span>
                                <span className="text-pink-500 font-extrabold text-5xl"> {aboutData.Name}</span>
                            </div>
                            <div className="mb-4">
                                <span className="text-blue-500 text-2xl">Education:</span>
                                <span className="text-pink-500 text-2xl"> {intro[1]}</span>
                            </div>
                            <div className="mb-4">
                                <span className="text-blue-500 text-2xl">Work Experience:</span>
                                <span className="text-pink-500 text-2xl"> {intro[0]}</span>
                            </div>
                            <div className="mb-4">
                                <span className="text-blue-500 text-2xl">Current Designation:</span>
                                <span className="text-pink-500 text-2xl"> {intro[2]}</span>
                            </div>
                        </h3>
                    </div>
                    <div className='w-fit pl-2 items-center'>
                        <a href='https://drive.google.com/file/d/1ozJP53JsYn8f32V-oGSF8GxVB7Ly9pRL/view?usp=sharing'
                            className='bg-pink-500 p-3 rounded-full flex gap-2 items-center font-comic text-xl text-white font-bold hover:bg-pink-700 transition-transform duration-300 transform hover:scale-110'
                            target="_blank" rel='noreferrer'>
                            Resume
                            <img src={download} alt="" className='h-6 w-6' />
                        </a>
                    </div>
                </div>
                <div className='flex items-center'>
  <img 
    src={neo} 
    alt="Neo" 
    className='w-[30vw]'
  />
</div>

            </div>
        </div>

    )
}

export default About
