
const verifyKey = (request, response, next) => {
  const { key } = request.headers 
  if( key != process.env.KEY ) {
    return response.json({msg: "Key is invalid"})
  }
  
  return next()
}

export default verifyKey