import React from 'react';
import profileImage from '../assets/Shreedhar Photo.jpg';

function Hero() {
    return (
        <section className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white min-h-screen flex items-center">
            <div className="container mx-auto px-6 py-16 text-center md:text-left">
                <div className="md:flex md:items-center">
                    <div className="md:w-1/2">
                        <h1 className="text-5xl font-extrabold mb-4">
                            Welcome to My Portfolio
                        </h1>
                        <p className="text-xl mb-8">
                            Hi, I'm <span className="font-bold">Shreedhar Suragond</span>, a passionate software developer specializing in <span className="font-bold">Full Stack Web Development</span>. I create amazing web applications with a focus on user experience and performance.
                        </p>
                        <a
                            href="#projects"
                            className="inline-block px-8 py-3 bg-white text-gray-800 font-semibold rounded-md shadow-md hover:bg-gray-200 transition duration-300"
                        >
                            See My Work
                        </a>
                    </div>
                    <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
                        <div className="relative w-80 h-80">
                            <img
                                src={profileImage}
                                alt="Hero Image"
                                className="absolute inset-5 w-full h-full object-cover rounded-full border-8 border-white shadow-lg transform transition-transform duration-500 hover:scale-110"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
