import React, { useState } from 'react';
import './styles.scss';
import axios from '../../axios'
import Nav from '../../component/Nav/index';
import bcrypt from 'bcryptjs'
import { BACKEND_URI } from '../../constant';

const salt = bcrypt.genSaltSync(10)

const SignUp = () => {

    const [form, setForm] = useState({
        email: '',
        name: '',
        password: '',
        birth: '',
        sex: '',
        contact: '',
        address: '',
        job: '',
        purpose: '',
    })

    const submit = (e) => {
        let hashingForm = form;
        hashingForm.password = bcrypt.hashSync(form.password, '$2a$10$CwTycUXWue0Thq9StjUM0u')
        e.preventDefault();
        return axios.post(`${BACKEND_URI}/auth/register`, hashingForm, { 'Content-Type': 'application/json' },).then(({ data }) => {
            console.log(data);
            return JSON.stringify(data, null, 2);
        }).catch(err => console.error(err));
    }

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }


    return <>
        <div className="flex-fill d-flex flex-column justify-content-center">
            <Nav />
            <div className="filling"></div>
            <form className="signup-card card card-md needs-validation" onSubmit={submit} autoComplete="off" noValidate>
                <div className="signup-card-body card-body">
                    <h3 className="text-center text-uppercase signup-text-black">무료로 빠른 계약서 작성,</h3>
                    <h1 className='text-blue text-center mb-5 signup-text-blue'>FormMate와 함께!</h1>

                    <div className="mb-3 signup-form-set">
                        <label className="form-label signup-form-label">이메일 주소</label>
                        <input
                            className="form-control has-error signup-form-blank"
                            name="email"
                            type="email"
                            placeholder="  example@skycc.kr"
                            autoComplete="off"
                            onChange={handleChange}
                            required
                        />
                        <div className="invalid-feedback">E-Mail field required.</div>
                    </div>

                    <div className="mb-3 signup-form-set">
                        <label className="form-label signup-form-label">이름</label>
                        <input
                            className="form-control has-error signup-form-blank"
                            name="name"
                            type="name"
                            placeholder="  성명입력"
                            autoComplete="off"
                            onChange={handleChange}
                            required
                        />
                        <div className="invalid-feedback">Name field required.</div>
                    </div>

                    <div className="mb-2 signup-form-set">
                        <label className="form-label signup-form-label">
                            비밀번호
                        </label>
                        <input
                            type="password"
                            className="form-control has-error signup-form-blank"
                            name="password"
                            placeholder="  ********"
                            onChange={handleChange}
                            required
                        />
                        <div className="invalid-feedback">Password Field is required.</div>
                    </div>
                    <div className="mb-2 signup-form-set">
                        <label className="form-label signup-form-label">
                            비밀번호 재확인
                        </label>
                        <input
                            type="password"
                            className="form-control has-error signup-form-blank"
                            name="password"
                            placeholder="  ********"
                            onChange={handleChange}
                            required
                        />
                        <div className="invalid-feedback">Password Field is required.</div>
                    </div>

<<<<<<< HEAD
                    <div className="mb-2 signup-form-set">
                        <label className="form-label signup-form-label">
                            주민등록번호 (뒷자리 첫번째까지)
                        </label>
                        <div className='d-flex'>
=======
                        <div className="mb-2">
                            <label className="form-label">
                                주민등록번호 (뒷자리 첫번째까지)
                            </label>
                            <div className='d-flex'>
                                <input
                                    type="text"
                                    className="form-control has-error"
                                    name="birth"
                                    maxLength={6}
                                    placeholder=""
                                    onChange={handleChange}
                                    required
                                />
                                <div className="invalid-feedback">Password Field is required.</div>
                                <div className='p-2'>-</div>
                                <input
                                    type="text"
                                    className="form-control has-error p-1 w-4"
                                    name="sex"
                                    maxLength={1}
                                    placeholder=""
                                    onChange={handleChange}
                                    required
                                />
                                XXXXXX
                                <div className="invalid-feedback">Password Field is required.</div>
                            </div>
                        </div>

                        <div className="mb-3">
                            <label className="form-label">연락처</label>
                            <input
                                className="form-control has-error"
                                name="contact"
                                type="text"
                                placeholder="연락처"
                                autoComplete="off"
                                onChange={handleChange}
                                required
                            />
                            <div className="invalid-feedback">Address field required.</div>
                        </div>

                        <div className="mb-3">
                            <label className="form-label">주소</label>
>>>>>>> 35789f6c5c0702d6f8ab7a7694116cc9938f612b
                            <input
                                type="text"
                                className="form-control has-error signup-form-blank signup-form-blank-idnumfront"
                                name="birth"
                                maxLength={6}
                                placeholder="   ⚫︎    ⚫︎    ⚫︎    ⚫︎    ⚫︎    ⚫︎ "
                                onChange={handleChange}
                                required
                            />
                            <div className="invalid-feedback">Password Field is required.</div>
                            <div className='p-2, signup-form-blank-hiphen'>-</div>
                            <input
                                type="text"
                                className="form-control has-error p-1 w-4 signup-form-blank signup-form-blank-idnumback"
                                name="sex"
                                maxLength={1}
                                placeholder="   ⚫︎"
                                onChange={handleChange}
                                required
                            />
                            <p className="signup-form-idbacknum-xpadding"></p>
                            <div className="invalid-feedback">Password Field is required.</div>
                        </div>
                    </div>

                    <div className="mb-3 signup-form-set">
                        <label className="form-label signup-form-label">주소</label>
                        <input
                            className="form-control has-error signup-form-blank"
                            name="address"
                            type="text"
                            placeholder="  상세주소입력"
                            autoComplete="off"
                            onChange={handleChange}
                            required
                        />
                        <div className="invalid-feedback">Address field required.</div>
                    </div>

                    <div className="mb-3 signup-form-set">
                        <label className="form-label signup-form-label">직업</label>
                        <input
                            className="form-control has-error signup-form-blank"
                            name="job"
                            type="select"
                            placeholder="  직업입력"
                            autoComplete="off"
                            onChange={handleChange}
                            required
                        />
                        <div className="invalid-feedback">Job field required.</div>
                    </div>

                    <div className="mb-3 signup-form-set">
                        <label className="form-label signup-form-label">목적 (중복선택 가능)</label>
                        <input
                            className="has-error"
                            name="purpose"
                            type="checkbox"
                            id="test1"
                            onChange={handleChange}
                            required
                        />
                        <label htmlFor="test1" className="signup-form-usechecklist-item">과외</label>
                        <br />
                        <input
                            className="has-error"
                            name="purpose"
                            type="checkbox"
                            id="test2"
                            onChange={handleChange}
                            required
                        />
                        <label htmlFor="test2" className="signup-form-usechecklist-item">중고거래</label>
                        <br />
                        <input
                            className="has-error"
                            name="purpose"
                            type="checkbox"
                            id="test3"
                            onChange={handleChange}
                            required
                        />
                        <label htmlFor="test3" className="signup-form-usechecklist-item">기타</label>
                        <br />
                        <div className="invalid-feedback">Purpose field required.</div>
                    </div>

                    <a className="text-center signup-button">
                        <button type="submit" className="btn btn-primary signup-button signup-button-div">
                            <span className="signup-button-text"> 회원가입 하기 </span>
                            <img className="signup-button-img" src="https://i.ibb.co/NLCczcn/image.png"></img>
                        </button>
                    </a>

                </div>
            </form>
        </div>
    </>
}

export default SignUp;