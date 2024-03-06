const Task = require('../models/tasks')
const getAllTasks = async (req, res) => {
    try {
        const task = await Task.find({})
        //res.status(200).json({task:task})
        res.status(200).json({task})
    } catch(err) {
        res.status(500).json({message:err.message})
        //console.log(err)
    }
}

const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body)
        res.status(201).json({task})
    } catch(err) {
        res.status(500).json({message:err.message})
        //console.log(err)
    }

}

const getTask = (req, res) => {
    res.json({id:req.params.id})
}

const updateTask = (req, res) => {
    res.send('update task')
}

const deleteTask = (req, res) => {
    res.send('delete task')
}

module.exports = {getAllTasks, createTask, getTask, updateTask, deleteTask }