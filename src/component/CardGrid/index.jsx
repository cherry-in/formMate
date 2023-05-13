import React, { useState } from 'react';
import rightArrow2 from "../../assets/rightArrow2.png";
import Card from "../Card/index";

const CardGrid = (props) => {
    const { title, list } = props;
    return (
        <div className="p-3">
            <a className="p-3 d-flex">
                <div className="h2 m-0">{ title }</div>
                <img className="ml-3 my-auto" width={18} height={18} src={rightArrow2} />
            </a>
            <div className="w-100 d-flex flex-wrap justify-content-center">
                {list.map((e,i)=><Card key={i} data={e} />
                )}
            </div>
        </div>
    );
};

export default CardGrid;