const express = require('express')
const router = new express.Router()
const Task = require('../models/task')
const auth = require('../middleware/auth')

router.post('/tasks', auth, async (req, res) => {
    const task = new Task({
        ...req.body,
        owner: req.user._id
    })
    try {
        await task.save()
        res.status(201).send(task)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/tasks', auth, async (req, res) => {
    try {
        await req.user.populate('tasks').execPopulate()
        await req.user.tasks[0].populate('owner').execPopulate()
        console.log(req.user.tasks[0])
        res.send(req.user.tasks)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router