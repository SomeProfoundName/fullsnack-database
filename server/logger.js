const logger = (req, res, next) => {
    console.log(req.method, req.OriginalUrl);
    next();
}

module.exports=logger