import { Request, Response }  from 'express';
import { asyncHandler } from '../../utils/asyncHandler';
import { transporter } from '../../service/nodemailer';

const view = asyncHandler(async(req: Request, res: Response) =>{
  await transporter.sendMail({
    from: process.env.ACCOUNT_EMAIL,
    to: "nguyenduchuy.dev@gmail.com", 
    subject: "[vijaplus]Email verification", 
    text: "OTP của bạn là: 567",
  });
})

export default {
  view,
  middleware:[]
};  