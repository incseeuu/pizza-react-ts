import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Pagination.module.scss'

type PropsType = {
    page: number
    setPage: (page: number) => void
}

const Pagination: React.FC<PropsType> = ({setPage, page}) => {

    return (
        <div className={classes.wrap}>
            <div onClick={page > 1 ? () => { setPage(page - 1)} : () => { setPage(page)}} className={classes.control}>{'<'}</div>
            <div className={classes.pages}>
                <span onClick={() => {setPage(1)}} className={classes.page + (page === 1 ?  ' ' + classes.active : '')}>1</span>
                <span onClick={() => {setPage(2)}} className={classes.page + (page === 2 ?  ' ' + classes.active : '')}>2</span>
                <span onClick={() => {setPage(3)}} className={classes.page + (page === 3 ?  ' ' + classes.active : '')}>3</span>
            </div>
            <div onClick={page < 3 ? () => { setPage(page + 1)} : () => { setPage(page)}} className={classes.control}>{'>'}</div>
        </div>
    );
};

export default Pagination;