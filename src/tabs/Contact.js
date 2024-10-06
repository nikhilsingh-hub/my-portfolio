import React, { useCallback, useState } from 'react'
import emailjs from 'emailjs-com';
import email from '../assets/svg/email@.svg'
import { useForm } from "react-hook-form"
import addressIcon from '../assets/svg/addressIcon.svg'
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact({ siteLinks, myEmailId, myAddress }) {
    const [isFocused, setIsFocused] = useState({ namefield: false, emailfield: false, messagefield: false })

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

        const templateParams = {
            to_name: 'Nikhil',
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
                toast('Email successfully sent!', result.text);
            })
            .catch((error) => {
                toast('Failed to send email.', error);
            })
            .finally(() => {
                reset()
            });

    }, [])


    return (
        <section id="contactme" className='flex flex-col gap-4 rounded-lg p-5 md:p-10 mx-4 md:mx-14 my-16 md:my-32 overflow-x-hidden bg-[#1A1A1A]'>
            <div className='flex justify-end items-center gap-4 pr-2'>
                <div className='line'></div>
                <h2 className="tab-title">Contact</h2>
            </div>
            <div className='flex flex-col md:flex-row justify-between'>
                <div className='border-2 border-orange-400 rounded-lg w-full md:w-[50%] flex flex-col gap-6 p-5 md:p-10'>
                    <div>
                        <p className='text-orange-400 font-bold font-playpen'>Feel free to reach me.</p>
                    </div>
                    <div>
                        <form onSubmit={handleSubmit(sendEmailFunction)} className='flex flex-col gap-5'>
                            {/* Name field */}
                            <div className='flex flex-col gap-4'>
                                <label htmlFor='namefield' className='text-white font-bold'>Your Name:</label>
                                <input
                                    id='namefield'
                                    type='text'
                                    onFocus={() => handleFocus('namefield')}
                                    onBlur={() => handleBlur('namefield')}
                                    className={`rounded-lg p-2 ${errors.name ? 'border-red-500' : ''} ${isFocused.namefield ? 'border-2 border-orange-400' : ''}`}
                                    {...register('name', { required: 'Name is required' })}
                                />
                                {errors.name && <span className='text-red-500'>{errors.name.message}</span>}
                            </div>

                            {/* Email field */}
                            <div className='flex flex-col gap-4'>
                                <label htmlFor='emailfield' className='text-white font-bold'>Your Email:</label>
                                <input
                                    id='emailfield'
                                    type='text'
                                    className={`rounded-lg p-2 ${errors.email ? 'border-red-500' : ''}`}
                                    {...register('email', {
                                        required: 'Email is required',
                                        pattern: {
                                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                            message: 'Invalid email address',
                                        },
                                    })}
                                />
                                {errors.email && <span className='text-red-500'>{errors.email.message}</span>}
                            </div>

                            {/* Message field */}
                            <div className='flex flex-col gap-4'>
                                <label htmlFor='bodyfield' className='text-white font-bold'>Message:</label>
                                <textarea
                                    id='bodyfield'
                                    className={`rounded-lg p-2 ${errors.body ? 'border-red-500' : ''}`}
                                    {...register('body', { required: 'Write some message, common' })}
                                />
                                {errors.body && <span className='text-red-500'>{errors.body.message}</span>}
                            </div>

                            <div>
                                <button
                                    type='submit'
                                    className='p-2 bg-orange-400 font-extrabold rounded-lg text-white float-right hover:bg-orange-500 transition-transform duration-300 transform hover:scale-110'
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className='w-full md:w-[50%] p-5 md:p-10 flex flex-col gap-8 justify-center'>
                    <div className='flex gap-2 text-white font-bold font-playpen text-xl'>
                        <div className='p-2 bg-slate-500 rounded-full'>
                            <img src={email} alt="@" className='h-8 w-8' />
                        </div>
                        <div className='flex justify-center items-center'>{myEmailId}</div>
                    </div>

                    <div className='flex gap-2 text-white font-bold font-playpen text-xl'>
                        <div className='p-2 bg-slate-500 rounded-full'>
                            <img src={addressIcon} alt="Address" className='h-8 w-8' />
                        </div>
                        <div className='flex justify-center items-center'>{myAddress}</div>
                    </div>

                    <div className='flex justify-start items-center'>
                        <div className="flex items-center justify-between w-full md:w-1/2 rounded-full transition-all duration-300 ease-in-out">
                            {siteLinks.map(element => (
                                <a key={element.link} href={element.link} target="_blank" rel='noreferrer' className='p-4 bg-orange-400 bg-opacity-90 rounded-full'>
                                    <img src={element.icon} alt={element.alt} className='h-6 w-6 transition-transform duration-500 hover:scale-150 hover:rotate-12' />
                                </a>
                            ))}
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
