const express = require('express')
const app = express()

const port = 3000
app.get('/hello', (req, res) => {
    res.send("we made it")
})

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})
