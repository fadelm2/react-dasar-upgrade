import Todo from "./Todo.jsx";


export default function Todolist() {
    return (
        <ul>

            <Todo isCompleted={true} text="Learn HTML"/>

            <Todo isCompleted={true} text="Learn CSS"/>
            <Todo isCompleted={true} isDeleted={true} text="Learn Javascript"/>
            <Todo isCompleted={false} text="Learn ReactJs"/>

        </ul>

    )
}