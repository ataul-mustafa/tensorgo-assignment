const jwt = require('jsonwebtoken');

exports.ensureAuth = (req, res, next) =>{
    
    //getting jwt token sent from frontend
    const token = req.headers.authorization;
    if(!token){
        return res.status(401).json({error: "Please authenticate yourself to access this page"});
    }

    //verifying jwt token and access data
    const user = jwt.verify(token, process.env.JWT_SECRET_KEY);

    req.user = user;
    next();
}
  