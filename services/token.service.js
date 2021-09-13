import TokenRepository from "../repositories/worker.repository.js";
import axios from "axios";

async function getToken(ApplicationKey, BasicAuth) {

    var config = {
        method: "POST",
        url: urlFG + urlSuffix,
        headers: {
            "Content-Type": "application/json",
            "x-ApplicationKey": ApplicationKey,
            "Authorization": BasicAuth,
        },
    };

    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
            return JSON.stringify(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });

    // return await TokenRepository.getToken();
}

export default {
    getToken
};