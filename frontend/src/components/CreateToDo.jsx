// import { useState } from "react"

// export function CreateToDo(){
//     const [title,setTitle]=useState("");
//     const [description,setDescription]=useState("");
//     return <div>
//         <input  style={{ padding:10,margin:10}}type="text" placeholder="title" onChange={function(e){
//             setTitle(e.target.value);
//         }}></input><br></br>
//         <input style={{ padding:10,margin:10}} type="text" placeholder="description" onChange={function(e){
//             setDescription(e.target.value);
//         }}></input><br></br>
//         <button style={{ padding:10,margin:10}} onClick={()=>{
//             fetch("http://localhost:3000/todo",{
//                 method:"POST",
//                 body: JSON.stringify({
//                     title:title,
//                     description :description
//                 }),
//                 headers :{
//                     "Content-type": "application/json"
//                 }
//             }).then(async function(res){
//                 const json=await res.json();
//                 alert("to do is added ");
//             })
//         }}>add todo</button>
//     </div>
// }




// import { useState } from "react";

// export function CreateToDo() {
//     const [title, setTitle] = useState("");
//     const [description, setDescription] = useState("");

//     return (
//         <div className="max-w-md mx-auto mt-10 p-4 bg-white shadow-lg rounded-lg">
//             <h1 className="text-2xl font-bold text-center mb-4">Create a New ToDo</h1>
//             <input
//                 type="text"
//                 placeholder="Title"
//                 className="w-full p-3 mb-4 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 onChange={(e) => setTitle(e.target.value)}
//             />
//             <input
//                 type="text"
//                 placeholder="Description"
//                 className="w-full p-3 mb-4 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 onChange={(e) => setDescription(e.target.value)}
//             />
//             <button
//                 className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-all"
//                 onClick={() => {
//                     fetch("http://localhost:3000/todo", {
//                         method: "POST",
//                         body: JSON.stringify({
//                             title: title,
//                             description: description,
//                         }),
//                         headers: {
//                             "Content-type": "application/json",
//                         },
//                     }).then(async function (res) {
//                         const json = await res.json();
//                         alert("ToDo is added");
//                     });
//                 }}
//             >
//                 Add ToDo
//             </button>
//             <button
//                 className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-all"
//                 onClick={() => {
//                     fetch("http://localhost:3000/update", {
//                         method: "POST",
//                         body: JSON.stringify({
//                             title: title,
//                             description: description,
//                         }),
//                         headers: {
//                             "Content-type": "application/json",
//                         },
//                     }).then(async function (res) {
//                         const json = await res.json();
//                         alert("ToDo is added");
//                     });
//                 }}
//             >
//                 update
//             </button>
//         </div>
//     );
// }


// import { useState } from "react";

// export function CreateToDo() {
//     const [id, setId] = useState(null); // Store the ID of the todo being updated
//     const [title, setTitle] = useState("");
//     const [description, setDescription] = useState("");

//     // Function to create a new todo
//     const handleCreate = () => {
//         fetch("http://localhost:3000/todo", {
//             method: "POST",
//             body: JSON.stringify({
//                 title: title,
//                 description: description,
//             }),
//             headers: {
//                 "Content-type": "application/json",
//             },
//         }).then(async (res) => {
//             const json = await res.json();
//             alert("ToDo is added");
//         });
//     };

//     // Function to update an existing todo
//     const handleUpdate = () => {
//         if (!id) {
//             alert("No ToDo selected for update");
//             return;
//         }
    
//         fetch("http://localhost:3000/update", {
//             method: "PUT",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify({
//                 id: id,  // Send the ToDo's id to the server
//                 title: title,
//                 description: description,
//             }),
//         }).then(async (res) => {
//             const json = await res.json();
//             alert(json.msg);
//         });
//     };
    


//     return (
//         <div className="max-w-md mx-auto mt-10 p-4 bg-white shadow-lg rounded-lg">
//             <h1 className="text-2xl font-bold text-center mb-4">
//                 {id ? "Update ToDo" : "Create a New ToDo"}
//             </h1>
//             <input
//                 type="text"
//                 placeholder="Title"
//                 className="w-full p-3 mb-4 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 value={title}
//                 onChange={(e) => setTitle(e.target.value)}
//             />
//             <input
//                 type="text"
//                 placeholder="Description"
//                 className="w-full p-3 mb-4 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 value={description}
//                 onChange={(e) => setDescription(e.target.value)}
//             />
//             <button
//                 className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-all"
//                 onClick={id ? handleUpdate : handleCreate}
//             >
//                 {id ? "Update ToDo" : "Add ToDo"}
//             </button>
//         </div>
//     );
// }


import { useState, useEffect } from "react";


export function ToDoApp() {
    const [todos, setTodos] = useState([]);     
    const [title, setTitle] = useState("");        
    const [description, setDescription] = useState(""); 
    const [id, setId] = useState("");              

  
    useEffect(() => {
        fetch("http://localhost:3000/todos")
            .then(async (res) => {
                const json = await res.json();
                setTodos(json.todos);
            });
    }, []);


    const handleCreate = () => {
        fetch("http://localhost:3000/todo", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: title,
                description: description,
            }),
        })
        .then(async (res) => {
            const json = await res.json();
            alert(json.msg);
            // After creating, fetch updated ToDos list
            fetch("http://localhost:3000/todos")
                .then(async (res) => {
                    const json = await res.json();
                    setTodos(json.todos);
                });
        });
    };

  
    const handleUpdate = () => {
        if (!id) {
            alert("Please select a ToDo to update.");
            return;
        }

        fetch("http://localhost:3000/update", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id: id,              
                title: title,         
                description: description,  
            }),
        })
        .then(async (res) => {
            const json = await res.json();
            alert(json.msg);
         
            fetch("http://localhost:3000/todos")
                .then(async (res) => {
                    const json = await res.json();
                    setTodos(json.todos);
                });
        });
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-4 bg-white shadow-lg rounded-lg">
            <h1 className="text-2xl font-bold text-center mb-4">Create or Update ToDo</h1>
            
            <input
                type="text"
                placeholder="Title"
                className="w-full p-3 mb-4 border border-gray-400 rounded-lg"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <input
                type="text"
                placeholder="Description"
                className="w-full p-3 mb-4 border border-gray-400 rounded-lg"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />

    
            <button
                className="w-full py-3 mb-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-all"
                onClick={handleCreate}
            >
                Create ToDo
            </button>

           
            <select
                className="w-full p-3 mb-4 border border-gray-400 rounded-lg"
                onChange={(e) => setId(e.target.value)}
            >
                <option value="">Select ToDo to Update</option>
                {todos.map((todo) => (
                    <option key={todo._id} value={todo._id}>
                        {todo.title}
                    </option>
                ))}
            </select>

         
            <button
                className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-all"
                onClick={handleUpdate}
            >
                Update ToDo
            </button>
        </div>
    );
}
