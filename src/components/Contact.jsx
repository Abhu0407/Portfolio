import React from 'react'
import { FaLinkedin, FaPhone, FaEnvelope } from 'react-icons/fa';

function Contact() {
    return (
        <div>
            <section id='contact' className='text-gray-600 body-font'>
                <div className='container mx-auto flex px-5 py-24 items-center justify-center flex-col'>
                    <div data-aos='fade-up' data-aos-delay='300' className='text-center lg:w-2/3 w-full'>
                        <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>Contact</h1>
                        <p className='mb-8 leading-relaxed'>
                            I’m always open to discussing new opportunities, collaborations, or innovative project ideas. Whether you’re looking for a passionate developer to join your team or want to build something amazing together — let’s connect!
                        </p>

                        <div data-aos='fade-up' data-aos-delay='500' className='flex flex-col items-center text-2xl font-bold'>
                            <div className='flex items-center space-x-2'>
                                <FaPhone className="inline mr-2" /> <a href="tel:+919993672787">+99 9999999999</a>
                            </div>

                            <div className='flex items-center space-x-2 mt-4'>
                                <FaEnvelope className="inline mr-2" /> <a href="mailto:a.r.rathore0407@gmail.com">myemail@gmail.com</a>

                            </div>

                            <div className='flex items-center space-x-2 mt-4'>
                                <FaLinkedin className="inline mr-2" /><a href="https://www.linkedin.com/in/abhishek-rathore-679a7333b" target="_blank">myLinkdin</a>
                                
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact