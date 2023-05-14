import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Cards from '../../component/CardGrid';
import Footer from "../../component/Footer/index";
import Nav from '../../component/Nav/index';
import SearchInput from '../../component/SearchInput';
import { BACKEND_URI } from '../../constant';
import './styles.scss';

const Search = () => {
    const [searchString, setSearchString] = useState("")
    const [from, setFrom] = useState(0)
    const [loading, setLoading] = useState(false)
    const [list, setList] = useState([])
    const onClick = () => {
        ///api
        setLoading(true)
        console.log({ searchString, from, size: 10 })
        axios.post(`${BACKEND_URI}/form/search`, { searchString, from, size: 10 }, { 'Content-Type': 'application/json' })
            .then(({ data }) => {
                setList([...data])
                setFrom(0)
                setLoading(false)
            }).catch(err => console.error(err));
    }
    const add = () => {
        if (!loading) {
            setLoading(true)
            console.log()
            axios.post(`${BACKEND_URI}/form/search`, { searchString, from: from + 10, size: 10 }, { 'Content-Type': 'application/json' })
                .then(({ data }) => {
                    console.log(data)
                    setList([...list, ...data])
                    setFrom(from + 10)
                    setLoading(false)
                }).catch(err => console.error(err));
        }
    }
    return (
        <div className="text-center">
            <Nav />
            <SearchInput searchString={searchString} setSearchString={setSearchString} onClick={onClick} className="bg-blue" />
            <div className='bg-primary p-5 text-center'>
                <h2 className="text-white">
                    일상 속에서 신뢰가 필요할 때,
                </h2>
                <h1 className='text-yellow'>FormMate와 간편하게 계약서 작성</h1>
            </div>
            <Cards title="검색 결과" list={list} />
            <div onClick={add} className="btn btn-primary mb-5">검색 결과 더보기</div>
            <Footer />
        </div>
    );
};

export default Search;