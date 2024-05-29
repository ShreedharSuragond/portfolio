import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import Project from './Project';

const projectList = [
    {
        title: 'Project 1',
        description: 'Description for project 1',
        link: 'https://example.com/project1',
        backgroundColor: '#FF6B6B', // Custom background color
    },
    {
        title: 'Project 2',
        description: 'Description for project 2',
        link: 'https://example.com/project2',
        backgroundColor: '#48BB78', // Custom background color
    },
    // Add more projects here
];

function Projects() {
    return (
        <section id="projects" className="container mx-auto my-10 p-6">
            <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
            <div className="max-w-2xl mx-auto">
                <Carousel
                    className="custom-carousel"
                    showArrows={true}
                    showStatus={false}
                    showThumbs={false}
                    infiniteLoop={true}
                    autoPlay={true}
                    interval={5000} // Change the interval as needed
                    stopOnHover={true}
                    transitionTime={500} // Change the transition time as needed
                    renderIndicator={(onClickHandler, isSelected, index, label) => {
                        if (isSelected) {
                            return (
                                <li
                                    style={{ background: '#000', width: '8px', height: '8px', borderRadius: '50%', display: 'inline-block', margin: '0 4px' }}
                                    aria-label={`Selected: ${label} ${index + 1}`}
                                    title={`Selected: ${label} ${index + 1}`}
                                />
                            );
                        }
                        return (
                            <li
                                style={{ background: '#ccc', width: '8px', height: '8px', borderRadius: '50%', display: 'inline-block', margin: '0 4px' }}
                                onClick={onClickHandler}
                                onKeyDown={onClickHandler}
                                value={index}
                                key={index}
                                role="button"
                                tabIndex={0}
                                title={`${label} ${index + 1}`}
                                aria-label={`${label} ${index + 1}`}
                            />
                        );
                    }}
                >
                    {projectList.map((project, index) => (
                        <div key={index} style={{ backgroundColor: project.backgroundColor }}>
                            <Project
                                title={project.title}
                                description={project.description}
                                link={project.link}
                            />
                        </div>
                    ))}
                </Carousel>
            </div>
        </section>
    );
}

export default Projects;
