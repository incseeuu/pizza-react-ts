import debounce from 'lodash.debounce';
import React, {ChangeEvent, memo, useCallback, useState} from 'react';
import classes from './Search.module.scss'
import {useDispatch} from "react-redux";
import {changeSearchValue} from "../../redux/slices/filterSlice";


const SearchInput= memo(() => {

    const [stateForDebounce, setStateForDebounce] = useState('')
    const [changeIconSize, setChangeIconSize] = React.useState(false)
    const dispatch = useDispatch()

    const inputRef = React.useRef<HTMLInputElement>(null)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setStateForDebounce(e.currentTarget.value)
        updateSearchValue(e.currentTarget.value)
    }

    const onBlurHandler = () => {
        setChangeIconSize(false)
        dispatch(changeSearchValue(stateForDebounce))
    }

    const updateSearchValue = useCallback(debounce((value) => {
        dispatch(changeSearchValue(value))
    }, 500),[])

    const onClickClearHandler = () => {
        dispatch(changeSearchValue(''))
        setStateForDebounce('')
        inputRef.current && inputRef.current.focus()
        setChangeIconSize(true)
    }

    const classForSearchIcon = classes.searchIcon + (changeIconSize ? ' ' + classes.activeSearchIcon : '')
    const classForCloseIcon = classes.closeIcon + (changeIconSize ? ' ' + classes.activeCloseIcon : '')

    return (
        <div className={classes.container}>
            <svg className={classForSearchIcon}
                 width="46" height="46" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                 strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.25 19.25 15.5 15.5M4.75 11a6.25 6.25 0 1 1 12.5 0 6.25 6.25 0 0 1-12.5 0Z"></path>
            </svg>
            <input
                ref={inputRef}
                value={stateForDebounce}
                onChange={onChangeHandler}
                onClick={() => {
                    setChangeIconSize(true)
                }}
                onBlur={onBlurHandler}
                className={classes.input} placeholder='Pizza name...'/>
            <button>
                <svg
                    className={classForCloseIcon}
                    onClick={onClickClearHandler}
                    width="46"
                    height="46" fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="m17.25 6.75-10.5 10.5"></path>
                    <path d="m6.75 6.75 10.5 10.5"></path>
                </svg>
            </button>

        </div>
    );
});

export default SearchInput;