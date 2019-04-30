const { User } = require('../models') // use index.js which import all models

class UserController {
    create (req, res) {
        return res.render('auth/signup')
    }

    async store (req, res) {
        const { filename } = req.file

        await User.create({ ...req.body, avatar: filename })

        return res.redirect('/')
    }
}

module.exports = new UserController()
