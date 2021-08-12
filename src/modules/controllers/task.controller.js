const Task = require('../../db/models/task/index');

module.exports.getAllTasks = (req, res, next) => {
  Task.find().then(result => {
    res.send({ data: result });
  });
};

module.exports.createNewTasks = (req, res, next) => {
  if (req.body.hasOwnProperty('text') && req.body.hasOwnProperty('isCheck')){
    const task = new Task(req.body);
    task.save().then(result => {
      Task.find().then(result => {
        res.send({ data: result });
      });
    });
  } else res.status(422).send('Error! Params not correct');
};

module.exports.changeTaskInfo = (req, res, next) => {
  if (req.body._id) {
    Task.updateOne({_id: req.body._id}, req.body).then(result => {
      Task.find().then(result => {
        res.send({ data: result });
      });
    });
  } else res.status(422).send('Error! Params not correct');
};

module.exports.deleteTask = (req, res, next) => {
  if (req.query._id) {
    Task.deleteOne({_id: req.query._id}).then(result => {
      Task.find().then(result => {
        res.send({ data: result });
      });
    });
  } else res.status(422).send('Error! Params not correct');
};

module.exports.deleteAllTask = (req, res, next) => {
  Task.deleteMany().then(result => {
    res.send({ data: result });
  });
};