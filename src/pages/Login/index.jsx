import React, { useState } from 'react';
import Nav from '../../component/Nav/index';
import './styles.scss';

const Login = () => {

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


    return <>
        <div className="">
            <Nav />
            <div className="" /* style="position:relative" */>
                <div className="filling"></div>
                <form className="card card-md bg-transparent needs-validation" onSubmit={submit} autoComplete="on" /* style="position:absolute" */ noValidate>
                    <div className="card-body">
                        <div class="bg-img"></div>

                        <h3 className="text-center text-uppercase">무료로 빠른 계약서 작성,</h3>
                        <h1 className='text-blue text-center mb-5'>FormMate와 함께!</h1>

                        <div className="mb-3">
                            <input
                                className="form-control has-error"
                                name="email"
                                type="email"
                                placeholder="아이디"
                                autoComplete="off"
                                onChange={handleChange}
                                required
                            />
                            <div className="invalid-feedback">E-Mail field required.</div>
                        </div>
                        <div className="mb-2">
                            <input
                                type="password"
                                className="form-control has-error"
                                name="password"
                                placeholder="비밀번호"
                                onChange={handleChange}
                                required
                            />
                            <div className="invalid-feedback">Password Field is required.</div>
                        </div>
                        <div className="form-footer">
                            <button type="submit" className="btn btn-primary btn-block" >
                                로그인
                                <div className=''></div>
                            </button>
                            <a href='/signup' className="hr-text">회원가입 하러 가기</a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </>
}

export default Login;