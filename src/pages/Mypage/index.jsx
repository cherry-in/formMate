import React, { useState } from 'react';
import './styles.scss';
import Nav from '../../component/Nav/index';
import Footer from '../../component/Footer/index';
import Cards from '../../component/CardSlide';
import Category from '../../component/Category';

const Main = () => {
    const list = [{ id: "asdf", title: "test", category: "고용계약서", updated: "2023-05-12 22:47" }, { id: "asdf", title: "test", category: "고용계약서", updated: "2023-05-12 22:47" }, { id: "asdf", title: "test", category: "고용계약서", updated: "2023-05-12 22:47" }, { id: "asdf", title: "test", category: "고용계약서", updated: "2023-05-12 22:47" }, { id: "asdf", title: "test", category: "고용계약서", updated: "2023-05-12 22:47" }, { id: "asdf", title: "test", category: "고용계약서", updated: "2023-05-12 22:47" }, { id: "asdf", title: "test", category: "고용계약서", updated: "2023-05-12 22:47" }, { id: "asdf", title: "test", category: "고용계약서", updated: "2023-05-12 22:47" }, { id: "asdf", title: "test", category: "고용계약서", updated: "2023-05-12 22:47" }, { id: "asdf", title: "test", category: "고용계약서", updated: "2023-05-12 22:47" }];

    return <>
        <div className="h-100">
            <Nav />
            <div className="filling"></div>
            <div className="card main-card m-6">
                <div className="card-body main-card-body d-flex justify-content-between">
                    <div className='m-5'>
                        <h1 className="main-card-body-title card-title">
                            김계약 | Brian
                        </h1>
                        <ul className="main-card-body-text text-muted">
                            <li>Pairing 총책임자</li>
                            <li>이메일 주소: happyseal@skycc.ac.kr</li>
                        </ul>
                    </div>
                    <a className="main-card-button d-flex text-white">
                        <span className="main-card-button-div m-1 flex-column"> 보유계약서<h1>7개</h1> </span>
                        <span className="main-card-button-div m-1 flex-column"> 작성중 <h1>2개</h1> </span>
                    </a>
                    {/* <a href="/workspace/new" className="main-card-btn btn btn-primary">계약서 작성하러 가기</a> */}
                </div>
            </div>
            <div style={{ top: "-200px", position: "relative" }}>
                <Cards title="작성 중인 계약서" list={list} />
                <Cards title="보유 계약서" list={list} />
                <Category />
                <Footer />
            </div>
        </div>
    </>


}

export default Main;