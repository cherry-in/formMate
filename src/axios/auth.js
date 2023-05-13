import axios from "axios"

export const register = async (
    email,
    password,
    name,
    birth,
    sex,
    contact,
    address,
    job
) => {
    try {
        await axios.post(`${BACKEND_URI}/auth/register`, {
            email,
            password,
            name,
            birth,
            sex,
            contact,
            address,
            job
        })
    } catch (err) {
        if (err.response.status === 409)
            alert("이메일 중복")
    }
}

export const login = async (
    email,
    password
) => {
    try {
        await axios.post(`${BACKEND_URI}/auth/login`, {
            email, password
        })
    } catch (err) {
        if (err.response.status === 403 || err.response.status === 404)
            alert("없는 계정이거나 비밀번호가 틀립니다.")
    }
}

export const logout = async () => {
    try {
        await axios.delete(`${BACKEND_URI}/auth/logout`)
    } catch (err) {
    }
}