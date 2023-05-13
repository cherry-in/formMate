import React, { useState } from 'react';
import './styles.scss';
import Nav from '../../component/Nav/index';
import Footer from '../../component/Footer/index';

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
                <div className="card">
                    <div className="card-body">
                        <p className="text-">복작하고 어려운 계약서 작성은</p>
                        <h1 className="card-title">
                            FormMate에게 <br />맡기자!
                        </h1>
                        <a href="/workspace/new" className="btn btn-primary">계약서 작성하러 가기</a>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    </>
}

export default Main;