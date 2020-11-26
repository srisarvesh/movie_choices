import http from "./httpService";
import { apiUrl } from "../config.json";
import { func } from "prop-types";


const apiEndpoint = apiUrl + "/users";

export function register(user){
    return http.post(apiEndpoint,{
        email:user.username,
        password:user.password,
        name:user.name
    })
}