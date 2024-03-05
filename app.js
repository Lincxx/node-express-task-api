const express = require('express')
const app = express()

const tasks = require('./routes/tasks')

//port for server
const port = 3000

//Middlware
//sending json
app.use(express.json())
//add the root/base route
app.use('/api/v1/tasks', tasks)

app.get('/hello', (req, res) => {
    res.send("we made it")
})




// app.get('/api/v1/tasks')          - get all tasks
// app.post('/api/v1/tasks')         - create new task
// app.get('/api/v1/tasks/:id')      - get single task
// app.patch('/api/v1/tasks/:id')    - update task
// app.delete('/api/v1/tasks/:id')   - delete task

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})
