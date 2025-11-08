import React from 'react'
import { FaLinkedin, FaFacebook, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';


function Footer() {
    return (
        <>
            <footer className='text-gray-200 bg-gray-900 body-font'>
                <div className='container justify-center px-5 py-8 mx-auto flex items-center sm:flex-row flex-col'>
                    <p className='text-2xl font-bold sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4'>
                        Portfolio
                    </p>
                    <span className='inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start text-2xl'>
                        <a href="https://www.linkedin.com/in/abhishek-rathore-679a7333b" target="_blank" rel="noopener noreferrer" ><FaLinkedin /></a>
                        <a href="https://www.facebook.com/profile.php?id=100035383622161" target="_blank" rel="noopener noreferrer" className='ml-4'><FaFacebook /></a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className='ml-4'><FaTwitter /></a>
                        <a href="https://www.instagram.com/mr.abhi_4578" target="_blank" rel="noopener noreferrer" className='ml-4'><FaInstagram /></a>
                        <a href="https://github.com/Abhu0407" target="_blank" rel="noopener noreferrer" className=" ml-4"><FaGithub /></a>
                    </span>
                </div>
            </footer>
        </>
    )
}

export default Footer