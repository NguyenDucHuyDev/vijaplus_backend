import login from '../../controllers/login/index.ts';
import register from '../../controllers/register/index.ts';
import sendMail from '../../controllers/authenEmail/index.ts'

const publicRoutes = [
  {
    method:"post",
    path:"/api/login",
    controller:login
  },
  {
    method:"post",
    path:"/api/register",
    controller: register
  },
  {
    method:"post",
    path:"/api/send-email",
    controller: sendMail
  },
];

export default publicRoutes;