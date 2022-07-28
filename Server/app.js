const express = require('express');
require('dotenv').config()
const cors = require('cors');
const app = express();

app.use(cors())
require('./db/connection');
app.use(express.json())
app.use('/product', require('./Routes/productRoute'))
app.use('/user', require('./Routes/userRoute'))

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})
