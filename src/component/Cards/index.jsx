import React, { useState } from 'react';
import rightArrow2 from "../../assets/rightArrow2.png";
import Card from "../../component/Card/index";

const Cards = (props) => {
    const { title, list } = props;
    return (
        <div className="p-3">
            <a className="p-3 d-flex">
                <div className="h2 m-0">{ title }</div>
                <img className="ml-3 my-auto" width={18} height={18} src={rightArrow2} />
            </a>
            <div className="d-flex w-100 overflow-auto">
                {list.map((e,i)=><Card key={i} data={e} />
                )}
            </div>
        </div>
    );
};

export default Cards;