// src/components/Header.jsx
import React from 'react';

function Header() {
    return (
        <header className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white">
            <div className="container mx-auto px-6 py-6 flex justify-between items-center">
                <h1 className="text-4xl font-bold">My Portfolio</h1>
                <nav className="space-x-6">
                    <a href="#about" className="hover:underline">About</a>
                    <a href="#projects" className="hover:underline">Projects</a>
                    <a href="#skills" className="hover:underline">Skills</a>
                    <a href="#contact" className="hover:underline">Contact</a>
                </nav>
            </div>
        </header>
    );
}

export default Header;
