import app from './server.ts';
import otpGenerator from 'otp-generator'

const PORT_SERVER = 5000;

console.log(otpGenerator.generate(6, {lowerCaseAlphabets:false, upperCaseAlphabets: false, specialChars: false,  }))

app.listen(PORT_SERVER, () => {
  console.log(`Server is running at ${PORT_SERVER}`);
});