import React, { useState } from 'react';
import './styles.scss';
import Nav from '../../component/Nav/index';
import Footer from "../../component/Footer/index";
import Cards from '../../component/Cards';
import Category from '../../component/Category';
import SearchInput from '../../component/SearchInput';

const Search = () => {

    const [form, setForm] = useState({
        email: '',
        password: '',
    })

    const list = [{ id: "asdf", title: "test", category: "고용계약서", updated: "2023-05-12 22:47" }, { id: "asdf", title: "test", category: "고용계약서", updated: "2023-05-12 22:47" }, { id: "asdf", title: "test", category: "고용계약서", updated: "2023-05-12 22:47" }, { id: "asdf", title: "test", category: "고용계약서", updated: "2023-05-12 22:47" }, { id: "asdf", title: "test", category: "고용계약서", updated: "2023-05-12 22:47" },{ id: "asdf", title: "test", category: "고용계약서", updated: "2023-05-12 22:47" }, { id: "asdf", title: "test", category: "고용계약서", updated: "2023-05-12 22:47" }, { id: "asdf", title: "test", category: "고용계약서", updated: "2023-05-12 22:47" }, { id: "asdf", title: "test", category: "고용계약서", updated: "2023-05-12 22:47" }, { id: "asdf", title: "test", category: "고용계약서", updated: "2023-05-12 22:47" }];

    return (
        <div className="">
            <div className="flex-container">
                <div className="">
                    <Nav />
                </div>
            </div>
            <div className='bg-primary p-5 text-center'>
                <h2 className="text-white">
                    일상 속에서 신뢰가 필요할 때,
                </h2>
                <h1 className='text-yellow'>FormMate와 간편하게 계약서 작성</h1>
                <SearchInput />
            </div>
            <Cards title="인기 계약서" list={list} />
            <Category />
            <Footer />
        </div>
    );
};

export default Search;