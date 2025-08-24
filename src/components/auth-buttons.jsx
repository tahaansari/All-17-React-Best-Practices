const AuthButtons = () => {
  return (
    <>
      <button
        type="button"
        className="block relative w-full px-6 py-3 rounded-[4px]  text-white  bg-brand-accent hover:bg-brand-accent-dark shadow-md bg-brand transition-all duration-200 ease-in-out focus:outline-none cursor-pointer mt-2"
      >
        Log In
      </button>
      <button
        type="button"
        className="block relative w-full px-6 py-3 rounded-[4px]  text-white  bg-brand-accent hover:bg-brand-accent-dark shadow-md bg-brand transition-all duration-200 ease-in-out focus:outline-none cursor-pointer mt-2"
      >
        Register
      </button>
    </>
  );
};
export default AuthButtons;
