import React from 'react';
import PizzaBlockBottom from "./PizzaBlockBottom/PizzaBlockBottom";
import {useDispatch, useSelector} from "react-redux";
import {addPizzaItem, cartSelector, PizzaCartStateType, PizzaItemTypeWithCount} from "../../../redux/slices/cartSlice";
import {RootState} from "../../../redux/store";
import {StatePizzasType} from '../../../redux/slices/pizzaSlice';


type PizzaBlockType = {
    pizzaItem: StatePizzasType
}

const PizzaBlock = (props: PizzaBlockType) => {

    const {items} = useSelector<RootState, PizzaCartStateType>(cartSelector)

    function countCurrentPizza(arr: PizzaItemTypeWithCount[]){
          const item = arr.find(el => el.id === props.pizzaItem.id)
        return item?.count
    }



    const [localStateForChangeType, setLocalStateForChangeType] = React.useState<number>(0)
    const [localStateForChangeSize, setLocalStateForChangeSize] = React.useState<number>(0)

    const dispatch = useDispatch()

    const onAddClickHandler = () => {
        dispatch(addPizzaItem({...props.pizzaItem, count: 0}))
    }

    const typePizza: string[] = ['тонкое', 'традиционное']

    return (
        <div className="pizza-block__parent">
            <div key={props.pizzaItem.id} className="pizza-block">
                <img
                    className="pizza-block__image"
                    src={props.pizzaItem.imageUrl}
                    alt="Pizza"
                />
                <h4 className="pizza-block__title">{props.pizzaItem.title}</h4>
                <div className="pizza-block__selector">
                    <ul>
                        {props.pizzaItem.types.map(value => {
                            return (
                                <li key={value}
                                    onClick={() => setLocalStateForChangeType(value)}
                                    className={localStateForChangeType === value ? 'active' : ''}
                                >
                                    {typePizza[value]}
                                </li>
                            )
                        })}
                    </ul>
                    <ul>
                        {props.pizzaItem.sizes.map((value, i) => <li
                            key={i}
                            onClick={() => setLocalStateForChangeSize(i)}
                            className={localStateForChangeSize === i ? 'active' : ''}
                        >{value} см.</li>)}
                    </ul>
                </div>
                <PizzaBlockBottom price={props.pizzaItem.price} callback={onAddClickHandler} count={countCurrentPizza(items)}/>
            </div>
        </div>

    )
        ;
};

export default PizzaBlock;