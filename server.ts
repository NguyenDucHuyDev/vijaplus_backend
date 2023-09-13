//import library
import express from 'express';
import dotenv  from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';

// import path handle all file
import routers from './routers/index.ts';
import { responseFailed } from './utils/commons/response.ts';

//
dotenv.config();
// console.log(process.env.DATABASE_URL)
const app: any = express();

// express middleware
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.urlencoded({ extended: true })); // parse form from client -> server parse with object in js
// app.use(express.static("storage"));
app.use(cors());
// routers
routers.forEach(router =>{
  app[router.method](router.path, router.controller.middleware, router.controller.view);
});

// error in express
app.use(({err, req, res, next} :{ err:any, req:any, res: any, next: any}) => {  
  if(err) return res.json(responseFailed(err));
});

export default app;