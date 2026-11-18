import jsonwebtoken from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const SECRET_KEY = process.env.SECRET_KEY;

const validarJWT = (request, response, next ) => {
    const token = request.headers.authorization;
    if( !token){
        response.status(401).json({msg: 'Falta el token'});
    }
    const jwt = token.split(' ')[1];
    console.log({jwt});
    jsonwebtoken.verify(jwt, SECRET_KEY, (error, decoded) => {
        if (error) {
            response.status(403).json({ msg: 'Token invalidooo'});
        }
        console.log({decoded});
        request.userId = decoded.id;
    })

    next();
}

export { validarJWT };