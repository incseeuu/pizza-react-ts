import React, {memo} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changeCategories, sortSelector} from "../redux/slices/filterSlice";

type CategoriesStateType = {
    filter: string
    name: string
}

const categoriesState: CategoriesStateType[] = [
    {filter: 'all', name: 'Все'},
    {filter: 'meat', name: 'Мясные'},
    {filter: 'vegan', name: 'Вегетарианские'},
    {filter: 'grill', name: 'Гриль'},
    {filter: 'spicy', name: 'Острые'},
    {filter: 'close', name: 'Закрытые'},
]

const Categories = memo(() => {

    const {categories} = useSelector(sortSelector)

    const dispatch = useDispatch()

    const mappingCategories = categoriesState.map((el, index) => {
        return (
            <li key={index}
                className={categories === el.filter ? 'active' : ''}
                onClick={() => dispatch(changeCategories(el.filter))}>{el.name}</li>
        )
    })

    return (
        <div className="categories">
            <ul>
                {mappingCategories}
            </ul>
        </div>
    );
});

export default Categories;