const apiRequest = async (url="",optionOpj=null,errMsg=null) => {
  try{
   const response=await fetch(url,optionOpj);
   if(!response.ok) throw Error("Please reload the app!")
  }
  catch(err){
    errMsg=err.msg
  }
  finally{
    return errMsg
  }
}

export default apiRequest