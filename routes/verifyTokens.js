import jwt from "jsonwebtoken";

export const verifyTokens = (req, res, next) => {
  const authHeader = req.headers.token;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.JWT_KEY, (error, user) => {
      if (error) {
        return res.status(403).json("Invalid Token");
      } else {
        req.user = user;
        next();
      }
    });
  } else {
    return res.status(401).json("You are not authenticated!");
  }
};

export const verifyTokenAndAuthorization = (req, res, next) => {
  verifyTokens(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("Not allowed to do that");
    }
  });
};

export const verifyTokenAndAdmin = (req, res, next) => {
  verifyTokens(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("Not allowed to do this");
    }
  });
};
