import React from 'react';

const ButtonFilled = ({ children, onClick, className = '', icon: Icon, size = 'lg', type = 'button', disabled = false }) => {
  const sizeClasses = {
    sm: 'px-6 py-2 text-base shadow-lg',
    md: 'px-7 py-3 text-base shadow-lg',
    lg: 'px-8 py-4 text-lg shadow-xl',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`bg-white text-slate-900 rounded-lg font-bold hover:bg-gray-100 transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed ${sizeClasses[size]} ${className}`}
    >
      {children}
      {Icon && <Icon size={20} />}
    </button>
  );
};

export default ButtonFilled;
