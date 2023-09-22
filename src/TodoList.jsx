import * as React from "react";
import Todo from "./Todo";

export default function TodoList() {
    const [todos, setTodos] = React.useState([
        { id: 1, label: "Learn React", completed: false },
        { id: 2, label: "Learn Next.js", completed: false },
        { id: 3, label: "Learn React Query", completed: false }
    ]);

    const handleUpdateTodo = (updatedTodo) => {
        setTodos(updatedTodo);
    };

    return (
        <ul>
            {todos.map((todo) => (
                <Todo
                    key={todo.id}
                    todo={todo}
                    handleUpdateTodo={handleUpdateTodo}
                />
            ))}
        </ul>
    )
}