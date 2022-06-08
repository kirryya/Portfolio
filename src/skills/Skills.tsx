import React from 'react';
import style from "./Skills.module.scss"
import styleContainer from "../common/styles/Container.module.scss"
import Skill from "./skill/Skill";
import Title from "../common/components/title/Title";
import jsImage from "../assets/image/JavaScript.png";
import tsImage from "../assets/image/typescript.png";
import cssImage from "../assets/image/CSS3.png";
import reactImage from "../assets/image/react.png";
import reduxImage from "../assets/image/redux.jpg";

const Skills = () => {

    const javascript = {
        backgroundImage: `url(${jsImage})`
    }
    const css = {
        backgroundImage: `url(${cssImage})`
    }
    const react = {
        backgroundImage: `url(${reactImage})`
    }
    const redux = {
        backgroundImage: `url(${reduxImage})`
    }
    const typescript = {
        backgroundImage: `url(${tsImage})`
    }

    let skills = [
        {
            title: "JavaScript",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet consequuntur distinctio eaque magni modi odio odit porro, quas saepe vitae?",
            style: javascript
        },
        {
            title: "TypeScript",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet consequuntur distinctio eaque magni modi odio odit porro, quas saepe vitae?",
            style: typescript
        },
        {
            title: "React",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet consequuntur distinctio eaque magni modi odio odit porro, quas saepe vitae?",
            style: react
        },
        {
            title: "Redux",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet consequuntur distinctio eaque magni modi odio odit porro, quas saepe vitae?",
            style: redux
        },
        {
            title: "CSS",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet consequuntur distinctio eaque magni modi odio odit porro, quas saepe vitae?",
            style: css
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
                                   style={skill.style}
                            />
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Skills;