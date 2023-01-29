import React from 'react';
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import ContentContainer from "../components/ContentContainer/ContentContainer";
import SearchInput from "../components/SearchInput/SearchInput";
import Pagination from "../components/Pagination/Pagination";


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
    const [valueSearch, setValueSearchInput] = React.useState('')
    const [stateFromServer, setStateFromServer] = React.useState([])
    const [sortChangeState, setSorChangeState] = React.useState<string>('rating')
    const [categoriesChangeState, setCategoriesChangeState] = React.useState<string>('all')
    const [loading, setLoading] = React.useState(true)
    const [page, setPage] = React.useState(1)
    console.log(page)

    React.useEffect(() => {
        setLoading(true)

        const categoriesFilter = categoriesChangeState === 'all' ? '' : `category=${categoriesChangeState}`
        const search = valueSearch ? `search=${valueSearch}` : ''
        const sortBy = sortChangeState === 'all' ? '' : `sortBy=${sortChangeState.replace('-', '')}`
        const order = sortChangeState === "-price" ? 'order=desc' : 'order=asc'


        fetch(`https://63b3fb469f50390584a335c8.mockapi.io/items?page=${page}&limit=8&${categoriesFilter}&${sortBy}&${order}&${search}`)
            .then(res => res.json())
            .then(data => {
                setStateFromServer(data)
                setLoading(false)
            })
        window.scrollTo(0, 0)
    }, [categoriesChangeState, sortChangeState, valueSearch, page])


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
                    <div className="content--container__title">
                        <h2 className="content__title">Все пиццы</h2>
                        <SearchInput setValueSearchInput={setValueSearchInput} valueSearchInput={valueSearch}/>
                    </div>
                    <ContentContainer state={stateFromServer} loading={loading}/>
                    <Pagination setPage={setPage} page={page}/>
                </div>
            </div>
        </>
    );
};

export default Home;