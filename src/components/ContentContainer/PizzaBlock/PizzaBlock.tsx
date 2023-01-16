import React from 'react';
import PizzaBlockBottom from "./PizzaBlockBottom/PizzaBlockBottom";
import {PizzasSize, PizzasTypes} from "../../../pages/Home";


type PizzaBlockType = {
    id: string
    imageUrl: string
    title: string
    price: number
    types: PizzasTypes[]
    sizes: PizzasSize[]
}

const PizzaBlock: React.FC<PizzaBlockType> = (
    {id, types, sizes, price, title, imageUrl}
) => {

    const [localStateForChangeType, setLocalStateForChangeType] = React.useState<number>(0)
    const [localStateForChangeSize, setLocalStateForChangeSize] = React.useState<number>(0)

    const typePizza: string[] = ['тонкое', 'традиционное']

    return (
        <div className="pizza-block__parent">
            <div key={id} className="pizza-block">
                <img
                    className="pizza-block__image"
                    src={imageUrl}
                    alt="Pizza"
                />
                <h4 className="pizza-block__title">{title}</h4>
                <div className="pizza-block__selector">
                    <ul>
                        {types.map(value => {
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
                        {sizes.map((value, i) => <li
                            key={i}
                            onClick={() => setLocalStateForChangeSize(i)}
                            className={localStateForChangeSize === i ? 'active' : ''}
                        >{value} см.</li>)}
                    </ul>
                </div>
                <PizzaBlockBottom price={price}/>
            </div>
        </div>

    )
        ;
};

export default PizzaBlock;