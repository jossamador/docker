"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todo_1 = __importDefault(require("../models/todo"));
const router = (0, express_1.Router)();
// GET /todos
router.get('/todos', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const todos = yield todo_1.default.findAll();
    res.json(todos);
}));
// GET /todos/:id
router.get('/todos/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const todo = yield todo_1.default.findByPk(req.params.id);
    if (todo) {
        res.json(todo);
    }
    else {
        res.status(404).send('Todo not found');
    }
}));
// POST /todos
router.post('/todos', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, description, completed } = req.body;
    const newTodo = yield todo_1.default.create({ title, description, completed });
    res.status(201).json(newTodo);
}));
// PUT /todos/:id
router.put('/todos/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, description, completed } = req.body;
    const todo = yield todo_1.default.findByPk(req.params.id);
    if (todo) {
        yield todo.update({ title, description, completed });
        res.json(todo);
    }
    else {
        res.status(404).send('Todo not found');
    }
}));
// DELETE /todos/:id
router.delete('/todos/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const todo = yield todo_1.default.findByPk(req.params.id);
    if (todo) {
        yield todo.destroy();
        res.status(204).send();
    }
    else {
        res.status(404).send('Todo not found');
    }
}));
exports.default = router;
