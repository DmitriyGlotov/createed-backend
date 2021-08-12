const express = require('express');
const router = express.Router();

const {
  getAllTasks,
  createNewTasks,
  changeTaskInfo,
  deleteTask,
  deleteAllTask,
} = require ('../controllers/task.controller');

router.get('/allTasks', getAllTasks);
router.post('/createTask', createNewTasks);
router.patch('/updateTask', changeTaskInfo);
router.delete('/deleteTask', deleteTask);
router.delete('/deleteAllTask', deleteAllTask);

module.exports = router;