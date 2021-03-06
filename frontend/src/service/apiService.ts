import {LoginData, LoginResponse, UserCreationData} from "./models";
import axios, {AxiosResponse} from "axios";

export const registerUser = (userCreationData: UserCreationData) =>{
    return axios.post("api/users", userCreationData)
}

export const loginUser = (loginData: LoginData) =>{
    return axios.post("api/auth/login", loginData)
        .then((response: AxiosResponse<LoginResponse>) => response.data)
}