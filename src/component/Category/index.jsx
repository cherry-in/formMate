import React, { useState } from 'react';
import rightArrow2 from "../../assets/rightArrow2.png";

const Category = () => {
    return (
        <div className="p-3">
            <a className="p-3 d-flex">
                <div className="h2 m-0">계약서 카테고리</div>
                <img className="ml-3 my-auto" width={18} height={18} src={rightArrow2} />
            </a>
            <div className='d-flex ml-2'>
                <a className='m-1 py-2 px-1 w-25 btn btn-primary btn-pill text-white'># 근로계약</a>
                <a className='m-1 py-2 px-1 w-25 btn btn-primary btn-pill text-white'># 차용증</a>
                <a className='m-1 py-2 px-1 w-25 btn btn-primary btn-pill text-white'># 내용증명</a>
                <a className='m-1 py-2 px-1 w-25 btn btn-primary btn-pill text-white'># 근로계약서</a>
            </div>
            <div className='d-flex ml-2'>
                <a className='m-1 py-2 px-1 w-25 btn btn-primary btn-pill text-white'># 근로계약서</a>
                <a className='m-1 py-2 px-1 w-25 btn btn-primary btn-pill text-white'># 근로계약서</a>
                <a className='m-1 py-2 px-1 w-25 btn btn-primary btn-pill text-white'># 근로계약서</a>
                <a className='m-1 py-2 px-1 w-25 btn btn-primary btn-pill text-white'># 근로계약서</a>
            </div>
        </div>
    );
};

export default Category;