import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../redux/store";
import {changeCategories} from "../redux/slices/filterSlice";

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

const Categories = () => {

    const categoriesChangeState = useSelector((state: RootState) => state.filterReducer.categories)

    const dispatch = useDispatch()

    const mappingCategories = categoriesState.map((el, index) => {
        return (
            <li key={index}
                className={categoriesChangeState === el.filter ? 'active' : ''}
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
};

export default Categories;