import React, { useCallback, useEffect, useState, useRef } from 'react'
import IsVisible from '../hooks/isVisible';
import PaintingBoy from '../assets/images/PaintingBoy.png'
import download from '../assets/svg/downlaod.svg'
import configLoader from '../utils/configLoader.js';

function BasicInfo({ aboutData }) {
    const personalInfo = configLoader.getPersonalInfo();
    const basicInfoData = configLoader.getBasicInfoSection();
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
    }, [aboutData])

    useEffect(() => {
        addTextAnimation();
    }, [addTextAnimation])


    return (
        <section ref={basicInfoRef} className='relative rounded-xl mx-4 sm:mx-6 md:mx-14 my-14 font-playpen overflow-hidden bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] border border-orange-400/20 shadow-2xl'>
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-orange-400/10 via-transparent to-transparent"></div>
            </div>

            <div className="relative z-10 flex flex-col lg:flex-row justify-between lg:space-fluid-lg md:space-fluid-md sm:space-fluid-sm md:px-12 lg:px-16 sm:px-0">
                <div className='w-full md:w-2/3 lg:w-1/2 space-fluid-sm sm:space-fluid-sm md:space-fluid-md lg:space-fluid-lg'>
                    <div className="flex flex-col">
                        {/* Main intro section */}
                        <div className="intro space-fluid-md mb-6 sm:mb-10">
                            <div className="space-y-8">
                                {/* Greeting with typing animation */}
                                <div className="mb-4 sm:mb-8">
                                    <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-6">
                                        <div className="w-1 h-8 sm:h-12 bg-gradient-to-b from-orange-400 to-orange-600 rounded-full"></div>
                                        <div>
                                            <h1 className="text-white font-bold text-xl sm:text-fluid-3xl leading-tight mb-2">
                                                Hello 👋,<br />
                                                <span className="whitespace-nowrap">I'm <span className="relative">
                                                    <span className="text-orange-400">{personalInfo.name}</span>
                                                    <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-transparent rounded-full"></div>
                                                </span></span>
                                            </h1>
                                        </div>
                                    </div>
                                    
                                    {/* Typing animation section */}
                                    <div className="ml-3 sm:ml-7 space-y-1 sm:space-y-3 [&>*]:space-y-1 sm:[&>*]:space-y-0">
                                        {intro.map((ele, index) => {
                                            let objectKey = Object.keys(ele)[0];
                                            return (
                                                <div className="flex flex-col sm:flex-row sm:items-center gap-0 sm:gap-2 mb-0.5 sm:mb-3" key={index}>
                                                    <span className="text-gray-300 text-xs sm:text-2xl font-sniglet leading-tight sm:leading-normal">{objectKey.replace('_', ' ')}:</span>
                                                    <span className="text-orange-400 text-xs sm:text-2xl font-sniglet font-medium leading-tight sm:leading-normal">{ele[objectKey]}</span>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* Enhanced resume button */}
                        <div className='flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4'>
                            <a href={personalInfo.resumeLink}
                                className='group relative bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 p-2 sm:p-4 md:p-5 rounded-lg sm:rounded-xl flex gap-2 sm:gap-3 items-center font-comic text-sm sm:text-fluid-lg text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-400/30 overflow-hidden w-fit'
                                target="_blank" rel='noreferrer'>
                                {/* Button shine effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                                
                                <span className="relative z-10">{basicInfoData.resumeButton.text}</span>
                                <img src={download} alt={basicInfoData.resumeButton.altText} className='relative z-10 h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 group-hover:rotate-12 transition-transform duration-300' />
                            </a>
                            
                            <div className="flex items-center gap-2 text-gray-400 text-xs sm:text-fluid-sm">
                                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                <span>Available for opportunities</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Enhanced image section */}
                <div className='flex items-center justify-center mt-8 lg:mt-0 lg:w-1/2'>
                    <div className="relative">
                        {/* Decorative elements */}
                        <div className="absolute -top-4 -right-4 w-8 h-8 border-2 border-orange-400/30 rounded-full"></div>
                        <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-orange-400/20 rounded-full"></div>
                        <div className="absolute top-1/2 -left-8 w-4 h-4 border border-orange-400/20 rotate-45"></div>
                        
                        {/* Main image with subtle glow */}
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-400/10 to-transparent rounded-full blur-3xl scale-110"></div>
                            <img
                                src={PaintingBoy}
                                alt="Nikhil Singh - Backend Developer"
                                className='relative z-10 w-full max-w-md md:max-w-lg lg:max-w-xl hover:scale-105 transition-transform duration-500'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>


    )
}

export default BasicInfo
