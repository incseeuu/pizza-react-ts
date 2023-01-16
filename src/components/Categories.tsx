import React from 'react';
import {v1} from "uuid";

type CategoriesPropsType = {
    categoriesChangeState: string
    setCategoriesChangeState: (categoriesChangeState: string) => void
}

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

const Categories: React.FC<CategoriesPropsType> = ({setCategoriesChangeState, categoriesChangeState}) => {


    const mappingCategories = categoriesState.map((el, index) => {
        return (
            <li key={index}
                className={categoriesChangeState === el.filter ? 'active' : ''}
                onClick={() => setCategoriesChangeState(el.filter)}>{el.name}</li>
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