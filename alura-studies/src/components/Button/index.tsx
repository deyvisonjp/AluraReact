import React from 'react';
import style from './Button.module.scss';

interface Props {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
}

function Button({ onClick, type, children } : Props) {
    return (
      <button 
        className={style.botao} 
        type={type} 
        onClick={onClick}>
        {children}
      </button>
    );
}

export default Button;
