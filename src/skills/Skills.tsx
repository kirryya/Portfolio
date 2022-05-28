import React from 'react';
import style from "./Skills.module.css"
import styleContainer from "../common/styles/Container.module.css"
import Skill from "./skill/Skill";
import Title from "../common/components/title/Title";

const Skills = () => {

    let skills = [
        {
            title: "JavaScript",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet consequuntur distinctio eaque magni modi odio odit porro, quas saepe vitae?"
        },
        {
            title: "CSS",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet consequuntur distinctio eaque magni modi odio odit porro, quas saepe vitae?"
        },
        {
            title: "React",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet consequuntur distinctio eaque magni modi odio odit porro, quas saepe vitae?"
        },
        {
            title: "Redux",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet consequuntur distinctio eaque magni modi odio odit porro, quas saepe vitae?"
        },
        {
            title: "TypeScript",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet consequuntur distinctio eaque magni modi odio odit porro, quas saepe vitae?"
        }
    ]

    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer} `}>
               <Title title={"Skills"}/>
                <div className={style.skills}>
                    {
                        skills.map((skill, index) =>
                            <Skill key={index}
                                   title={skill.title}
                                   description={skill.description}
                            />
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Skills;