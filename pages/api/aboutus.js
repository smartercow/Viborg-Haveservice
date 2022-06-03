import axios from "axios";

const api = {
    baseUrl: "http://localhost:5023/",
    apiKey: ""
}


export const getAbout = () => {

    let endpoint = "aboutus"

    let response = axios.get(api.baseUrl + endpoint)
    .then(res => {
        //console.log(response);
        return res.data
    })
    .catch(error => {
        //console.log("FEJL", error)
        //return null
        throw new Error("Fejl!")
    })

    return response
}

export const getServices = () => {

    let endpoint = "services"

    let response = axios.get(api.baseUrl + endpoint)
    .then(res => {
        //console.log(response);
        return res.data
    })
    .catch(error => {
        //console.log("FEJL", error)
        //return null
        throw new Error("Fejl")
    })

    return response
}