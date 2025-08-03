import React from 'react';

const Button = ({ 
  children = 'Button',
  variant = 'primary',
  size = 'md',
  disabled = false,
  fullWidth = false,
  onClick,
  className = '',
  type = 'button',
  ...props 
}) => {
  const baseStyles = `
    inline-flex items-center justify-center font-medium rounded-lg
    transition-all duration-200 ease-in-out
    focus:outline-none focus:ring-2 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none
    active:scale-95 transform
  `;

  const variants = {
    primary: `
      bg-blue-600 hover:bg-blue-700 text-white 
      focus:ring-blue-500 shadow-sm hover:shadow-md
    `,
    secondary: `
      bg-gray-200 hover:bg-gray-300 text-gray-900 
      focus:ring-gray-500 shadow-sm hover:shadow-md
    `,
    success: `
      bg-green-600 hover:bg-green-700 text-white 
      focus:ring-green-500 shadow-sm hover:shadow-md
    `,
    danger: `
      bg-red-600 hover:bg-red-700 text-white 
      focus:ring-red-500 shadow-sm hover:shadow-md
    `,
    outline: `
      bg-transparent border-2 border-blue-600 text-blue-600 
      hover:bg-blue-600 hover:text-white focus:ring-blue-500
    `,
    ghost: `
      bg-transparent hover:bg-gray-100 text-gray-700 
      focus:ring-gray-500
    `
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
    xl: 'px-8 py-4 text-xl'
  };

  const widthClass = fullWidth ? 'w-full' : '';

  const buttonClasses = `
    ${baseStyles}
    ${variants[variant]}
    ${sizes[size]}
    ${widthClass}
    ${className}
  `.replace(/\s+/g, ' ').trim();

  return (
    <button
      type={type}
      className={buttonClasses}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};
export default Button;