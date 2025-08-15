import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, ...props }) => {
  const baseStyle = 'px-4 py-2 rounded text-white font-medium';
  const variantStyle =
    variant === 'primary'
      ? 'bg-blue-500 hover:bg-blue-600'
      : 'bg-gray-500 hover:bg-gray-600';

  return (
    <button className={`${baseStyle} ${variantStyle}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
