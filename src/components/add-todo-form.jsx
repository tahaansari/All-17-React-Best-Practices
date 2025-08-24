// THIS COMPONENT EXPECTS ADDUPDATETODO
import { useEffect, useRef, useState } from "react";
const AddTodoForm = ({onAddUpdateTodo, editTodoFlag}) => {
  const todoRef = useRef(null);
  const [todoText, setTodoText] = useState("");
  const [todoError,setTodoError] = useState(null);
  const cleanUp = ()=>{
    setTodoText("");
    setTodoError(null)
  }
  const validateInput = (todoText)=>{
    todoRef.current.focus();
    if(!todoText){
        setTodoError("This field is required")
        return
    }
    onAddUpdateTodo(todoText);
    cleanUp();
  }
  useEffect(()=>{
    editTodoFlag ? (setTodoText(editTodoFlag.title), todoRef.current.focus()) : null;
  },[editTodoFlag])
  return (
    <>
      <p className="font-medium mb-2">Add a todo</p>
      <div>
        <input
          ref={todoRef}
          type="text"
          placeholder="Enter your text"
          className="w-full px-4 py-2 border rounded-[4px] focus:outline-none mb-2"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value.trim())}
          onKeyDown={(e) => (e.key == "Enter" ? validateInput(todoText) : "")}
        />
        {todoError !== null && <p className="text-red-500 text-sm mb-2">{todoError}</p>}
        <button
          type="button"
          className="block relative w-full px-6 py-3 rounded-[4px]  text-white  bg-brand-accent hover:bg-brand-accent-dark shadow-md bg-brand transition-all duration-200 ease-in-out focus:outline-none cursor-pointer mt-2"
          onClick={() => validateInput(todoText)}
        >
          Add to list
        </button>
      </div>
    </>
  );
};
export default AddTodoForm;
