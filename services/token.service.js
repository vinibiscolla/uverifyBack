import TokenRepository from "../repositories/worker.repository.js";

async function getToken() {
return await TokenRepository.getToken();
}

export default {
    getToken
};