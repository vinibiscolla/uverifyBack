import TokenRepository from "../repositories/token.repository.js";
import axios from "axios";

async function getToken(ApplicationKey, BasicAuth) {
    var tokenResult;

    var config = {
        method: "POST",
        url: urlFG + urlSuffix,
        headers: {
            "Content-Type": "application/json",
            "x-ApplicationKey": ApplicationKey,
            "Authorization": "Basic " + BasicAuth,
        },
    };

    axios(config)
        .then(function (response) {
            tokenResult = response.data;
            TokenRepository.saveToken(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });

    return tokenResult;
}

export default {
    getToken
};