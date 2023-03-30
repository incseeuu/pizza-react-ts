import React from 'react';
import {pizzaSelector, PizzaStateType} from '../../redux/slices/pizzaSlice';

import PizzaBlock from "./PizzaBlock/PizzaBlock";
import Skeleton from "./PizzaBlock/Skeleton";
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store";


const ContentContainer = () => {

    const {items, isLoading} = useSelector<RootState,PizzaStateType>(pizzaSelector)

    if(isLoading === 'loading'){
        return <div className="content__items">{[...new Array(8)].map((el, index) => <Skeleton key={index}/>)}</div>}

    if(isLoading === 'error'){
        return <div style={{padding: '20px'}}><h2><p>При загрузке данных произошла ошибка 😥</p></h2></div>
    }

    return ( items.length > 0
            ? <div className="content__items">
                {items.map(el => <PizzaBlock key={el.id} pizzaItem={el}/>)}
            </div>
            : <h2>Ничего не найдено 😥</h2>

    );
};

export default ContentContainer;