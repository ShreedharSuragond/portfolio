import React from 'react';

function Project({ title, description, link }) {
    return (
        <div className="p-4 rounded-lg shadow-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)' }}>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-sm md:text-base mb-4">{description}</p>
            <div className="text-center">
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" text-red-700 font-semibold underline hover:text-blue-800"
                >
                    View Project
                </a>
            </div>
        </div>
    );
}

export default Project;
