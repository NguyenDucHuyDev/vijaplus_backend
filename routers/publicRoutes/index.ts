import login from '../../controllers/login/index.ts';
import register from '../../controllers/register/index.ts';

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
];

export default publicRoutes;