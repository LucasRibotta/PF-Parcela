import jwt, { Secret } from "jsonwebtoken";

interface TokenPayload {
  data: any;
}

const getToken = (payload: any): string => {
  return jwt.sign(
    {
      data: payload,
    },
    'SECRET' as Secret,
    { expiresIn: '1h' }
  );
};

const getTokenData = (token: string): any => {
  let data: any = null;
  jwt.verify(token, 'SECRET' as Secret, (err, decoded) => {
    if (err) {
      console.log('error al obtener data del token');
    } else {
      data = decoded;
    }
  });
  return data;
};

export {
  getToken,
  getTokenData,
};