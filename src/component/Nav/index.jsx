import React, { useState } from 'react';
import './styles.scss';

const Nav = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  })


  const submit = (e) => {
    e.preventDefault();
    console.log(form);
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  }


  return (
    <div className='bg-primary'>
      <div className='d-flex justify-content-around nav'>
        <a className='logo' href='/'></a>

        <a href='/search' className='text-white nav-font p-2'>계약서 검색</a>
        <a href='/workspace/new' className='text-white nav-font p-2'>계약서 작성</a>
        
        <div className="nav-input-icon">
          <input type="text" value="" onChange={handleChange} className="nav-input form-control nav-form-control-rounded" placeholder="검색하기"/>

            {/* <span className="input-icon-addon">
              <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path><path d="M21 21l-6 -6"></path></svg>
            </span> */}
        </div>

        <div className="login-signup">
          <a className='text-white nav-font' href='/login'>로그인</a>
          <span className='text-white nav-font'> / </span>
          <a className='text-white nav-font' href='/signup'>회원가입</a>
        </div>
      </div>

      <div className='line'></div>
    </div>

  )
}

export default Nav;