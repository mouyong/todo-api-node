import { Router } from "express"
import Todo from '../controllers/todos'

const router: Router = Router()

router.get('/todos', Todo.getTodos)
router.post('/todos', Todo.addTodo)
router.put('/edit-todo/:id', Todo.updateTodo)
router.delete('/delete-todo/:id', Todo.deleteTodo)

export default router
