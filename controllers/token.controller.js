import TokenService from "../services/token.service.js";

async function getToken(req, res, next) {
  try {
    const ApplicationKey = req.query.applicationKey;
    const BasicAuth = req.query.basicAuth;

    if (!ApplicationKey && !BasicAuth) {
      throw new Error("Missing params");
    }

    res.send(await TokenService.getToken(ApplicationKey, BasicAuth));
  } catch (error) {
    next(error);
  }
}

export default {
  getToken
};
