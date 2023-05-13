import React, { useState } from 'react';
import './styles.scss';
import Nav from '../../component/Nav/index';
import rightArrow2 from "../../assets/rightArrow2.png";
import Card from "../../component/Card/index";
import Footer from "../../component/Footer/index";

const Search = () => {

    const [form, setForm] = useState({
        email: '',
        password: '',
    })

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

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
                <div className="d-flex justify-content-between">
                    <select name="type" defaultValue="1" className='btn btn-white'>
                        <option value="1">유형</option>
                        <option value="">옵션1</option>
                        <option value="">옵션2</option>
                        <option value="">옵션3</option>
                    </select>
                    <div className="input-icon w-100 pl-2">
                        <input type="text" value="" onChange={handleChange} className="form-control form-control-rounded" placeholder="검색하기" />
                        <span className="input-icon-addon">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path><path d="M21 21l-6 -6"></path></svg>
                        </span>
                    </div>
                </div>
            </div>
            <a className="p-3 d-flex">
                <div className="h2 m-0">인기 샘플 계약서</div>
                <img className="ml-3 my-auto" width={18} height={18} src={rightArrow2} />
            </a>
            <div className="d-flex w-100 overflow-auto">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <a className="px-2 d-flex">
                <div className="h2 m-0">계약 카테고리</div>
                <img className="ml-3 my-auto" width={18} height={18} src={rightArrow2} />
            </a>
            <div className='d-flex mx-2'>
                <a className='m-1 py-2 px-1 w-25 btn btn-primary btn-pill text-white'># 근로계약</a>
                <a className='m-1 py-2 px-1 w-25 btn btn-primary btn-pill text-white'># 차용증</a>
                <a className='m-1 py-2 px-1 w-25 btn btn-primary btn-pill text-white'># 내용증명</a>
                <a className='m-1 py-2 px-1 w-25 btn btn-primary btn-pill text-white'># 근로계약서</a>
            </div>
            <div className='d-flex mx-2'>
                <a className='m-1 py-2 px-1 w-25 btn btn-primary btn-pill text-white'># 근로계약서</a>
                <a className='m-1 py-2 px-1 w-25 btn btn-primary btn-pill text-white'># 근로계약서</a>
                <a className='m-1 py-2 px-1 w-25 btn btn-primary btn-pill text-white'># 근로계약서</a>
                <a className='m-1 py-2 px-1 w-25 btn btn-primary btn-pill text-white'># 근로계약서</a>
            </div>
            <Footer />
        </div>
    );
};

export default Search;