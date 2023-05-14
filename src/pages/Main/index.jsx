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
            <div className="filling"></div>
            <div className="card main-card">
                <div className="card-body main-card-body">
                    <p className="main-card-body-text text-">복잡하고 어려운 계약서 작성은</p>
                    <h1 className="main-card-body-title card-title">
                        FormMate에게 <br />맡기자!
                    </h1>
                    <a className="main-card-button">
                        <div className="main-card-button-div">
                            <span className="main-card-button-text"> 계약서 작성하러 가기 </span>
                            <img className="main-card-button-img" src="https://i.ibb.co/NLCczcn/image.png"></img>
                        </div>
                    </a>
                    {/* <a href="/workspace/new" className="main-card-btn btn btn-primary">계약서 작성하러 가기</a> */}
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