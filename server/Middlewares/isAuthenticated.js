import jwt from "jsonwebtoken";

const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(400).json({
        message: "User not Autheticat",
        Success: false,
      });
    }
    const deCode = await jwt.verify(token, process.env.SECRET_KEY);
    // console.log("token",token);
    
    if (!deCode) {
      return res.status(400).json({
        message: "Invalid token",
      });
    }
    req.id = deCode.userId;
    // console.log("req.id",deCode.userId);
    
    next();
  } catch (error) {
    console.log(error)
  }
};

export default isAuthenticated;
// 66c035267bbe6a2734c6fc0b
// 66c03858312406bf0fd04856