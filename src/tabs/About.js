import React, { useCallback, useEffect, useState } from 'react'
import neo from '../assets/Me_typing.png'
import download from '../assets/downlaod.svg'

function About({ aboutData }) {
    const [intro, setIntro] = useState([{Experience:''}, {Recent_Education:''}, {College:''}, {Current_Designation:''}]);

    const createTypingEffect = (myArray, i) => {
        setTimeout(() => {
            setIntro([...myArray])
        }, i * 200)
    }

    const addTextAnimation = useCallback(() => {
        let tempArray = [{Experience:''}, {Recent_Education:''}, {College:''}, {Current_Designation:''}];
        for (let i = 0; i < 50; i++) {

            tempArray = [{Experience: aboutData.Experience.substr(0, tempArray[0]['Experience'].length + 1)},
            {Recent_Education:aboutData.Recent_Education.substr(0, tempArray[1]['Recent_Education'].length + 1)},
            {College:aboutData.College.substr(0, tempArray[2]['College'].length + 1)},
            {Current_Designation:aboutData.Current_Designation.substr(0, tempArray[3]['Current_Designation'].length + 1)}]

            createTypingEffect(tempArray, i)
        }
    })



    useEffect(() => {
        addTextAnimation();
    }, [])

    return (
        <section id="about" className='h-screen p-10 font-playpen overflow-x-hidden bg-[#1A1A1A]'>
            <div className="flex flex-col md:flex-row justify-between p-10">
                <div className='md:w-1/2 p-10 flex flex-col justify-between'>
                    <div className="intro p-2 mb-10 h-80 relative">
                        <h3 className="p-2 relative">
                            <div className="mb-4">
                                <span className="text-white font-extrabold text-3xl">Hello,<br /> This is</span>
                                <span className="text-orange-400 font-extrabold text-5xl"> {aboutData.Name}</span>
                            </div>
                            {
                                intro.map((ele, index) => {
                                        let objectKey = Object.keys(ele)[0]
                                        return <div className="mb-4" key={index}>
                                            <span className="text-white text-2xl">{objectKey.replace('_',' ')}:</span>
                                            <span className="text-orange-400 text-2xl"> { ele[objectKey]}</span>
                                        </div>
                                })
                            }
                        </h3>
                    </div>
                    <div className='w-fit pl-2 items-center'>
                        <a href='https://drive.google.com/file/d/1ozJP53JsYn8f32V-oGSF8GxVB7Ly9pRL/view?usp=sharing'
                            className='bg-orange-400 p-3 rounded-full flex gap-2 items-center font-comic text-xl text-white font-bold hover:bg-orange-500 transition-transform duration-300 transform hover:scale-110'
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
                        className='w-[40vw]'
                    />
                </div>

            </div>
        </section>

    )
}

export default About
