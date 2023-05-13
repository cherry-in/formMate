import React, { useState } from 'react';
import './styles.scss';
import Nav from '../../component/Nav/index';

const Main = () => {

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
        <div className="h-100">
            <Nav />
            <div className="container-tight py-6">
                <form className="card card-md needs-validation" onSubmit={submit} autoComplete="off" noValidate>
                    <div className="card-body">
                        <h2 className="mb-5 text-center text-uppercase">Main</h2>

                        <div className="mb-3">
                            <label className="form-label">E-Mail</label>
                            <input
                                className="form-control has-error"
                                name="email"
                                type="email"
                                placeholder="Enter your email address"
                                autoComplete="off"
                                onChange={handleChange}
                                required
                            />
                            <div className="invalid-feedback">E-Mail field required.</div>
                        </div>
                        <div className="mb-2">
                            <label className="form-label">
                                Password
                        </label>
                            <input
                                type="password"
                                className="form-control has-error"
                                name="password"
                                placeholder="Password"
                                onChange={handleChange}
                                required
                            />
                            <div className="invalid-feedback">Password Field is required.</div>
                        </div>
                        <div className="mb-2">
                            <label className="form-check">
                                <input type="checkbox" className="form-check-input" />
                                <span className="form-check-label">Remember me</span>
                            </label>
                        </div>
                        <div className="form-footer">
                            <button type="submit" className="btn btn-primary btn-block" style={{ background: 'linear-gradient(to left, #B70000 0%, #144061 100%)' }}>
                                Se connecter
                        </button>
                        </div>
                    </div>
                </form>
                <div className="hr-text">{`©${new Date().getFullYear()} X-SLAYERgit `}</div>
            </div>
        </div>
    </>
}

export default Main;