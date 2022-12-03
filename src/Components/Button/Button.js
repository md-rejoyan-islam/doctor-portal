import React from 'react';

const Button = ({children}) => {
    return (
      <button className="btn text-white bg-gradient-to-r from-primary to-secondary border-0 font-bold">
        {children}
      </button>
    );
};

export default Button;