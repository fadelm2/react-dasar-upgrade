import Todo from "./Todo.jsx";


export default function Todolist() {
    const data = [
        {
            text: "Learn HTML",
            isCompleted: true,
        },
        {
            text: "Learn CSS",
            isCompleted: true,
        },
        {
            text: "Learn JavaScript",
            isCompleted: true,
        },
        {
            text: "Learn ReactJS",
            isCompleted: false,
        },
    ];

    const todos = data.map((todo) => (
        <Todo {... todo}/>
    ))

    return (
        <ul>

            {todos}

        </ul>

    )
}