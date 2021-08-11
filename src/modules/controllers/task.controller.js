const Task = require('../../db/models/task/index');

module.exports.getAllTasks = (req, res, next) => {
  Task.find().then(result => {
    res.send({ data: result });
  });
};

module.exports.createNewTasks = (req, res, next) => {
  const task = new Task(req.body);
  task.save().then(result => {
    res.send('Task created');
  });
};

module.exports.changeTaskInfo = (req, res, next) => {
  Task.updateOne({_id: req.body._id}, req.body).then(result => {
    res.send('Task updated');
  });
};

module.exports.deleteTask = (req, res, next) => {
  Task.deleteOne(req.body).then(result => {
    res.send('Task delete');
  });
};

