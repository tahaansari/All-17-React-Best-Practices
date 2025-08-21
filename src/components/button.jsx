const Button = ({ children, onClick, type = "button" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="
        relative
        px-6 py-3
        rounded-[19px]
        font-semibold
        text-white
        bg-primary
        hover:bg-primary-dark
        shadow-md
        bg-brand
        transition-all
        duration-200
        ease-in-out
        focus:outline-none
        cursor-pointer
      "
    >
      {children}
    </button>
  );
};

export default Button;
