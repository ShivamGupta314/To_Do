const express = require("express");
const cors = require("cors");
const { createToDo, updateToDo } = require("./types");
const { todo } = require("./db");

const app = express();
app.use(cors());
app.use(express.json());

// Route to get all ToDos
app.get("/todos", async (req, res) => {
    const todos = await todo.find({});
    res.json({
        todos
    });
});

// Route to create a new ToDo
app.post("/todo", async (req, res) => {
    const userBody = req.body;
    const create = createToDo.safeParse(userBody);  // Validation using Zod or similar (optional)
    
    if (!create.success) {
        return res.status(404).json({ msg: "Invalid input" });
    }

    await todo.create({
        title: userBody.title,
        description: userBody.description,
        completed: false,  // Initial state of `completed`
        update: false      // Initial state of `update`
    });

    res.json({ msg: "ToDo created successfully" });
});

// Route to update an existing ToDo
app.put("/update", async (req, res) => {
    const { id, title, description } = req.body;  // Destructure the incoming request body
    
    const done = updateToDo.safeParse(req.body);  // Validation using Zod or similar (optional)
    
    if (!done.success) {
        return res.status(404).json({ msg: "Invalid input" });
    }

    // Update the specific ToDo by ID
    await todo.updateOne(
        { _id: id },  // Find the ToDo by `id`
        {
            title: title,             // Update the title
            description: description, // Update the description
            update: true              // Mark it as updated
        }
    );

    res.json({ msg: "ToDo updated successfully" });
});

// Route to mark a ToDo as completed
app.put("/completed", async (req, res) => {
    const { id } = req.body;
    const complete = updateToDo.safeParse(req.body);  // Validation using Zod or similar (optional)

    if (!complete.success) {
        return res.status(404).json({ msg: "Invalid input" });
    }

    await todo.updateOne(
        { _id: id },          // Find the ToDo by `id`
        { completed: true }   // Mark it as completed
    );

    res.json({ msg: "ToDo marked as completed" });
});

// Start the server
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
