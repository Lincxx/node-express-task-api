const Task = require('../models/tasks')
const getAllTasks = async (req, res) => {
    try {
        const task = await Task.find({})
        //res.status(200).json({task:task})
        res.status(200).json({task})
    } catch(err) {
        res.status(500).json({message:err})
        //console.log(err)
    }
}

const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body)
        res.status(201).json({task})
    } catch(err) {
        res.status(500).json({message:err})
        //console.log(err)
    }

}

const getTask = async (req, res) => {
    try {
        //this is how you set an alias
        const {id:taskID} = req.params

        const task = await Task.findOne({_id:taskID})
        if(!task) {
            return res.status(404).json({message: `No task with id:${taskID}`})
        }
        res.status(200).json({task})
    } catch(err) {
        res.status(500).json({message:err})
    }
}

const deleteTask = async (req, res) => {
    try {
        const {id:taskID} = req.params
        const task = await  Task.findOneAndDelete({_id:taskID})
        if(!task) {
            return res.status(404).json({message: `No task with id:${taskID}`})
        }
        //res.status(200).json({task})
        res.status(200).json({task:null, status: 'success'})
    } catch (err) {
        res.status(500).json({message:err})
    }
}


const updateTask = async (req, res) => {
    try {
        const {id:taskID} = req.params

        const task = await Task.findOneAndUpdate({_id: taskID}, req.body, {new:true, runValidators:true})

        if(!task) {
            return res.status(404).json({message: `No task with id:${taskID}`})
        }

        res.status(200).json({task})
    }catch (err) {
        res.status(500).json({message:err})
    }
}

module.exports = {getAllTasks, createTask, getTask, updateTask, deleteTask }