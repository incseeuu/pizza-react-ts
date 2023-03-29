import React from 'react';
import { StatePizzasType } from '../../redux/slices/pizzaSlice';

import PizzaBlock from "./PizzaBlock/PizzaBlock";
import Skeleton from "./PizzaBlock/Skeleton";



type ContentContainerType = {
    state: StatePizzasType[]
    loading: boolean
}

const ContentContainer = (props: ContentContainerType) => {

    if(props.loading){
        return <div className="content__items">{[...new Array(8)].map((el, index) => <Skeleton key={index}/>)}</div>}

    return ( props.state.length > 0
            ? <div className="content__items">
                {props.state.map(el => <PizzaBlock key={el.id} pizzaItem={el}/>)}
            </div>
            : <h2>Ничего не найдено 😥</h2>

    );
};

export default ContentContainer;