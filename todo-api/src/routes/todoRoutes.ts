import { Router } from 'express';
import Todo from '../models/todo'; // Asegúrate de que la ruta sea correcta

const router = Router();

// Ruta para obtener todas las tareas
router.get('/todos', async (req, res) => {
  try {
    const todos = await Todo.findAll();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las tareas' });
  }
});

// Ruta para obtener una tarea por ID
router.get('/todos/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const todo = await Todo.findByPk(id);
    if (todo) {
      res.json(todo);
    } else {
      res.status(404).json({ error: 'Tarea no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la tarea' });
  }
});

// Ruta para crear una nueva tarea
router.post('/todos', async (req, res) => {
  const { title, description, completed } = req.body;
  try {
    const newTodo = await Todo.create({ title, description, completed });
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear la tarea' });
  }
});

// Ruta para actualizar una tarea existente
router.put('/todos/:id', async (req, res) => {
  const { id } = req.params;
  const { title, description, completed } = req.body;
  try {
    const todo = await Todo.findByPk(id);
    if (todo) {
      await todo.update({ title, description, completed });
      res.json(todo);
    } else {
      res.status(404).json({ error: 'Tarea no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar la tarea' });
  }
});

// Ruta para eliminar una tarea
router.delete('/todos/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const todo = await Todo.findByPk(id);
    if (todo) {
      await todo.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Tarea no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar la tarea' });
  }
});

export default router;
