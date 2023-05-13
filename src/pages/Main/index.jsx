import React, { useState } from 'react';
import './styles.scss';
import Nav from '../../component/Nav/index';
import Footer from '../../component/Footer/index';
import Cards from '../../component/CardSlide';
import Category from '../../component/Category';

const Main = () => {
    const list = [{ id: "asdf", title: "test", category: "고용계약서", updated: "2023-05-12 22:47" }, { id: "asdf", title: "test", category: "고용계약서", updated: "2023-05-12 22:47" }, { id: "asdf", title: "test", category: "고용계약서", updated: "2023-05-12 22:47" }, { id: "asdf", title: "test", category: "고용계약서", updated: "2023-05-12 22:47" }, { id: "asdf", title: "test", category: "고용계약서", updated: "2023-05-12 22:47" },{ id: "asdf", title: "test", category: "고용계약서", updated: "2023-05-12 22:47" }, { id: "asdf", title: "test", category: "고용계약서", updated: "2023-05-12 22:47" }, { id: "asdf", title: "test", category: "고용계약서", updated: "2023-05-12 22:47" }, { id: "asdf", title: "test", category: "고용계약서", updated: "2023-05-12 22:47" }, { id: "asdf", title: "test", category: "고용계약서", updated: "2023-05-12 22:47" }];

    return <>
        <div className="h-100">
            <Nav />
            <div className="container-tight py-6">
                <div className="card">
                    <div className="card-body">
                        <p className="text-">복작하고 어려운 계약서 작성은</p>
                        <h1 className="card-title">
                            FormMate에게 <br />맡기자!
                        </h1>
                        <a href="/workspace/new" className="btn btn-primary">계약서 작성하러 가기</a>
                    </div>
                </div>
            </div>
            <Cards title="작성 중인 계약서" list={list} />
            <Cards title="인기 계약서" list={list} />
            <Category />
            <Footer />
        </div>
    </>
}

export default Main;