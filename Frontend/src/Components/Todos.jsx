// eslint-disable-next-line react/prop-types
export function Todos({ todos })
{
    return(
        <div>
            {todos.map(function(todo) {   
                return (<div key={todo.id}>
                        <h1>{todo.title}</h1>
                        <h2>{todo.description}</h2>
                        <button style = {{
                                padding : 10,
                                margin : 10
                        }} onClick={() => {
                            fetch("http://localhost:3000/completed", {
                                method : "GET"})
                                .then(async function(res) {
                                    const data = await res.json();
                                    
                                    alert("Todo added"); 
                                })
                        }}>{todo.completed == true ? "Completed" : "Mark as Complete"}</button>
                    </div>
                )
            })}
        </div>
    )
}

// import { useState, useEffect } from 'react';

// function App() {
//   const [todos, setTodos] = useState([]);

//   // Fetch todos from the database when the component mounts
//   useEffect(() => {
//     fetch("http://localhost:3000/todos", { method: "GET" })
//       .then(async (res) => {
//         const data = await res.json();
//         setTodos(data); // Set the fetched todos into state
//       })
//       .catch((err) => {
//         console.error("Error fetching todos:", err);
//       });
//   }, []);

//   // Function to mark a todo as completed
//   const markAsComplete = (todoId) => {
//     fetch(`http://localhost:3000/todos/${todoId}`, {
//       method: "PUT", // Use PUT to update the todo status
//       body: JSON.stringify({
//         completed: true
//       }),
//       headers: {
//         "Content-type": "application/json"
//       }
//     })
//       .then(async (res) => {
//         const updatedTodo = await res.json();
//         // Update the local state to reflect the change
//         setTodos((prevTodos) =>
//           prevTodos.map((todo) =>
//             todo.id === updatedTodo.id ? updatedTodo : todo
//           )
//         );
//         alert("Todo marked as complete!");
//       })
//       .catch((err) => {
//         console.error("Error updating todo:", err);
//       });
//   };

//   return (
//     <div>
//       {todos.map((todo) => (
//         <div key={todo.id}>
//           <h1>{todo.title}</h1>
//           <h2>{todo.description}</h2>
//           <button
//             style={{
//               padding: 10,
//               margin: 10
//             }}
//             onClick={() => markAsComplete(todo.id)}
//           >
//             {todo.completed ? "Completed" : "Mark as Complete"}
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default App;
