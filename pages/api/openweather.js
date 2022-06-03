import axios from 'axios';

const api = {
    baseUrl: "https://api.openweathermap.org/data/2.5/forecast?lat=56.162939&lon=10.203921&cnt=5&units=metric&appid=",
    apiKey: "64526fdbcf553f8c9193f1f4dc750bee"
}

export const vejretApi = () => {

    let response = axios.get( api.baseUrl + api.apiKey)
    .then( res => {
        return res.data
    })
    .catch( error => {
        throw new Error("Fejl i API!")
    })

    return response

}