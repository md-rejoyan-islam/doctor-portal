const Button = ({ children }) => {
  return (
    <button className="btn text-white bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-r hover:from-secondary hover:to-primary border-0 font-bold">
      {children}
    </button>
  );
};

export default Button;
