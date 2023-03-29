import React, {useRef} from 'react';
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import ContentContainer from "../components/ContentContainer/ContentContainer";
import SearchInput from "../components/SearchInput/SearchInput";
import Pagination from "../components/Pagination/Pagination";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../redux/store";
import {pizzaApi} from "../api/api";
import qs from "qs"
import {useNavigate} from "react-router-dom";
import {ActionsFilterType, changeFilters} from "../redux/slices/filterSlice";

const Home = () => {
    const [valueSearch, setValueSearchInput] = React.useState('')
    const [stateFromServer, setStateFromServer] = React.useState([])
    const [loading, setLoading] = React.useState(true)

    //вытаскиваем стейт из redux toolkit
    const {categories, sort, page} = useSelector((state: RootState) => state.filterReducer)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const isParams = useRef(false)
    const isMounted = useRef(false)

    const fetchPizzas = async () => {
        setLoading(true)

        const categoriesFilter = categories === 'all' ? '' : `category=${categories}`
        const search = valueSearch ? `search=${valueSearch}` : ''
        const sortBy = sort === 'all' ? '' : `sortBy=${sort.replace('-', '')}`
        const order = sort === "-price" ? 'order=desc' : 'order=asc'



    }

    React.useEffect(() => {

        if (!isParams.current) {
            fetchPizzas()
        }

        isParams.current = false

        window.scrollTo(0, 0)
    }, [categories, sort, valueSearch, page])

    //если первого ренедра не было, не сохраняй парметры в URL, реагируй только на последующие действия
    React.useEffect(() => {
        if (isMounted.current) {
            const queryString = qs.stringify({
                page,
                categories,
                sort,
            })

            navigate(`?${queryString}`)
        }
        isMounted.current = true
    }, [categories, sort, page])

    //если был первый рендер, то проверяем URL и сохраняем параметры в Redux
    React.useEffect(() => {
        if (window.location.search) {
            const params = qs.parse(window.location.search.substring(1))

            dispatch(changeFilters({...params as ActionsFilterType}))
            isParams.current = true
        }
    }, [])


    return (
        <>
            <div className="content">
                <div className="container">
                    <div className="content__top">
                        <Categories/>
                        <Sort/>
                    </div>
                    <div className="content--container__title">
                        <h2 className="content__title">Все пиццы</h2>
                        <SearchInput setValueSearchInput={setValueSearchInput}/>
                    </div>
                    <ContentContainer state={stateFromServer} loading={loading}/>
                    <Pagination/>
                </div>
            </div>
        </>
    );
};

export default Home;