// export function Todos({ todos }) {
//     // Function to handle marking ToDo as completed or not
//     const markAsCompleted = async (id) => {
//         const response = await fetch("http://localhost:3000/completed", {
//             method: "PUT",
//             headers: {
//                 "Content-type": "application/json",
//             },
//             body: JSON.stringify({ id: id }),
//         });
//         const data = await response.json();
//         alert(data.msg);
//         // Optionally reload or update the list of todos here after toggling completion
//     };

//     return (
//         <div>
//             {todos.map(function (todo) {
//                 return (
//                     <div key={todo._id}>
//                         <h1>{todo.title}</h1>
//                         <h2>{todo.description}</h2>
//                         <button onClick={() => markAsCompleted(todo._id)}>
//                             {todo.completed === true ? "Completed" : "Mark as Completed"}
//                         </button>
//                     </div>
//                 );
//             })}
//         </div>
//     );
// }

export function Todos({ todos }) {

    const markAsCompleted = async (id) => {
        const response = await fetch("http://localhost:3000/completed", {
            method: "PUT",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({ id: id }),
        });
        const data = await response.json();
        alert(data.msg);
        
    };
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4 text-center">My ToDos</h1>
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
                {todos.map(function (todo) {
                    return (
                        <div key={todo._id} className="bg-white shadow-lg rounded-lg p-6">
                            <h1 className="text-lg font-semibold text-gray-800 mb-2">
                                {todo.title}
                            </h1>
                            <h2 className="text-gray-600 mb-4">
                                {todo.description}
                            </h2>
                            <button
                                onClick={() => markAsCompleted(todo._id)}
                                className={`py-2   px-2 rounded-lg text-white 
                                ${todo.completed
                                    ? "bg-green-500 hover:bg-green-600"
                                    : "bg-blue-500 hover:bg-blue-600"}`}
                            >
                                {todo.completed ? "Completed" : "completee"}
                            </button>
        
                            
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

