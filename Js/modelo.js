import { URL } from "../config.js";

export const listar = async (endpoint)=>{
    const data = await fetch(`${URL}/${endpoint}`)
    const respo = await data.json();
    return respo;
}