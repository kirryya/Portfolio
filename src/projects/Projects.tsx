import React from 'react';
import style from './Projects.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import {Project} from './project/Project';
import {Title} from '../common/components/title/Title';
import todoImage from '../assets/image/todolist.jpg';
import socialImage from '../assets/image/social.jpg';
import cardsImage from '../assets/image/cards.jpg';

export const Projects = () => {

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
            description: "SPA for task management. Implemented: add task or task list, remove task or task list, rename task or task list, marking the completed task",
            style: todolist,
            link: "https://kirryya.github.io/ToDoList/"
        },
        {
            title: "Social Network",
            description: "SPA for social actions - messaging and blogging. Implemented: login page with validation, error displaying and captcha; 404 page; profile page with abilities to: view the information of the selected user, edit your profile information, change avatar, add a new post and view your published posts; dialogs page with the ability to send a message; users page and friends page with abilities to: view the list of users using pagination, subscribe and unsubscribe to any user, view any user profile.",
            style: social,
            link: "https://kirryya.github.io/Social-Network/#/login"
        },
        {
            title: "Learning Cards",
            description: "SPA for learning by cards. It's team project. Implemented: login page with validation; register page with validation; reset password page with validation; 404 page; profile page with abilities to: edit your profile information (change nickname), add a new card pack and edit, search, sort, view, remove and learn your card packs; packs list page with abilities to: sort, view and learn any card packs; learn page with abilities to answer a question and evaluate your answer.",
            style: cards,
            link: "https://mr-Freeman-S.github.io/cards-nya/"
        }
    ]

    const Fade = require("react-reveal/Fade");

    return (
        <div className={style.projectsBlock} id={"projects"}>
            <div className={`${styleContainer.container} ${style.projectsContainer} `}>
                <Title title={"Projects"}/>
                <Fade bottom>
                    <div className={style.projects}>
                        {
                            projects.map((project, index) =>
                                <Project key={index}
                                         title={project.title}
                                         description={project.description}
                                         style={project.style}
                                         link={project.link ? project.link : ""}
                                />
                            )
                        }
                    </div>
                </Fade>
            </div>
        </div>
    );
};



