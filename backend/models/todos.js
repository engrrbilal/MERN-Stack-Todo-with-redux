const Joi = require('joi');
const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    todo_description: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 500
    },
    todo_responsible: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 500
    },
    todo_priority: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 100
    },
    todo_completed: {
        type: Boolean,
        required: true,
    },
});

const Todo = mongoose.model('Todo', todoSchema);

function validateTodo(todo) {
    const schema = {
        todo_description: Joi.string().min(3).max(500).required(),
        todo_responsible: Joi.string().min(3).max(500).required(),
        todo_priority: Joi.string().min(3).max(100).required(),
        todo_completed: Joi.boolean().required()
    };

    return Joi.validate(todo, schema);
}

exports.todoSchema = todoSchema;
exports.Todo = Todo;
exports.validate = validateTodo;