//error handling function
const errorhandler=(err,req,res,next)=>{
    console.error(err.stack);
    res.status(err.status || 500 ).json({
        status:false,
        message:err.message
    })
}

module.exports=errorhandler


