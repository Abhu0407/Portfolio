import React from 'react'

function Experience() {
    return (
        <div>
            <section id='experience' className='text-gray-600 body-font'>
                <div className='container px-5 py-24 mx-auto'>
                    <div className='flex flex-col text-center w-full mb-20'>
                        <h1 data-aos='fade-up' data-aos-delay='300' className='sm:text-3xl text-3xl font-bold title-font mb-4 text-gray-900'>Experience</h1>
                        <p data-aos='fade-up' data-aos-delay='400' className='lg:w-2/3 mx-auto leading-relaxed text-base'>
                            A glimpse into some of the projects I’ve built using AI, machine learning, and full stack development — combining creativity, logic, and data-driven design.
                        </p>
                    </div>

                    <div
                        data-aos="fade-up"
                        data-aos-delay="500"
                        className="flex flex-wrap justify-center gap-6 text-center mt-10"
                    >
                        {/* Card 1 */}
                        <div className="p-6 md:w-1/5 sm:w-1/2 w-full bg-white border border-blue-200 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transform transition-all duration-300">
                            <h2 className="text-2xl font-extrabold text-black">+2 Years</h2>
                            <p className="mt-1 text-gray-600 text-sm">Hands-on Learning</p>
                            <div className="mt-3 border-t border-blue-100 pt-2">
                                <p className="font-semibold text-gray-700 text-sm">Academic & Project Experience</p>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="p-6 md:w-1/5 sm:w-1/2 w-full bg-white border border-blue-200 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transform transition-all duration-300">
                            <h2 className="text-2xl font-extrabold text-black">+5</h2>
                            <p className="mt-1 text-gray-600 text-sm">Team Projects Completed</p>
                            <div className="mt-3 border-t border-blue-100 pt-2">
                                <p className="font-semibold text-gray-700 text-sm">Collaborations / Users Impacted</p>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="p-6 md:w-1/5 sm:w-1/2 w-full bg-white border border-blue-200 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transform transition-all duration-300">
                            <h2 className="text-2xl font-extrabold text-black">+10</h2>
                            <p className="mt-1 text-gray-600 text-sm">Full Stack & AI Projects</p>
                            <div className="mt-3 border-t border-blue-100 pt-2">
                                <p className="font-semibold text-gray-700 text-sm">Completed Projects</p>
                            </div>
                        </div>

                        {/* Card 4 */}
                        <div className="p-6 md:w-1/5 sm:w-1/2 w-full bg-white border border-blue-200 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transform transition-all duration-300">
                            <h2 className="text-2xl font-extrabold text-black">+12</h2>
                            <p className="mt-1 text-gray-600 text-sm">Tech Stack Mastered</p>
                            <div className="mt-3 border-t border-blue-100 pt-2">
                                <p className="font-semibold text-gray-700 text-sm">Technologies / Tools</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Experience