import React from 'react';
import style from "./Skills.module.css"
import styleContainer from "../common/styles/Container.module.css"
import Skill from "./skill/Skill";

const Skills = () => {

    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer} `}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    <Skill title={"JS"} description={"JSJSJSJSJSJSJSJSJSJSJSJS"}/>
                    <Skill title={"CSS"} description={"CSSCSSCSSCSSCSS CSSCSSCSSCSSCSS"}/>
                    <Skill title={"React"} description={"ReactReactReactReactReactReact"}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;