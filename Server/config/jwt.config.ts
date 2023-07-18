import jwt from "jsonwebtoken";

export const getToken = (payload: {email: string, code: string}) => {
    return jwt.sign(
        {data: payload}, 
        'SECRET',
        {expiresIn: '1h'}
    )  
};

export const getTokenData = (token: string) => {
    let data = null;
    jwt.verify(token, 'SECRET', (err, decoded) => {
        if (err) { console.log('Error al obtener data del token')}
        else {data = decoded}
    })
    return data;
}