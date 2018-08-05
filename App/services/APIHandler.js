import {GET_NEWS_ENDPOINT} from "./API"

const methods = {
    GET: 'GET',
    POST: 'POST'
}
export function getNewsDataFromServer() {
    console.log("getNewsDataFromServer")
    return fetch(GET_NEWS_ENDPOINT, {
        method: methods.GET,
        timeout: 30 * 1000,
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(response => {
            console.log('API Response:\t', response);
            // return Promise.all([response, response.json()]);
            return response;
        })
        .catch(error => {
            console.log("errr is: ",error)
            console.warn(JSON.stringify(error));
            throw error;
        });
}
