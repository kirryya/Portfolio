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
import gitImage from "../assets/image/Git.png";
import axiosImage from "../assets/image/axios.png";
import muiImage from "../assets/image/Mui.png";

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
    const git = {
        backgroundImage: `url(${gitImage})`
    }
    const axios = {
        backgroundImage: `url(${axiosImage})`
    }
    const mui = {
        backgroundImage: `url(${muiImage})`
    }

    let skills = [
        {
            title: "JavaScript",
            style: javascript
        },
        {
            title: "TypeScript",
            style: typescript
        },
        {
            title: "React",
            style: react
        },
        {
            title: "Redux",
            style: redux
        },
        {
            title: "CSS",
            style: css
        },
        {
            title: "Git",
            style: git
        },
        {
            title: "Axios",
            style: axios
        },
        {
            title: "MaterialUI",
            style: mui
        },
    ]

    const Fade = require("react-reveal/Fade");

    return (
        <div className={style.skillsBlock} id={"skills"}>
            <Fade bottom>
                <div className={`${styleContainer.container} ${style.skillsContainer} `}>
                    <Title title={"Skills"}/>
                    <div className={style.skills}>
                        {
                            skills.map((skill, index) =>
                                <Skill key={index}
                                       title={skill.title}
                                       style={skill.style}
                                />
                            )
                        }
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default Skills;