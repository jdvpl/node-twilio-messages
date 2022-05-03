const { response } = require("express");


const sendMessage=async(req,res=response)=>{
  const {numberTo,numberFrom, message} =req.body;

  try {

    
    res.json({numberTo,numberFrom,message})
  } catch (error) {
    console.log(error)
    res.status(500).json({msg: `Hubo un error al enviar mensaje`, error})
  }
  
}

  module.exports ={sendMessage}