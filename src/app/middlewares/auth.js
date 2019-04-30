module.exports = (req, res, next) => {
    // ok, we have a logged user
    if (req.session && req.session.user) {
        // res.locals is a global variable for all templates from nunjucks
        res.locals.user = req.session.user

        return next()
    }

    return res.redirect('/')
}
