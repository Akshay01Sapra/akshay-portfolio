import React, { useState, useEffect } from "react";
import ExpCard from "../data/ExpCard";

const CustomCard = ({ activeCategory }) => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [isImageLoading, setIsImageLoading] = useState(false);

    useEffect(() => {
        if (selectedProject) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [selectedProject]);

    const filteredProjects =
        activeCategory === "ALL"
            ? ExpCard
            : ExpCard.filter((project) => project.category.includes(activeCategory));

    const openModal = (project) => {
        setSelectedProject(project);
        setIsImageLoading(true);
    };

    const closeModal = () => {
        setSelectedProject(null);
        setIsImageLoading(false);
    };

    return (
        <div className="row g-md-5">
            {filteredProjects.map((project) => (
                <div className="col-12 mb-3 mb-md-0 mx-auto col-lg-6" key={project.id}>
                    <div className="exp-card d-flex flex-column justify-content-between">
                        <div className="row">
                            <div className="col-md-5 col-xl-6">
                                <div className="frame-cotainer">
                                    <img src={project.image} alt={project.title} />

                                    <p className="mt-2 mb-0 sm-text text-center">
                                        {project.category}
                                    </p>

                                    <div className="text-center">
                                        {project.category === "Web Design" ? (
                                            <a
                                                href={project.liveLink}
                                                className="web-link"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                {project.btnName}
                                            </a>
                                        ) : (
                                                <button
                                                    className="web-link border-0"
                                                    onClick={() => openModal(project)}
                                                >
                                                    {project.btnName}
                                                </button>
                                            )}
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-7 col-xl-6 mt-4 mt-md-0">
                                <h4 className="crafted-card-title">{project.title}</h4>

                                <p className="sm-text crafted-card-desc mt-3">
                                    {project.description}
                                </p>

                                <ul className="ps-3">
                                    {project.features.map((feature, index) => (
                                        <li className="sm-text" key={index}>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="row">
                            <p className="mt-4 mb-0 sm-text text-center">{project.tech}</p>
                        </div>
                    </div>
                </div>
            ))}

            {selectedProject && (
                <div className="custom-modal-overlay mt-0" onClick={closeModal}>
                    <div
                        className="custom-modal-box"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="modal-header d-flex justify-content-between align-items-center">
                            <h2 className="custom-modal-title mb-0">
                                {selectedProject.title}
                            </h2>
                            <button className="custom-modal-close" onClick={closeModal}>
                                ×</button>

                            
                        </div>

                        <div className="custom-modal-image-wrapper">
                            {isImageLoading && (
                                <div className="custom-loader">
                                    <div className="spinner"></div>
                                </div>
                            )}

                            <img
                                src={selectedProject.designPreview}
                                alt={selectedProject.title}
                                className={`custom-modal-image ${isImageLoading ? "image-hidden" : "image-visible"
                                    }`}
                                onLoad={() => setIsImageLoading(false)}
                                onError={() => setIsImageLoading(false)}
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CustomCard;