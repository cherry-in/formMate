import React, { useState } from 'react';

const SearchInput = () => {

    const [form, setForm] = useState({
        email: '',
        password: '',
    })

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    return (
        <div className="d-flex justify-content-between px-3">
            <select name="type" defaultValue="1" className='btn btn-white mx-2 col-2'>
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
    );
};

export default SearchInput;