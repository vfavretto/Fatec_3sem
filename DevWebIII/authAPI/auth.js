const jsonwebtoken = require("jsonwebtoken");

exports.PRIVATE_KEY = "1010FFF";
exports.user = {
  name: "Victor Favretto",
  email: "victor.favretto@mail.com",
};

exports.tokenValited = (resquest, response, next) => {
  console.log("Chegou");
  const [, token] = resquest.headers.authorization?.split("") || ["", ""];

  if (!token) return response.status(401).send("Invalid");

  try {
    const payload = jsonwebtoken.verify(token, this.PRIVATE_KEY);
    const userIdFromToken = typeof payload != "string" && payload.user;

    if (!user && userIdFromToken) {
      return response.send(401).json("Token is invalid");
    }

    request.headers["user"] = payload.user;

    return next();
  } catch (error) {
    console.log(error);
    return response.status(401).json("Token is invalid");
  }
};
