import { useRef, useState } from "react";
import "./App.css";
import { FaXmark } from "react-icons/fa6";
function App() {
  const todoInputRef = useRef(null);
  const [inputText, setInputText] = useState(null);
  const [errors,setErrors] = useState(null);
  const [listTodos, setListTodos] = useState([]);
  const addTodo = ()=>{
      todoInputRef.current.focus();
      const newErrors = {};
      if(!inputText.trim()){
        newErrors.title = "This Field is Required"
        setErrors(newErrors);
        return false;
      }
      setListTodos([...listTodos, { title: inputText }]);
      setInputText("");
      newErrors = null;
      
  }
  return (
    <>
      <div className="bg-amber-100 p-6">
        <h1 className="uppercase font-bold text-amber-950 opacity-25 text-center">Todo App</h1>
        <div className="bg-white rounded-2xl">
          <div className="bg-amber-50 p-2 px-5 flex justify-between">
            <div>
              <span>.</span>
              <span>.</span>
              <span>.</span>
            </div>
            <p>0/ {listTodos.length} todos completed</p>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div class="p-4 rounded  border-r-2 border-r-gray-100">
              <ul>
                {listTodos.map((todo) => (
                  <li className="py-2 flex justify-between items-center border-b-2 border-b-gray-100">
                    {" "}
                    {todo.title} <FaXmark className="text-red-700" />
                  </li>
                ))}
              </ul>
            </div>
            <div class="p-4 rounded">
              <p className="font-medium mb-1">Add a todo</p>
              <input
                ref={todoInputRef}
                type="text"
                placeholder="Enter your text"
                class="w-full px-4 py-2 border rounded-[4px] focus:outline-none mb-3"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={(e) => e.key == "Enter" ? addTodo() : ""}
              />
              {errors && <p className="text-red-500 text-sm">{errors.title}</p>}
              <button
                type="button"
                className="relative w-full px-6 py-3 rounded-[4px] font-semibold  text-white  bg-primary hover:bg-primary-dark shadow-md bg-brand transition-all duration-200 ease-in-out focus:outline-none cursor-pointer mt-3"
                onClick={()=>addTodo()}
              >
                Add to list
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
