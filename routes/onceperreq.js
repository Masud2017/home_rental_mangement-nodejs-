const onceperreq = (err,req,res,next)=> {
    console.log("Hello world this is a once per request middlware");
    next();
}
module.exports = onceperreq;