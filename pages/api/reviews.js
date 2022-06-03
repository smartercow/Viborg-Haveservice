import axios from "axios";

const api = {
    baseUrl: "http://localhost:5023/",
    apiKey: ""
}


export const getReviews = () => {

    let endpoint = "reviews"

    let response = axios.get(api.baseUrl + endpoint)
    .then(res => {
        //console.log(response);
        return res.data
    })
    .catch(error => {
        //console.log("FEJL", error)
        //return null
        throw new Error("Desværre - ingen by/postnummer")
    })

    return response
}