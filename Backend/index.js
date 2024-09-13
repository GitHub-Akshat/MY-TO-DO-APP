const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const app = express();
const cors = require("cors"); //CORS

app.use(express.json());

//app.use(cors());   =>  this will allow frontend from any hosted link to reach our backend server what I did is only allow localhost:5173 frontend to reach localhost:3000 backend
app.use(cors({
    origin : "http://localhost:5173"
}
));

app.post('/todo' , async function(req,res)
{
    const userdata = req.body;

    // Zod verification
    const parseduserdata = createTodo.safeParse(userdata);
    if(!parseduserdata.success)
    {
        res.status(411).json({
            msg : "You sent the wrong inputs"
        })
        return;
    } 

    // Create an entry in mongodb .create
    await todo.create(
        {
            title : userdata.title,
            description : userdata.description,
            completed : false
        }
    )

    res.json({
        msg : "Todo Created"
    })

})


app.get('/todos' , async function(req,res)
{
    // db funtion to give data back is .find

    // this todo.find({}) will give u all the todos if u want to add some specific condition to find a todo tou can do this
    // todo.find({
    //     title : "jo bhi ho"  
         
    //     ya phir agar description se dhundna ho toh


    //     description : "jo bhi ho"
    // })
    const todos = await todo.find({}); 
    res.json({
        todos
    })
})


app.put('/completed' , async function(req,res)
{
    const updateuserdata = req.body;

    // Zod verification
    const parseduserdata = updateTodo.safeParse(updateuserdata);
    if(!parseduserdata.success)
    {
        res.status(411).json({
            msg : "You sent the wrong inputs"
        })
        return;
    } 

    // db function to change original entered data is .update
    await todo.updateOne(
    {
        _id : req.body.id
    },
    {
        completed : true
    })
    res.json({
        msg : "Todo marked as completed"
    })
})

app.listen(3000, () => {
    console.log('Listening on port 3000');
});
