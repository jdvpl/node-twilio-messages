const { response } = require("express");
const twilio = require("twilio")(process.env.SID_ACCOUNT,process.env.AUTH_TOKEN);



const sendMessage=async(req,res=response)=>{
  const {numberTo,numberFrom, message} =req.body;

  try {
    const response=await twilio.messages.create({
      from:numberFrom,
      to:numberTo,
      body:message
    })
    
    res.json({numberTo,numberFrom,message,response})
  } catch (error) {
    console.log(error)
    res.status(500).json({msg: `Hubo un error al enviar mensaje`, error})
  }
  
}

  module.exports ={sendMessage}