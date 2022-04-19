import React from 'react';
import style from "./Projects.module.css"
import styleContainer from "../common/styles/Container.module.css"
import Project from "./project/Project";

const Projects = () => {

    let projects = [
        {title: "Todolist", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet consequuntur distinctio eaque magni modi odio odit porro, quas saepe vitae?"},
        {title: "Social Network", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet consequuntur distinctio eaque magni modi odio odit porro, quas saepe vitae?"}
    ]

    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer} `}>
                <h2 className={style.title}>Projects</h2>
                <div className={style.projects}>
                    {
                        projects.map(project =>
                            <Project
                                title={project.title}
                                description={project.description}
                            />
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Projects;



