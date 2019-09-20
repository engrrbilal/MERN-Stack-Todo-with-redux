const express = require('express');
const router = express.Router();
const { Todo, validate } = require('../models/todos');

// get all todos
router.get('/', async(req, res) => {
    const todos = await Todo.find();
    res.send(todos);
});
// post
router.post('/', async(req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let todo = new Todo({
        todo_description: req.body.todo_description,
        todo_responsible: req.body.todo_responsible,
        todo_priority: req.body.todo_priority,
        todo_completed: req.body.todo_completed
    });
    todo = await todo.save();
    res.send(todo);
});
// update
router.put('/:id', async(req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    const todo = await Todo.findByIdAndUpdate(req.params.id, {
        todo_description: req.body.todo_description,
        todo_responsible: req.body.todo_responsible,
        todo_priority: req.body.todo_priority,
        todo_completed: req.body.todo_completed
    }, {
        new: true
    })
    if (!todo) return res.status(404).send('The todo with the given ID was not found.');
    res.send(todo);
});
router.delete('/:id', async(req, res) => {
    const todo = await Todo.findByIdAndRemove(req.params.id);
    // const todo = await Genres.deleteOne({_id:req.body.id});
    if (!todo) return res.status(404).send('The todo with the given ID was not found.');
    res.send(todo);
});

router.get('/:id', async(req, res) => {
    const todo = await Todo.findById(req.params.id);
    if (!todo) return res.status(404).send('The todo with the given ID was not found.');
    res.send(todo);
});

module.exports = router;