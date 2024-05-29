import React from 'react';

const skills = ['JavaScript', 'React', 'Node.js', 'CSS', 'HTML', 'Spring Boot', 'Angular', 'Python'];

// Function to generate a color based on the skill name
function generateColor(skillName) {
    // Hash the skill name to get a unique color for each skill
    const hash = skillName.split('').reduce((acc, char) => char.charCodeAt(0) + acc, 0);
    const hue = hash % 360; // Map hash to hue value (0 to 360)
    return `hsl(${hue}, 70%, 50%)`; // Convert hue to HSL color
}

function Skills() {
    return (
        <section id="skills" className="container mx-auto my-10 p-6">
            <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
            <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="p-2 rounded-md text-white text-lg text-center shadow-md hover:shadow-lg transition duration-300"
                        style={{ backgroundColor: generateColor(skill) }}
                    >
                        {skill}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skills;
