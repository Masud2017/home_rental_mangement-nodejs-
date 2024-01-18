var viewsGroup = {};

viewsGroup.login = (req,res,next)=> {
    res.render('login');
}

viewsGroup.signup = (req,res,next) => {
    res.render('signup');
}

viewsGroup.dashboard = (req,res,next) => {
    res.render('dashboard');
}

module.exports = viewsGroup;