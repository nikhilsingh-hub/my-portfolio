import React, { useCallback, useState } from 'react'
import emailjs from 'emailjs-com';
import email from '../assets/email@.svg'
import addressIcon from '../assets/addressIcon.svg'

function Contact({ siteLinks, myEmailId, myAddress }) {
    const [userInfo, setUserInfo] = useState({
        name: '',
        email: '',
        body: ''
    })

    const sendEmailFunction = useCallback((e) => {
        e.preventDefault()
        // console.log(userInfo);
        emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
            from_name: userInfo.name,
            from_email: userInfo.email,
            message: userInfo.body,
        }, 'YOUR_USER_ID')
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            alert('Email sent successfully!');
        })
        .catch((err) => {
            console.error('FAILED...', err);
            alert('Failed to send email.');
        });

    }, [userInfo])


    return (
        <div id="contactme" className='flex flex-col gap-4 overflow-x-hidden'>
            <div className='flex justify-end pr-2'>
                <h2 className="tab-title">
                    Contact
                </h2>
            </div>
            <div className='flex p-10 justify-between'>
                <div className= 'border-2 border-violet-400 rounded-lg w-[50%] flex flex-col gap-6 p-10'>
                    <div>
                        <p className='text-white'>If you have any questions or concerns, please don't hesitate to contact me. I am open to any work opportunities that align with my skills and interests.</p>
                    </div>
                    <div className=''>
                        <form onSubmit={sendEmailFunction} className='flex flex-col gap-5'>
                            <div className='flex flex-col gap-4'>
                                <label htmlFor='namefield' className='text-white font-bold'>
                                    Your Name:
                                </label>
                                <input id='namefield' type="text" className='rounded-lg p-2'
                                    onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
                                    required />
                            </div>

                            <div className='flex flex-col gap-4'>
                                <label htmlFor='emailfield' className='text-white font-bold'>
                                    Your Email:
                                </label>
                                <input id='emailfield' type="text" className='rounded-lg p-2'
                                    onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
                                    required />
                            </div>

                            <div className='flex flex-col gap-4'>
                                <label htmlFor='bodyfield' className='text-white font-bold'>
                                    Email Body:
                                </label>
                                <input id='bodyfield' type="text" className='rounded-lg p-2'
                                    onChange={(e) => setUserInfo({ ...userInfo, body: e.target.value })}
                                    required />
                            </div>

                            <div className=''>
                                <button type='submit' className='p-2 bg-violet-400 font-extrabold rounded-lg text-white float-right hover:scale-110 transition-all'>
                                    <span className=''>Send Email</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='w-[50%] p-10 flex flex-col gap-8 justify-center'>
                    <div className='flex gap-2 text-white font-bold font-playpen text-xl'>
                        <div className='p-2 bg-slate-500 rounded-full'>
                            <img src={email} alt="@" className='h-8 w-8' />
                        </div>
                        <div className='flex justify-center items-center'>
                            {myEmailId}
                        </div>
                    </div>

                    <div className='flex gap-2 text-white font-bold font-playpen text-xl'>
                        <div className='p-2 bg-slate-500 rounded-full'>
                            <img src={addressIcon} alt="@" className='h-8 w-8' />
                        </div>
                        <div className='flex justify-center items-center'>
                            {myAddress}
                        </div>
                    </div>

                    <div className='flex justify-start items-center'>
                        <div className="flex items-center justify-between w-1/2 rounded-full transition-all duration-300 ease-in-out">
                            {siteLinks.map(element => (
                                <a key={element.link} href={element.link} target="_blank" rel='noreferrer' className='p-4 bg-[rgb(135,59,191)] bg-opacity-90 rounded-full'>
                                    <img src={element.icon} alt={element.alt} className='h-6 w-6 transition-transform duration-500 hover:scale-150 hover:rotate-12 bg' />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
