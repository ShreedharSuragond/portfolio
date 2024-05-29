import React from 'react';
import profileImage from '../assets/Shreedhar Photo.jpg';

function About() {
    return (
        <section id="about" className="container mx-auto my-20 p-8 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-lg shadow-lg">
            <div className="flex flex-col md:flex-row items-center">
                <img
                    src={profileImage}
                    alt="Profile"
                    className="w-48 h-48 rounded-full mb-6 md:mb-0 md:mr-8 shadow-lg border-4 border-white"
                />
                <div>
                    <h2 className="text-3xl font-extrabold mb-4 text-white">About Me</h2>
                    <p className="text-lg text-white mb-4">
                        Hi, I'm <span className="font-bold">Shreedhar Suragond</span>, a passionate software developer with experience in{' '}
                        <span className="text-yellow-200">Full Stack Web Development</span>. I love creating innovative solutions and improving user experiences through thoughtful design and robust code.
                    </p>
                    <p className="text-lg text-white mb-4">
                        Over the past few years, I have worked on various projects ranging from simple websites to complex web applications. My goal is to continually grow and improve my skills while contributing to exciting and impactful projects.
                    </p>
                    <a
                        href="#contact"
                        className="inline-block px-6 py-3 mt-4 bg-yellow-400 text-white text-lg font-medium rounded-md shadow-md hover:bg-yellow-500 transition duration-300"
                    >
                        Get in Touch
                    </a>
                </div>
            </div>
        </section>
    );
}

export default About;
