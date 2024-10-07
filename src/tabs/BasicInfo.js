import React, { useCallback, useEffect, useState, useRef } from 'react'
import IsVisible from '../hooks/isVisible';
import PaintingBoy from '../assets/images/PaintingBoy.png'
import download from '../assets/svg/downlaod.svg'

function BasicInfo({ aboutData }) {
    const basicInfoRef = useRef(null);
    const isVisible = IsVisible(basicInfoRef);
    const [intro, setIntro] = useState([{ Experience: '' }, { Recent_Education: '' }, { College: '' }, { Current_Designation: '' }]);

    const createTypingEffect = (myArray, i) => {
        setTimeout(() => {
            setIntro([...myArray])
        }, i * 200)
    }

    const addTextAnimation = useCallback(() => {
        let tempArray = [{ Experience: '' }, { Recent_Education: '' }, { College: '' }, { Current_Designation: '' }];
        for (let i = 0; i < 50; i++) {

            tempArray = [{ Experience: aboutData.Experience.substr(0, tempArray[0]['Experience'].length + 1) },
            { Recent_Education: aboutData.Recent_Education.substr(0, tempArray[1]['Recent_Education'].length + 1) },
            { College: aboutData.College.substr(0, tempArray[2]['College'].length + 1) },
            { Current_Designation: aboutData.Current_Designation.substr(0, tempArray[3]['Current_Designation'].length + 1) }]

            createTypingEffect(tempArray, i)
        }
    })



    useEffect(() => {
        addTextAnimation();
    }, [])

    return (
        <section ref={basicInfoRef} className='rounded-lg mx-4 sm:mx-6 md:mx-14 my-14 font-playpen overflow-x-hidden bg-[#1A1A1A]'>
            <div className="flex flex-col lg:flex-row justify-between pt-5 pb-5 md:p-10">
                <div className='lg:w-1/2 pt-5 pb-5 sm:p-5'>
                    <div className="flex flex-col">
                        <div className="intro p-2 mb-10 h-auto lg:h-80">
                            <h3 className="p-2 relative">
                                <div className="mb-4">
                                    <span className="text-white font-extrabold text-xl md:text-3xl">Hello,<br /> This is</span>
                                    <span className="text-orange-400 font-extrabold text-2xl md:text-5xl"> {aboutData.Name}</span>
                                </div>
                                {intro.map((ele, index) => {
                                    let objectKey = Object.keys(ele)[0];
                                    return (
                                        <div className="mb-4" key={index}>
                                            <span className="text-white text-sm md:text-2xl font-sniglet">{objectKey.replace('_', ' ')}:</span>
                                            <span className="text-orange-400 text-sm md:text-2xl font-sniglet"> {ele[objectKey]}</span>
                                        </div>
                                    );
                                })}
                            </h3>
                        </div>
                        <div className='w-fit pl-2 items-center'>
                            <a href='https://drive.google.com/file/d/1ozJP53JsYn8f32V-oGSF8GxVB7Ly9pRL/view?usp=sharing'
                                className='bg-orange-400 p-2 md:p-3 rounded-full flex gap-2 items-center font-comic text-lg md:text-xl text-white font-bold hover:bg-orange-500 transition-transform duration-300 transform hover:scale-110'
                                target="_blank" rel='noreferrer'>
                                Resume
                                <img src={download} alt="" className='h-5 w-5 md:h-6 md:w-6' />
                            </a>
                        </div>
                    </div>
                </div>
                <div className='flex items-center mt-8 lg:mt-0'>
                    <img
                        src={PaintingBoy}
                        alt="PaintingBoy"
                        className='w-full md:w-[45vw] lg:w-[35vw]'
                    />
                </div>
            </div>
        </section>


    )
}

export default BasicInfo
