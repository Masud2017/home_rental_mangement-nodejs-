const AuthGuard = (req,res,next)=> {
    if (req.session.authorized) {
        next();
    } else {
        res.log("The user is not authorized to access this page so redirecting him to the login page.");
        res.redirect('/login');
    }
}

module.exports = AuthGuard;