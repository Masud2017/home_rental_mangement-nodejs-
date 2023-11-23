var viewsGroup = {};

viewsGroup.login = (req,res,next)=> {
    res.render('login');
}

viewsGroup.signup = (req,res,next) => {
    res.render('signup');
}

module.exports = viewsGroup;