require('dotenv').config();
 
const mongoose = require('mongoose');

// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,                 these are deprecated options no need
//   useUnifiedTopology: true,
// })
// .then(() => console.log('MongoDB connected'))
// .catch(err => console.log(err));


mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('Connection error:', err));

const { string } = require("zod");

const todoSchema = mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean
})

//model matalab bana do mongodb me ek database todo(model) with table name 'todos' or schema as 'todoSchema'
const todo = mongoose.model('todos' , todoSchema);

module.exports = {
    todo : todo
}