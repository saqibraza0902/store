const User = require('../Modals/user')

const userLogin = {
    login: async (req, res) => {
        try {
            const { email, password } = req.body
            const user = await User.findOne({
                verify: true,
                email,
                password
            })
            if (!user) {
                return res.status(400).json({ message: "Invalid email or password" })
            }
            console.log(user)
            return res.status(201).json({ message: "login successfully" })


        } catch (error) {
            return res.status(500).json({ msg: error.message })
        }
    }
}
module.exports = userLogin