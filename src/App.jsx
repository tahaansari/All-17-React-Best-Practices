import { useRef, useState } from "react";
import "./App.css";
import { FaXmark } from "react-icons/fa6";
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
      console.log(typeof(errors))
      console.log(errors)
      return false;
    }
    setListTodos([...listTodos, { title: inputText }]);
    setInputText("");
    newErrors = null;
    setErrors(newErrors);
    console.log(errors)
  };
  return (
    <>
      <div className="bg-brand-bg p-6 flex items-center justify-center h-screen">
        <div>
          <h1 className="uppercase text-8xl font-bold text-amber-950 opacity-25 text-center absolute left-1/2 -translate-x-1/2 -translate-y-1/2">
            Todo App
          </h1>
          <div className="relative bg-white">
            <div className="bg-brand-secondary text-white p-2 px-5 flex justify-between">
              <div>
                <span>.</span>
                <span>.</span>
                <span>.</span>
              </div>
              <p>0/ {listTodos.length} todos completed</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded  border-r-2 border-r-gray-100">
                {listTodos && listTodos.length > 0 ? (
                  <ul>
                    {" "}
                    {listTodos.map((todo, index) => (
                      <li key={index} className="py-2 flex justify-between items-center border-b-2 border-b-gray-100">
                        {todo.title} <FaXmark className="text-red-700" />
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>No Todo Available</p>
                )}
              </div>
              <div className="p-4 rounded">
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
                    className="block relative w-full px-6 py-3 rounded-[4px] font-semibold  text-white  bg-brand-accent hover:bg-brand-accent-dark shadow-md bg-brand transition-all duration-200 ease-in-out focus:outline-none cursor-pointer mt-2"
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
    </>
  );
}

export default App;
