// THIS WILL EXPECT LIST TODOS ARRAY AND ALL 3 FUNCITON LIKE EDIT,COMPLETE AND REMOVE TODO
import { FaXmark } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
const ListTodo = ({todos,onEditTodo,onRemoveTodo}) => {
  return (
    <>
      {todos && todos.length > 0 ? (
        <ul>
          {todos.map((todo) => (
            <li key={todo.id} className="px-6 py-3 flex justify-between items-center border-b">
              <p className="break-all">{todo.title}</p>
              <div className="flex items-center gap-2">
                <FaEdit className="cursor-pointer" onClick={() => onEditTodo(todo.id)} />
                <FaCheck className="cursor-pointer" onClick={() => onRemoveTodo(todo.id, {type:"completeTodo"})} />
                <FaXmark
                  onClick={() => onRemoveTodo(todo.id, {type:"removeTodo"})}
                  className="cursor-pointer text-red-700 text-xl h-5 w-5 shrink-0"
                />
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="px-6 py-3">No Todo Available</p>
      )}
    </>
  );
};
export default ListTodo;
