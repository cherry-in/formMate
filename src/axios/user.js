import axios from "axios"

export const getUser = async (userId) => {
    try {
        const userData = await axios.get(`${BACKEND_URI}/user/${userId}`)
    } catch (err) {

    }

    return userData
}
