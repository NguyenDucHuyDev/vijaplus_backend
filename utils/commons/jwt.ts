// import jwt from 'jsonwebtoken';

// export const encryptToken = (data) => {  
//   const token = jwt.sign({
//     exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24* 7), // 7 Date
//     data:data
//   },process.env.JWT_SECRET_KEY);
//   return token;
// };

// export const decryptToken = (token) =>{
//   return jwt.verify(token, process.env.JWT_SECRET_KEY);
// };