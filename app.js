
const express = require('express')
const app = express()
const port = 3030
app.use(express.static('public'));
const postRouter = require('./routers/posts')


app.use('/api/posts', postRouter)


app.get('/', (req, res) => {

    res.send('Welcome to my blog')
})


app.listen(port, () => {
    console.log(`Server in ascolto sulla porta http://localhost:${port}`)
})