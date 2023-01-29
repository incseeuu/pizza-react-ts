import React from 'react';

import PizzaBlock from "./PizzaBlock/PizzaBlock";
import Skeleton from "./PizzaBlock/Skeleton";
import {StatePizzasType} from "../../pages/Home";


type ContentContainerType = {
    state: StatePizzasType[]
    loading: boolean
}

const ContentContainer = (props: ContentContainerType) => {

    return ( props.state.length > 0
            ? <div className="content__items">
                {props.loading ? [...new Array(8)].map((el, index) => <Skeleton key={index}/>)
                    : props.state.map(el => <PizzaBlock key={el.id} {...el}/>)}
            </div>
            : <h2>Ничего не найдено 😥</h2>

    );
};

export default ContentContainer;