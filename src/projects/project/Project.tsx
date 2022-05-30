import React from 'react';
import style from "./Project.module.css"

export type SkillPropsType = {
    title: string
    description: string
    style: {
        backgroundImage: string
    }
}

const Project = (props: SkillPropsType) => {
    return (
        <div className={style.project}>
            <div className={style.picture} style={props.style}>
                <button className={style.button}>View</button>
            </div>
            <div className={style.projectInfo}>
                <h3 className={style.title}>{props.title}</h3>
                <span className={style.description}>{props.description}</span>
            </div>
        </div>
    );
};

export default Project;