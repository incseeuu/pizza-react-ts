import React, {ChangeEvent} from 'react';
import classes from './Search.module.scss'

type PropsType = {
    setValueSearchInput: (value: string) => void
    valueSearchInput: string
}

const SearchInput:React.FC<PropsType> = ({setValueSearchInput, valueSearchInput}) => {

    const [changeIconSize, setChangeIconSize] = React.useState(false)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValueSearchInput(e.currentTarget.value)
    }

    const onBlurHandler = () => {
        setChangeIconSize(false)
        setValueSearchInput(valueSearchInput)
    }

    const classForIcon = classes.icon + (changeIconSize ? ' ' + classes.activeIcon : '')

    return (
        <div className={classes.container}>
            <svg className={classForIcon}
                 width="46" height="46" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                 stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.25 19.25 15.5 15.5M4.75 11a6.25 6.25 0 1 1 12.5 0 6.25 6.25 0 0 1-12.5 0Z"></path>
            </svg>
            <input value={valueSearchInput} onChange={onChangeHandler} onClick={() => {setChangeIconSize(true)}} onBlur={onBlurHandler} className={classes.input} placeholder='Pizza name...'/>
        </div>
    );
};

export default SearchInput;