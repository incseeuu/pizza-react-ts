import React from 'react';
import {NavLink} from "react-router-dom";

import classes from './Block404.module.scss'
import image404 from '../../assets/img/page404.jpg'

const Block404 = () => {
    return (
        <div className={classes.main}>
            <h1>Страницы не существует😥</h1>
            <NavLink to={'/*'}>
                <button className={classes.backBtn}>Вернуться</button>
            </NavLink>
            <img className={classes.img} src={image404} alt={'Not found'}/>
        </div>
    );
};

export default Block404;