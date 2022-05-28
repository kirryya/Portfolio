import React from 'react';
import style from "./Projects.module.css"
import styleContainer from "../common/styles/Container.module.css"
import Project from "./project/Project";
import Title from "../common/components/title/Title";

const Projects = () => {

    let projects = [
        {
            title: "Todolist",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet consequuntur distinctio eaque magni modi odio odit porro, quas saepe vitae?"
        },
        {
            title: "Social Network",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet consequuntur distinctio eaque magni modi odio odit porro, quas saepe vitae?"
        },
        {
            title: "Cards",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet consequuntur distinctio "
        }
    ]

    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer} `}>
               <Title title={"Projects"}/>
                <div className={style.projects}>
                    {
                        projects.map((project, index) =>
                            <Project key={index}
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



