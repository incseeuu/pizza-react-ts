import React from 'react';
import classes from './Pagination.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import {changePage, sortSelector} from "../../redux/slices/filterSlice";

type PropsType = {}

const Pagination: React.FC<PropsType> = () => {

    const {page} = useSelector(sortSelector)
    const dispatch = useDispatch()

    return (
        <div className={classes.wrap}>
            <div onClick={page > 1 ? () => {
                dispatch(changePage(page - 1))
            } : () => {
                dispatch(changePage(page))
            }}
                 className={classes.control}>{'<'}</div>
            <div className={classes.pages}>
                <span
                    onClick={() => {
                        dispatch(changePage(1))
                    }}
                    className={classes.page + (page === 1 ? ' ' + classes.active : '')}>1</span>
                <span
                    onClick={() => {
                        dispatch(changePage(2))
                    }}
                    className={classes.page + (page === 2 ? ' ' + classes.active : '')}>2</span>
                <span
                    onClick={() => {
                        dispatch(changePage(3))
                    }}
                    className={classes.page + (page === 3 ? ' ' + classes.active : '')}>3</span>
            </div>
            <div
                onClick={page < 3
                    ? () => {
                        dispatch(changePage(page + 1))
                    }
                    : () => {
                        dispatch(changePage(page))
                    }}
                className={classes.control}>{'>'}</div>
        </div>
    );
};

export default Pagination;