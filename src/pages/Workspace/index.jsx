import React, { forwardRef, useEffect, useState } from 'react';
import { ReactSortable } from "react-sortablejs";
import './styles.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faCopy, faTrash } from "@fortawesome/free-solid-svg-icons";
import Nav from '../../component/Nav/index';
import { BACKEND_URI } from '../../constant';
import axios from 'axios';
import { useParams } from 'react-router';

const Workspace = () => {
    const [state, setState] = useState([
        { id: 1, article: 1, paragraph: 0, name: "이 계약에 달리 정의되지 않는 한, 다음의 용어와 표현은 각각 다음과 같은 의미를 가진다." },
        { id: 2, article: 1, paragraph: 1, name: "정의 조항 또는 계약 본문에서 정의된 용어는 따옴표()로 묶어서 표기하고, 따옴표로 묶이지 아니한 용어의 의미는 일반적이고 사전적 의미로 해석한다. 다만, 따옴표가 누락된 것이 명백한 경우에는, 정의 조항에서 정의된 의미대로 해석한다." },
        { id: 3, article: 1, paragraph: 2, name: "계약서에 부속된 문서를 인용하는 경우에는 홀인용표(「,」)를, 본 계약서와는 독립된 또 다른 계약서나 문서를 인용하는 경우에는 겹인용표(『, 』)를 사용하여 표기한다." },
        { id: 4, article: 2, paragraph: 0, name: "“갑”은 기업경영자로서 “을”은 경영 컨설턴트로서 상호 신의와 성실의 원칙에 입각하여 계약업무가 성실히 수행될 수 있도록 협조하며, 상호간에 명예와 품위를 손상시키지 않도록 한다." },
        { id: 5, article: 2, paragraph: 1, name: "각 당사자는 본 계약에 따른 협력 과정상 지득 또는 입수한 상대방 당사자의 경영상의 정보 기타 일체의 영업 혹은 기술상의 정보, 고객에 대한 정보를 포함한 비밀 정보(이하, “비밀 정보”)에 대하여 업무상 비밀을 유지하여야 하며, 본 계약의 이행 이외의 다른 용도로 사용해서는 안 된다." },
        { id: 6, article: 2, paragraph: 2, name: "각 당사자는 상대방 당사자의 명시적인 서면 동의 없이는 어느 누구에게도 “비밀 정보”를 직접적이거나 간접적으로든, 불특정인 또는 특정인에게 공개적으로 또는 비공개적이든 유출하거나 누설하지 아니할 의무를 부담한다." },
        { id: 7, article: 2, paragraph: 3, name: "오직 다음 각호의 정보에 대하여서만 본조 제1항 및 제2항의 의무가 면제된다." },
        { id: 8, article: 2, paragraph: 4, name: "상호 사전 서면합의 없이는 계약체결 사실을 포함하여 본 계약관련 어떠한 내용도 “을”의 이익을 위해 사용하거나 외부에 알리지 못한다." },
        { id: 9, article: 2, paragraph: 5, name: "본조의 비밀유지 의무는 본 계약의 종료, 만료 또는 해지일 이후에도 계속적으로 유효한 것으로 한다." },
        { id: 10, article: 3, paragraph: 0, name: "각 당사자는 전항의 불가항력 사유로 인한 계약 불이행을 해소하도록 최선을 다하여야 한다." },
        { id: 11, article: 3, paragraph: 1, name: "각 당사자는 상대방 당사자의 명시적인 서면 동의 없이는 어느 누구에게도 “비밀 정보”를 직접적이거나 간접적으로든, 불특정인 또는 특정인에게 공개적으로 또는 비공개적이든 유출하거나 누설하지 아니할 의무를 부담한다." },
    ]);
    const params = useParams();

    const [form, setForm] = useState({
        email: '',
        password: '',
    })

    const CustomComponent = forwardRef((props, ref) => {
        return <div ref={ref}>{props.children}</div>;
    });

    const submit = (e) => {
        e.preventDefault();
        console.log(form);
    }

    const handleClick = (btn, item, i) => {
        let list = state;
        delete item.id;
        if (!item.paragraph) {
            for (i = 0; i < list.length; i++) {
                if (list[i].article > item.article) list[i].article++;
            }
        }
        else {
            for (i = 0; i < list.length; i++) {
                if (list[i].paragraph > item.paragraph) list[i].paragraph++;
            }
        }

        switch (btn) {
            case "+":
                item.content = "";
                list.splice(i + 1, 1, item);
                break;
            case "*":
                list.splice(i + 1, 1, item);
                break;
            case "-":
                list.splice(i, 1);
            // axios.delete(`${BACKEND_URI}/formitem/${state[i].id}`, { 'Content-Type': 'application/json' },).then(({ data }) => {
            //     console.log(data);
            //     return;
            // }).catch(err => console.error(err));
            // return;
        }
        setState(list);
    }
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }


    return <>
        <div className="flex-fill d-flex flex-column justify-content-center">
            <Nav />
            <div className="py-6">
                <div className="container bg-white p-5 w-75">
                    <h2 className="mb-5 text-center text-uppercase">샘플 계약서</h2>
                    <ReactSortable
                        list={state} setList={setState}
                        // here they are!
                        group="groupName"
                        animation={200}
                        delayOnTouchStart={true}
                        delay={2}
                    >
                        {state.map((item, i) => (
                            <div className={`text-start d-flex cursor-pointer justify-content-between item ${item.paragraph ? 'ml-5' : 'p-2 border'}`} key={item.id}>
                                <div className='d-flex h3' style={{ minWidth: "30px" }}>{item.paragraph ? "" : item.article + "조"}</div>
                                <span>{item.paragraph ? "ㅡ " : ""}{item.name}</span>
                                <div className='d-flex option'>
                                    <div className="p-1"><FontAwesomeIcon onClick={() => handleClick("+", item, i)} icon={faPlus} /></div>
                                    <div className="p-1"><FontAwesomeIcon onClick={() => handleClick("*", item, i)} icon={faCopy} /></div>
                                    <div className="p-1"><FontAwesomeIcon onClick={() => handleClick("-", item, i)} icon={faTrash} /></div>
                                </div>
                            </div>
                        ))}
                    </ReactSortable>
                </div>
                <div className="hr-text">{`©${new Date().getFullYear()} X-SLAYERgit `}</div>
            </div>
        </div>
    </>
}

export default Workspace;