import authRoutes from './authRoutes/index.ts';
import publicRoutes from './publicRoutes/index,.ts';


export default [
  ...authRoutes,
  ...publicRoutes,
//   ...investorsRoutes,
//   ...startupsRoutes
]