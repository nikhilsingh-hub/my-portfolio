import React, { useCallback, useEffect, useState, useRef } from 'react'
import PaintingBoy from '../assets/images/PaintingBoy.png'
import download from '../assets/svg/downlaod.svg'
import configLoader from '../utils/configLoader.js';

function BasicInfo({ aboutData }) {
    const personalInfo = configLoader.getPersonalInfo();
    const basicInfoData = configLoader.getBasicInfoSection();
    const basicInfoRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [intro, setIntro] = useState([{ Experience: '' }, { Recent_Education: '' }, { College: '' }, { Current_Designation: '' }]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isDownloading, setIsDownloading] = useState(false);
    const [downloadSuccess, setDownloadSuccess] = useState(false);
    const [currentlyTyping, setCurrentlyTyping] = useState(new Set());

    // Custom intersection observer with 10% threshold
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 } // Trigger when 10% is visible
        );

        if (basicInfoRef.current) {
            observer.observe(basicInfoRef.current);
        }

        return () => {
            if (basicInfoRef.current) {
                observer.unobserve(basicInfoRef.current);
            }
        };
    }, []);

    const createTypingEffect = (myArray, i, typingFields = new Set()) => {
        setTimeout(() => {
            setIntro([...myArray]);
            setCurrentlyTyping(typingFields);
        }, i * 80) // Slightly faster typing effect
    }

    const addTextAnimation = useCallback(() => {
        if (!aboutData.Experience || !aboutData.Recent_Education || !aboutData.College || !aboutData.Current_Designation) {
            return;
        }

        // Start with empty values
        let tempArray = [{ Experience: '' }, { Recent_Education: '' }, { College: '' }, { Current_Designation: '' }];
        
        // Define the order and delays for typing each field
        const fields = [
            { key: 'Experience', text: aboutData.Experience, startDelay: 0 },
            { key: 'Recent_Education', text: aboutData.Recent_Education, startDelay: 15 },
            { key: 'College', text: aboutData.College, startDelay: 30 },
            { key: 'Current_Designation', text: aboutData.Current_Designation, startDelay: 45 }
        ];

        // Calculate total animation steps
        const maxSteps = Math.max(...fields.map(field => field.text.length + field.startDelay)) + 20;

        for (let step = 0; step <= maxSteps; step++) {
            // Track which fields are currently being typed
            const typingFields = new Set();
            
            // Update each field based on its individual progress
            const newArray = fields.map(field => {
                const fieldProgress = step - field.startDelay;
                if (fieldProgress <= 0) {
                    return { [field.key]: '' };
                }
                
                const currentLength = Math.min(fieldProgress, field.text.length);
                
                // Mark field as currently typing if it's not complete
                if (fieldProgress > 0 && currentLength < field.text.length) {
                    typingFields.add(field.key);
                }
                
                return { [field.key]: field.text.substr(0, currentLength) };
            });

            createTypingEffect(newArray, step, typingFields);
        }
    }, [aboutData])

    useEffect(() => {
        if (isVisible && !isLoaded) {
            setTimeout(() => {
                addTextAnimation();
                setIsLoaded(true);
            }, 500);
        }
    }, [isVisible, addTextAnimation, isLoaded])

    // Handle resume download with animation
    const handleDownloadResume = (e) => {
        e.preventDefault();
        setIsDownloading(true);
        
        // Simulate download process with animation
        setTimeout(() => {
            setIsDownloading(false);
            setDownloadSuccess(true);
            
            // Open the resume link
            window.open(personalInfo.resumeLink || 'https://drive.google.com/file/d/1ozJP53JsYn8f32V-oGSF8GxVB7Ly9pRL/view?usp=sharing', '_blank');
            
            // Reset success state after animation
            setTimeout(() => {
                setDownloadSuccess(false);
            }, 2000);
        }, 1500);
    }


    return (
        <section 
            ref={basicInfoRef} 
            className={`bg-[#1A1A1A] rounded-lg mx-2 sm:mx-4 md:mx-6 lg:mx-14 my-8 md:my-14 font-playpen overflow-hidden transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
            <div className="flex flex-col lg:flex-row justify-between p-4 sm:p-6 md:p-8 lg:p-12">
                    
                    {/* Content Section */}
                    <div className='w-full lg:w-1/2 space-y-4 sm:space-y-6 md:space-y-8'>
                        <div className="intro space-y-3 sm:space-y-4 md:space-y-6">
                            {/* Greeting Section */}
                            <div className={`transform transition-all duration-1000 delay-300 ${
                                isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                            }`}>
                                <div className="mb-4 sm:mb-6 space-y-2">
                                    <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                                        <div className="w-8 sm:w-10 md:w-12 h-0.5 sm:h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"></div>
                                        <span className="text-orange-400 text-xs sm:text-sm font-medium tracking-wider uppercase">
                                            Welcome
                                        </span>
                                    </div>
                                    <h1 className="text-white font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight">
                                        Hello 👋
                                        <br />
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600">
                                            I'm {aboutData.Name}
                                        </span>
                                    </h1>
                                </div>
                            </div>

                            {/* Animated Info Cards */}
                            <div className="space-y-2 sm:space-y-3 md:space-y-4">
                                {intro.map((ele, index) => {
                                    let objectKey = Object.keys(ele)[0];
                                    return (
                                        <div 
                                            key={index}
                                            className={`transform transition-all duration-700 ${
                                                isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                                            }`}
                                            style={{ transitionDelay: `${600 + index * 200}ms` }}
                                        >
                                            <div className="group p-3 sm:p-4 rounded-lg sm:rounded-xl md:rounded-2xl bg-gradient-to-r from-white/5 to-white/10 border border-white/10 hover:border-orange-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-orange-400/10">
                                                <div className="flex items-center gap-2 sm:gap-3">
                                                    <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-orange-400 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                                                    <span className="text-gray-300 text-xs sm:text-sm md:text-base lg:text-lg font-medium">
                                                        {objectKey.replace('_', ' ')}:
                                                    </span>
                                                </div>
                                                <div className="mt-1 ml-3 sm:ml-5">
                                                    <span className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-semibold">
                                                        {ele[objectKey]}
                                                        {/* Dynamic cursor based on typing state */}
                                                        {currentlyTyping.has(objectKey) ? (
                                                            <span className="inline-block w-0.5 h-3 sm:h-4 md:h-5 bg-orange-400 ml-1 animate-ping"></span>
                                                        ) : ele[objectKey] ? (
                                                            <span className="inline-block w-0.5 h-3 sm:h-4 md:h-5 bg-orange-400 ml-1 animate-pulse opacity-75"></span>
                                                        ) : (
                                                            <span className="inline-block w-0.5 h-3 sm:h-4 md:h-5 bg-gray-400 ml-1 animate-pulse opacity-50"></span>
                                                        )}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Enhanced Resume Button with Animation */}
                        <div className={`transform transition-all duration-700 delay-1000 ${
                            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
                        }`}>
                            <div className="relative group w-fit">
                                {/* Animated glow effect */}
                                <div className={`absolute -inset-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-xl sm:rounded-2xl blur opacity-25 group-hover:opacity-75 transition-all duration-300 ${
                                    isDownloading ? 'animate-pulse opacity-75' : ''
                                } ${downloadSuccess ? 'bg-gradient-to-r from-green-400 to-green-600' : ''}`}></div>
                                
                                <button 
                                    onClick={handleDownloadResume}
                                    disabled={isDownloading}
                                    className={`relative bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl flex items-center gap-2 sm:gap-3 font-bold text-sm sm:text-base md:text-lg text-white shadow-lg sm:shadow-xl hover:shadow-xl sm:hover:shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 disabled:cursor-not-allowed ${
                                        isDownloading ? 'scale-95 animate-pulse' : ''
                                    } ${downloadSuccess ? 'bg-gradient-to-r from-green-500 to-green-600 scale-110' : ''}`}
                                >
                                    {/* Button content with conditional rendering */}
                                    {isDownloading ? (
                                        <>
                                            <span>Preparing...</span>
                                            <div className="relative">
                                                <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                            </div>
                                        </>
                                    ) : downloadSuccess ? (
                                        <>
                                            <span>Opening Resume!</span>
                                            <div className="w-4 h-4 sm:w-5 sm:h-5 text-white">
                                                <svg viewBox="0 0 20 20" fill="currentColor" className="animate-bounce">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <span>Download Resume</span>
                                            <img 
                                                src={download} 
                                                alt="" 
                                                className={`h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 ${
                                                    isDownloading ? 'animate-bounce' : 'group-hover:rotate-12 group-hover:scale-110'
                                                }`} 
                                            />
                                        </>
                                    )}
                                    
                                    {/* Ripple effect on click */}
                                    <div className={`absolute inset-0 rounded-xl sm:rounded-2xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                                        isDownloading ? 'animate-ping opacity-30' : ''
                                    }`}></div>
                                    
                                    {/* Success particle effect */}
                                    {downloadSuccess && (
                                        <div className="absolute inset-0 pointer-events-none">
                                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                                <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
                                            </div>
                                            <div className="absolute top-1/4 right-1/4 transform">
                                                <div className="w-1 h-1 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                                            </div>
                                            <div className="absolute bottom-1/4 left-1/4 transform">
                                                <div className="w-1 h-1 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                            </div>
                                        </div>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className={`flex items-center justify-center mt-6 sm:mt-8 md:mt-10 lg:mt-0 w-full lg:w-1/2 transform transition-all duration-1000 delay-500 ${
                        isVisible ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-10 opacity-0 scale-95'
                    }`}>
                        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
                            <img
                                src={PaintingBoy}
                                alt="Developer illustration"
                                className='w-full h-auto'
                            />
                        </div>
                    </div>
                </div>
        </section>
    )
}

export default BasicInfo