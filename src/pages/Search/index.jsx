import React, { useEffect, useState } from 'react';
import './styles.scss';
import Nav from '../../component/Nav/index';
import Footer from "../../component/Footer/index";
import Cards from '../../component/CardGrid';
import Category from '../../component/Category';
import SearchInput from '../../component/SearchInput';

const Search = () => {
    const [list, setList] = useState([])
    const data = [{ id: "asdf", title: "test", category: "고용계약서", updated: "2023-05-12 22:47" }, { id: "asdf", title: "test", category: "고용계약서", updated: "2023-05-12 22:47" }, { id: "asdf", title: "test", category: "고용계약서", updated: "2023-05-12 22:47" }, { id: "asdf", title: "test", category: "고용계약서", updated: "2023-05-12 22:47" }, { id: "asdf", title: "test", category: "고용계약서", updated: "2023-05-12 22:47" }, { id: "asdf", title: "test", category: "고용계약서", updated: "2023-05-12 22:47" }, { id: "asdf", title: "test", category: "고용계약서", updated: "2023-05-12 22:47" }, { id: "asdf", title: "test", category: "고용계약서", updated: "2023-05-12 22:47" }, { id: "asdf", title: "test", category: "고용계약서", updated: "2023-05-12 22:47" }];
    useEffect(() => {
        ///api
        setList(data);
    }, []);
    const add = () => { setList([...list, ...data]) }
    return (
        <div className="text-center">
            <Nav />
            <SearchInput className="bg-blue" />
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