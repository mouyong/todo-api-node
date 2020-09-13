"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todos_1 = __importDefault(require("../controllers/todos"));
const router = express_1.Router();
router.get('/todos', todos_1.default.getTodos);
router.post('/todos', todos_1.default.addTodo);
router.put('/edit-todo/:id', todos_1.default.updateTodo);
router.delete('/delete-todo/:id', todos_1.default.deleteTodo);
exports.default = router;
