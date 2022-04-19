import React from 'react';
import style from "./Project.module.css"

export type SkillPropsType = {
    title: string
    description: string
}

const Project = (props: SkillPropsType) => {
    return (
        <div className={style.project}>
            <div className={style.picture}>
                <button className={style.button}>View</button>
            </div>
            <h3 className={style.title}>{props.title}</h3>
            <span className={style.description}>{props.description}</span>
        </div>
    );
};

export default Project;