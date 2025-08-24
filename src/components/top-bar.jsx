// THIS WILL EXPECT CURRENT TODO COUNT AND COMPLETED TODO COUNT
const TopBar = ({todoCount,completedTodoCount}) => {
  return (
    <>
      <div>
        <span className="font-semibold">{completedTodoCount}</span> / {todoCount} todos completed
      </div>
    </>
  );
};
export default TopBar;
