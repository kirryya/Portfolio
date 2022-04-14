import React from 'react';
import style from "./Skills.module.css"
import styleContainer from "../common/styles/Container.module.css"
import Skill from "./skill/Skill";

const Skills = () => {

    let skills = [
        {title: "JS", description: "trterttr"},
        {title: "CSS", description: "CSS CSSCSSCSSCSSCSS"},
        {title: "React", description: "ReactReactReactReactReactReact"}
    ]

    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer} `}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    {
                        skills.map(s =>
                            <Skill
                                title={s.title}
                                description={s.description}
                            />
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Skills;