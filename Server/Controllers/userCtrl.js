const User = require('../Modals/user')
const jwt = require('jsonwebtoken')
const nodemailer = require('nodemailer');
// const { mailer } = require('../Services/MAIL')


const userCtrl = {
    getUser: async (req, res) => {
        try {
            const user = await User.find()
            return res.send(user)
        } catch (error) {
            return res.status(500).json({ msg: error.message })
        }
    },
    postUser: async (req, res) => {
        try {
            const { name, email, password, phone, address } = req.body;
            if (!name || !email || !password || !phone || !address) {
                return res.status(400).json({ error: 'Please filled the field' })
            }
            const token = jwt.sign(req.body, process.env.SECRET)
            const url = `http://localhost:3001/verify/${token}`
            var mailOptions = {
                from: process.env.USER,
                to: email,
                subject: "Verify you email",
                html: `<a href="${url}">Verify your email</a>`
            }
          
            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
        console.log(error)
                } else {
                    console.log("mail send")
    }
})
            res.status(201).json({ token: token })


        } catch (error) {
            return res.status(500).json({ msg: error.message })
        }
    },
    verify: async (req, res) => {
        try {
            const { token } = req.body
            const user = jwt.verify(token, process.env.SECRET)
            res.json(user)
            const use = new User(user)
            use.save()
        } catch (error) {
            return res.status(500).json({ msg: error.message })

        }
    }
}
var transporter = nodemailer.createTransport({
    service: 'gmail',
    port: "465",
    secure: true, 
    secureConnection: false,
    auth: {
        user: process.env.USER,
        pass: process.env.PASS
    },
     tls: {
        rejectUnauthorized: false
    }
});

module.exports = userCtrl