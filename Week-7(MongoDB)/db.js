const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const User = new Schema({
  email: { type: String, unique: true, required: true },
  password: String,
  name: String,
});

const Todo = new Schema({
  title: String,
  isDone: {
    Boolean,
    default: false
  },
  userId: {
    type: ObjectId,
    ref: "users"
  },
  createdAt:{
    type: Date,
    default: Date.now
  },
  dueDate: Date 
});

const UserModel = mongoose.model("users", User);
const TodoModel = mongoose.model("todos", Todo);

module.exports = {
  UserModel,
  TodoModel,
};