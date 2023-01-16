import React from 'react';
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import ContentContainer from "../components/ContentContainer/ContentContainer";


export type StatePizzasType = {
    id: string
    imageUrl: string
    title: string
    types: PizzasTypes[]
    sizes: PizzasSize[]
    price: number
    category: number
    rating: number
}

export type PizzasTypes = 0 | 1

export type PizzasSize = 26 | 30 | 40

const Home = () => {

    const [stateFromServer, setStateFromServer] = React.useState([])
    const [sortChangeState, setSorChangeState] = React.useState<string>('rating')
    const [categoriesChangeState, setCategoriesChangeState] = React.useState<string>('all')
    const [loading, setLoading] = React.useState(true)

    React.useEffect(() => {
        setLoading(true)

        const categoriesFilter = categoriesChangeState === 'all' ? '' : `category=${categoriesChangeState}`
        const sortBy = sortChangeState === 'all' ? '' : `sortBy=${sortChangeState.replace('-', '')}`
        const order = sortChangeState === "-price" ? 'order=desc' : 'order=asc'


        fetch(`https://63b3fb469f50390584a335c8.mockapi.io/items?${categoriesFilter}&${sortBy}&${order}`)
            .then(res => res.json())
            .then(data => {
                setStateFromServer(data)
                setLoading(false)
            })
        window.scrollTo(0, 0)
    }, [categoriesChangeState, sortChangeState])

    return (
        <>
            <div className="content">
                <div className="container">
                    <div className="content__top">
                        <Categories
                            categoriesChangeState={categoriesChangeState}
                            setCategoriesChangeState={setCategoriesChangeState}

                        />
                        <Sort
                            sortChangeState={sortChangeState}
                            setSorChangeState={setSorChangeState}
                        />
                    </div>
                    <h2 className="content__title">Все пиццы</h2>
                    <ContentContainer state={stateFromServer} loading={loading}/>
                </div>
            </div>
        </>
    );
};

export default Home;