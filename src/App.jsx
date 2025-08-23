import { useRef, useState } from "react";
import "./App.css";
import { FaXmark } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";

function App() {
  const todoInputRef = useRef(null);
  const [inputText, setInputText] = useState("");
  const [errors, setErrors] = useState(null);
  const [listTodos, setListTodos] = useState([]);
  const addTodo = () => {
    todoInputRef.current.focus();
    let newErrors = {};
    if (!inputText.trim()) {
      newErrors.title = "This Field is Required";
      setErrors(newErrors);
      return false;
    }
    setListTodos((prev)=>[...prev, { id:uuidv4(), title: inputText.trim() }]);
    setInputText("");
    newErrors = null;
    setErrors(newErrors);
  };
  const removeTodo = (id)=>{
    setListTodos((prev)=>prev.filter((todo)=> todo.id !== id));
  }
  const editTodo = (id)=>{
    // get title of todo by id
    // put title on input
    // on click add to list update that todo
    const todoTitle = 
      listTodos.find((todo)=> {
        if(todo.id === id){
          return todo.title;
        }
      })
    setInputText(todoTitle.title)
    todoInputRef.current.focus();
  }
  return (
    <>
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
                <p> <span className="font-semibold">0</span>  / {listTodos.length} todos completed</p>
              </div>
              <div className="grid grid-cols-2 h-full">
                <div>
                  {listTodos && listTodos.length > 0 ? (
                    <ul>
                      {listTodos.map((todo) => (
                        <li key={todo.id} className="px-6 py-3 flex justify-between items-center border-b">
                          <p className="break-all">{todo.title}</p>
                          <div className="flex items-center gap-2">
                            <FaEdit className="cursor-pointer" onClick={()=>editTodo(todo.id)}/>
                            <FaCheck/>
                            <FaXmark onClick={()=>removeTodo(todo.id)} className="cursor-pointer text-red-700 text-xl h-5 w-5 shrink-0" />
                          </div>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="px-6 py-3">No Todo Available</p>
                  )}
                </div>
                <div className="px-4 pt-4 pb-6 border-l">
                  <p className="font-medium mb-2">Add a todo</p>
                  <div>
                    <input
                      ref={todoInputRef}
                      type="text"
                      placeholder="Enter your text"
                      className="w-full px-4 py-2 border rounded-[4px] focus:outline-none mb-2"
                      value={inputText}
                      onChange={(e) => setInputText(e.target.value)}
                      onKeyDown={(e) => (e.key == "Enter" ? addTodo() : "")}
                    />
                  </div>
                  {errors !== null && <p className="text-red-500 text-sm mb-2">{errors.title}</p>}
                  <div>
                    <button
                      type="button"
                      className="block relative w-full px-6 py-3 rounded-[4px]  text-white  bg-brand-accent hover:bg-brand-accent-dark shadow-md bg-brand transition-all duration-200 ease-in-out focus:outline-none cursor-pointer mt-2"
                      onClick={() => addTodo()}
                    >
                      Add to list
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
