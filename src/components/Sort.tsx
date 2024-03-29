import React, {memo, useEffect, useRef} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changeSort, sortSelector} from '../redux/slices/filterSlice';

type SortNameType = {
    sort: string
    name: string
}

const sortName: SortNameType[] = [
    {sort: 'rating', name: 'популярности'},
    {sort: 'price', name: 'цене (возростание)'},
    {sort: '-price', name: 'цене (убывание)'},
    {sort: 'title', name: 'алфавиту'},
]

const Sort = memo(() => {

    const {sort} = useSelector(sortSelector)
    const dispatch = useDispatch()

    const [viewSort, setViewSort] = React.useState<boolean>(false)

    const sortRef = useRef<HTMLDivElement>(null)



    useEffect(() => {

        const clickHandler = (event: MouseEvent) => {
            if(sortRef && sortRef.current){
                if(!event.composedPath().includes(sortRef.current)){
                    setViewSort(false)
                }
            }
        }

        document.body.addEventListener('click', clickHandler)

        return () =>{
            document.body.removeEventListener('click', clickHandler)
        }
    }, [])
    const onClickHandlerViewSort = () => {
        setViewSort(!viewSort)
    }

    const onClickHandlerActiveSort = (name: string) => {
        dispatch(changeSort(name))
        setViewSort(false)
    }

    const mappingSortName = sortName.map((el, index) => {
        return (
            <li
                key={index}
                className={sort === el.sort ? 'active' : ''}
                onClick={() => onClickHandlerActiveSort(el.sort)}
                onBlur={() => onClickHandlerActiveSort(el.sort)}
            >
                {el.name}</li>
        )
    })

    const sortChangeName = sortName.find(el => el.sort === sort)

    return (
        <div className="sort" ref={sortRef}>
            <div className="sort__label">
                <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                        fill="#2C2C2C"
                    />
                </svg>
                <b>Сортировка по:</b>
                <span onClick={onClickHandlerViewSort}>{sortChangeName ? sortChangeName.name : "не выбрана"}</span>
            </div>
            {viewSort &&
                <div className="sort__popup">
                    <ul>
                        {mappingSortName}
                    </ul>
                </div>}
        </div>
    )
        ;
});

export default Sort;