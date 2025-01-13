import { Component, createRef } from "react";
import todo_task from "../assets/todo-task.svg";
import TodoItems from "./TodoItems.jsx";

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoList: localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : []
        };
        this.inputRef = createRef();
    }

    add = () => {
        const inputText = this.inputRef.current.value.trim();
        if (inputText === "") {
            return;
        }
        const newTodo = {
            id: Date.now(),
            text: inputText,
            isComplete: false,
        };
        this.setState(
            prevState => ({
                todoList: [...prevState.todoList, newTodo]
            }),
            () => {
                localStorage.setItem("todos", JSON.stringify(this.state.todoList));
            }
        );
        this.inputRef.current.value = "";
    };

    deleteTodo = (id) => {
        this.setState(
            prevState => ({
                todoList: prevState.todoList.filter(todo => todo.id !== id)
            }),
            () => {
                localStorage.setItem("todos", JSON.stringify(this.state.todoList));
            }
        );
    };

    toggleTodo = (id) => {
        this.setState(
            prevState => ({
                todoList: prevState.todoList.map(todo => {
                    if (todo.id === id) {
                        return { ...todo, isComplete: !todo.isComplete };
                    }
                    return todo;
                })
            }),
            () => {
                localStorage.setItem("todos", JSON.stringify(this.state.todoList));
            }
        );
    };

    render() {
        return (
            <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl">

                <div className="flex items-center mt-7 gap-2">
                    <img className="w-8" src={todo_task} alt="" />
                    <h1 className="text-3xl font-semibold">To-Do List</h1>
                </div>

                <div>
                    {this.state.todoList.map((item, index) => {
                        return (
                            <TodoItems
                                key={index}
                                text={item.text}
                                id={item.id}
                                isComplete={item.isComplete}
                                deleteTodo={this.deleteTodo}
                                toggleTodo={this.toggleTodo}
                            />
                        );
                    })}
                </div>

                <div className="flex items-center my-7 bg-gray-200 rounded-full">
                    <input
                        ref={this.inputRef}
                        className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600"
                        type="text"
                        placeholder="Add your task"
                    />
                    <button
                        onClick={this.add}
                        className="border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-pointer"
                    >
                        Add +
                    </button>
                </div>
            </div>
        );
    }
}

export default Todo;