import React, { useCallback, useState, useEffect, useRef } from 'react'
import emailjs from 'emailjs-com';
import email from '../assets/svg/email@.svg'
import { useForm } from "react-hook-form"
import addressIcon from '../assets/svg/addressIcon.svg'
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import configLoader from '../utils/configLoader.js';

function Contact({ siteLinks, myEmailId, myAddress }) {
    const contactSection = configLoader.getContactSection();
    const contactRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [isFocused, setIsFocused] = useState({ namefield: false, emailfield: false, messagefield: false })
    const [buttonText, setButtonText] = useState('Send Message')
    const [isSubmitting, setIsSubmitting] = useState(false)

    // Custom intersection observer with 10% threshold
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (contactRef.current) {
            observer.observe(contactRef.current);
        }

        return () => {
            if (contactRef.current) {
                observer.unobserve(contactRef.current);
            }
        };
    }, []);

    const handleFocus = (field) => {
        setIsFocused((prev) => ({
            ...prev,
            [field]: true
        }));
    };

    const handleBlur = (field) => {
        setIsFocused((prev) => ({
            ...prev,
            [field]: false
        }));
    };

    const { register, handleSubmit, formState: { errors }, reset, } = useForm();

    const sendEmailFunction = useCallback((data) => {
        setIsSubmitting(true);
        setButtonText('Sending...');

        const templateParams = {
            to_name: contactSection.emailRecipient,
            from_name: data.name,
            contact_info: data.email,
            message: data.body,
        };

        emailjs.send(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            templateParams,
            process.env.REACT_APP_PUBLIC_KEY,
        )
            .then((result) => {
                toast.success('🚀 Email successfully sent!', {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
                setButtonText('Sent Successfully!');
                setTimeout(() => setButtonText('Send Message'), 3000);
            })
            .catch((error) => {
                toast.error('❌ Failed to send email. Please try again.', {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
                setButtonText('Send Message');
            })
            .finally(() => {
                setIsSubmitting(false);
                reset();
            });

    }, [contactSection.emailRecipient, reset])


    return (
        <section 
            ref={contactRef}
            id="contactme" 
            className={`bg-[#1A1A1A] rounded-lg mx-4 md:mx-14 my-10 md:my-32 overflow-hidden transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
            <div className="p-6 md:p-8 lg:p-12">
                {/* Section Header */}
                <div className={`flex justify-end items-center gap-4 mb-8 md:mb-12 transform transition-all duration-1000 delay-300 ${
                    isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                }`}>
                    <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent to-orange-400/50 rounded-full"></div>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 font-playpen">
                        Contact Me
                    </h2>
                </div>

                <div className='flex flex-col lg:flex-row gap-8 md:gap-12'>
                    {/* Contact Form */}
                    <div className={`w-full lg:w-1/2 transform transition-all duration-1000 delay-500 ${
                        isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                    }`}>
                        <div className='relative'>
                            {/* Form container */}
                            <div className='bg-gradient-to-br from-white/5 to-white/10 border border-orange-400/30 rounded-2xl p-6 md:p-8 backdrop-blur-sm'>
                                <div className="mb-6">
                                    <h3 className='text-orange-400 font-bold font-playpen text-xl md:text-2xl mb-2'>Let's Connect!</h3>
                                    <p className='text-gray-300 font-sniglet'>Feel free to reach out for collaborations or just a friendly hello.</p>
                                </div>
                                
                                <form onSubmit={handleSubmit(sendEmailFunction)} className='flex flex-col gap-6'>
                                    {/* Name field */}
                                    <div className='relative'>
                                        <label htmlFor='namefield' className='text-white font-semibold text-sm mb-2 block'>Your Name</label>
                                        <div className="relative">
                                            <input
                                                id='namefield'
                                                type='text'
                                                onFocus={() => handleFocus('namefield')}
                                                onBlur={() => handleBlur('namefield')}
                                                className={`w-full px-4 py-3 bg-black/50 border rounded-xl text-white placeholder-gray-400 transition-all duration-300 focus:outline-none focus:ring-2 ${
                                                    errors.name 
                                                        ? 'border-red-500 focus:ring-red-500/50' 
                                                        : isFocused.namefield 
                                                            ? 'border-orange-400 focus:ring-orange-400/50' 
                                                            : 'border-white/20 hover:border-white/40'
                                                }`}
                                                placeholder="Enter your full name"
                                                {...register('name', { required: 'Name is required' })}
                                            />
                                            {isFocused.namefield && !errors.name && (
                                                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                                                    <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
                                                </div>
                                            )}
                                        </div>
                                        {errors.name && <span className='text-red-400 text-sm mt-1 block'>⚠️ {errors.name.message}</span>}
                                    </div>

                                    {/* Email field */}
                                    <div className='relative'>
                                        <label htmlFor='emailfield' className='text-white font-semibold text-sm mb-2 block'>Your Email</label>
                                        <div className="relative">
                                            <input
                                                id='emailfield'
                                                type='email'
                                                onFocus={() => handleFocus('emailfield')}
                                                onBlur={() => handleBlur('emailfield')}
                                                className={`w-full px-4 py-3 bg-black/50 border rounded-xl text-white placeholder-gray-400 transition-all duration-300 focus:outline-none focus:ring-2 ${
                                                    errors.email 
                                                        ? 'border-red-500 focus:ring-red-500/50' 
                                                        : isFocused.emailfield 
                                                            ? 'border-orange-400 focus:ring-orange-400/50' 
                                                            : 'border-white/20 hover:border-white/40'
                                                }`}
                                                placeholder="your.email@example.com"
                                                {...register('email', {
                                                    required: 'Email is required',
                                                    pattern: {
                                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                                        message: 'Invalid email address',
                                                    },
                                                })}
                                            />
                                            {isFocused.emailfield && !errors.email && (
                                                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                                                    <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
                                                </div>
                                            )}
                                        </div>
                                        {errors.email && <span className='text-red-400 text-sm mt-1 block'>⚠️ {errors.email.message}</span>}
                                    </div>

                                    {/* Message field */}
                                    <div className='relative'>
                                        <label htmlFor='bodyfield' className='text-white font-semibold text-sm mb-2 block'>Message</label>
                                        <div className="relative">
                                            <textarea
                                                id='bodyfield'
                                                rows="5"
                                                onFocus={() => handleFocus('messagefield')}
                                                onBlur={() => handleBlur('messagefield')}
                                                className={`w-full px-4 py-3 bg-black/50 border rounded-xl text-white placeholder-gray-400 transition-all duration-300 focus:outline-none focus:ring-2 resize-none ${
                                                    errors.body 
                                                        ? 'border-red-500 focus:ring-red-500/50' 
                                                        : isFocused.messagefield 
                                                            ? 'border-orange-400 focus:ring-orange-400/50' 
                                                            : 'border-white/20 hover:border-white/40'
                                                }`}
                                                placeholder="Tell me about your project or just say hello..."
                                                {...register('body', { required: 'Please write a message' })}
                                            />
                                            {isFocused.messagefield && !errors.body && (
                                                <div className="absolute right-3 top-3">
                                                    <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
                                                </div>
                                            )}
                                        </div>
                                        {errors.body && <span className='text-red-400 text-sm mt-1 block'>⚠️ {errors.body.message}</span>}
                                    </div>

                                    {/* Submit Button */}
                                    <div className="flex justify-end">
                                        <button
                                            type='submit'
                                            disabled={isSubmitting}
                                            className={`relative group px-8 py-4 rounded-xl font-bold text-white transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 disabled:cursor-not-allowed disabled:opacity-70 ${
                                                buttonText === 'Sent Successfully!' 
                                                    ? 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700' 
                                                    : 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700'
                                            }`}
                                        >
                                            {/* Button glow effect */}
                                            <div className={`absolute -inset-1 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-300 ${
                                                buttonText === 'Sent Successfully!' 
                                                    ? 'bg-gradient-to-r from-green-400 to-green-600' 
                                                    : 'bg-gradient-to-r from-orange-400 to-orange-600'
                                            }`}></div>
                                            
                                            <span className="relative flex items-center gap-2">
                                                {isSubmitting && (
                                                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                                )}
                                                {buttonText === 'Sent Successfully!' && (
                                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                    </svg>
                                                )}
                                                {buttonText}
                                            </span>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div className={`w-full lg:w-1/2 flex flex-col gap-6 transform transition-all duration-1000 delay-700 ${
                        isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                    }`}>
                        <div className="space-y-6">
                            <h3 className='text-orange-400 font-bold font-playpen text-xl md:text-2xl mb-4'>Get In Touch</h3>
                            
                            {/* Email Card */}
                            <div className='group p-4 rounded-xl bg-gradient-to-r from-white/5 to-white/10 border border-white/10 hover:border-orange-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-orange-400/10'>
                                <div className='flex items-start gap-4'>
                                    <div className='relative flex-shrink-0'>
                                        <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-orange-600/20 rounded-full blur group-hover:blur-lg transition-all duration-300"></div>
                                        <div className='relative p-3 bg-gradient-to-r from-orange-500/20 to-orange-600/20 rounded-full border border-orange-400/30'>
                                            <img src={email} alt="Email" className='h-5 w-5 sm:h-6 sm:w-6 brightness-125' />
                                        </div>
                                    </div>
                                    <div className='flex-1 min-w-0'>
                                        <p className='text-gray-400 text-sm font-sniglet mb-1'>Email me at</p>
                                        <p className='text-white font-bold font-playpen text-sm sm:text-base md:text-lg group-hover:text-orange-300 transition-colors duration-300 break-all'>
                                            {myEmailId}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Address Card */}
                            <div className='group p-4 rounded-xl bg-gradient-to-r from-white/5 to-white/10 border border-white/10 hover:border-orange-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-orange-400/10'>
                                <div className='flex items-start gap-4'>
                                    <div className='relative flex-shrink-0'>
                                        <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-orange-600/20 rounded-full blur group-hover:blur-lg transition-all duration-300"></div>
                                        <div className='relative p-3 bg-gradient-to-r from-orange-500/20 to-orange-600/20 rounded-full border border-orange-400/30'>
                                            <img src={addressIcon} alt="Location" className='h-5 w-5 sm:h-6 sm:w-6 brightness-125' />
                                        </div>
                                    </div>
                                    <div className='flex-1 min-w-0'>
                                        <p className='text-gray-400 text-sm font-sniglet mb-1'>Located in</p>
                                        <p className='text-white font-bold font-playpen text-sm sm:text-base md:text-lg group-hover:text-orange-300 transition-colors duration-300 break-words'>
                                            {myAddress}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className='mt-8'>
                                <p className='text-gray-400 text-sm font-sniglet mb-4'>Follow me on</p>
                                <div className="flex items-center gap-3 flex-wrap">
                                    {siteLinks.map((element, index) => (
                                        <a 
                                            key={element.link} 
                                            href={element.link} 
                                            target="_blank" 
                                            rel='noreferrer'
                                            className="relative group/social p-2.5 sm:p-3 rounded-xl bg-gradient-to-r from-white/5 to-white/10 border border-white/10 hover:border-orange-400/30 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 flex-shrink-0"
                                            style={{ animationDelay: `${800 + index * 100}ms` }}
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-orange-600/20 rounded-xl opacity-0 group-hover/social:opacity-100 transition-opacity duration-300"></div>
                                            <img 
                                                src={element.icon} 
                                                alt={element.alt} 
                                                className='h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 relative z-10 transition-all duration-300 group-hover/social:brightness-125' 
                                            />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                transition={Bounce}
            />
        </section>

    )
}

export default Contact
