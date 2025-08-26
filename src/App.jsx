import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import TopBar from "./components/top-bar";
import ListTodo from "./components/list-todo";
import AuthButtons from "./components/auth-buttons";
import AddTodoForm from "./components/add-todo-form";
function App() {

  const [todos, setTodos] = useState([]);
  const [completedTodoCount, setCompletedTodoCount] = useState(0)
  const [editTodoFlag,setEditTodoFlag] = useState(null);
  
  const addUpdateTodo = (title) => { // MAIN FUNCTION
    if(!editTodoFlag){
      setTodos((prev)=>[...prev, { id:uuidv4(), title: title }]);
    }else{
      setTodos((prev)=>prev.map((todo)=> todo.id === editTodoFlag.id ? {...todo, title: title} : todo))
      setEditTodoFlag(null)
    }
  };

  const editTodo = (id)=>{
    const title = todos.find((todo)=> todo.id === id)?.title
    console.log(title);
    setEditTodoFlag({id,title})
  }

  const removeTodo = (id, type)=>{
    if(type==="removeTodo"){
      setTodos((prev)=>prev.filter((todo)=> todo.id !== id));
    }else{
      setTodos((prev)=> prev.filter((todo)=> todo.id != id ))
      setCompletedTodoCount((prev)=>prev + 1)
    }
  }

  return (
    <div className="bg-brand-bg p-6 flex items-center justify-center h-screen">
      <div className="container">
        <div className="h-[85vh]">
          <h1 className="uppercase text-8xl font-bold opacity-5 text-center absolute left-1/2 -translate-x-1/2 -translate-y-1/2 tracking-widest whitespace-nowrap">
            Todo App
          </h1>
          <div className="relative h-full bg-white overflow-hidden rounded-[6px]">
            <div className="relative bg-brand-secondary-light-90 p-2 px-5 flex justify-between">
              <div>
                <div className="absolute top-1/2 -translate-y-1/2 flex gap-1.5">
                  <div className="w-3 h-3 bg-brand-secondary-light-60 rounded-full"></div>
                  <div className="w-3 h-3 bg-brand-secondary-light-60 rounded-full"></div>
                  <div className="w-3 h-3 bg-brand-secondary-light-60 rounded-full"></div>
                </div>
              </div>
              <TopBar todoCount={todos.length} completedTodoCount={completedTodoCount} />
            </div>
            <div className="grid grid-cols-2 h-full">
              <div>
                <ListTodo todos={todos} onEditTodo={editTodo} onRemoveTodo={removeTodo} />
              </div>
              <div className="px-4 pt-4 pb-6 border-l">
                <AddTodoForm onAddUpdateTodo={addUpdateTodo} editTodoFlag={editTodoFlag} />
                <AuthButtons />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
