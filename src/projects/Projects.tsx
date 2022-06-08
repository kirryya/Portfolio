import React from 'react';
import style from './Projects.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import Project from './project/Project';
import Title from '../common/components/title/Title';
import todoImage from '../assets/image/todolist.jpg';
import socialImage from '../assets/image/social.jpg';
import cardsImage from '../assets/image/cards.jpg';

const Projects = () => {

    const todolist = {
        backgroundImage: `url(${todoImage})`,
    }
    const social = {
        backgroundImage: `url(${socialImage})`,
    }
    const cards = {
        backgroundImage: `url(${cardsImage})`,
    }

    let projects = [
        {
            title: "Todolist",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet consequuntur distinctio eaque magni modi odio odit porro, quas saepe vitae?",
            style: todolist
        },
        {
            title: "Social Network",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet consequuntur distinctio eaque magni modi odio odit porro, quas saepe vitae?",
            style: social
        },
        {
            title: "Cards",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet consequuntur distinctio ",
            style: cards
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
                                     style={project.style}
                            />
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Projects;



