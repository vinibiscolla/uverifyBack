import TokenService from "../services/token.service.js";

async function getToken(req, res, next) {
  try {
    res.send(await TokenService.getToken());
  } catch (error) {
    next(error);
  }
}

export default {
  getToken
};
