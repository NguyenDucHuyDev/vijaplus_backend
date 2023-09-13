
// export json return to client data Failed
export const responseFailed = ({messages}:{messages:any}) => {  
  return {
    "status": false,
    "message": "Something went wrongs!",
    "errors": messages
  };
};    
 // export json return to client data Success
export const responseSuccess = ({data}:{data:any}) => {
  return {
    "status": true,
    "data": data
  };        
};
    