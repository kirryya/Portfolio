import React from 'react';
import style from "./Skill.module.scss"

export type SkillPropsType = {
    title: string
    description: string
    style: {
        backgroundImage: string
    }
}

const Skill = (props: SkillPropsType) => {
    return (
        <div className={style.skill}>
            <div className={style.icon} style={props.style}></div>
            <h3 className={style.title}>{props.title}</h3>
            <span className={style.description}>{props.description}</span>
        </div>
    );
};

export default Skill;