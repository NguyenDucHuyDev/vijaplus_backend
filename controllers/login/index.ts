import { Request, Response } from 'express';


const view = ({req, res}: {req:Request, res: Response }) =>{
  res.send('Hello World!')
}

export default {
  view,
  middleware:[]
};  