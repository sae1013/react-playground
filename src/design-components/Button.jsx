const Button = ({ children }) => {
  return (
    <button className="py-1 px-4 border border-slate-500 rounded-lg bg-gray-100 mt-4">
      {children}
    </button>
  );
};
export default Button;
