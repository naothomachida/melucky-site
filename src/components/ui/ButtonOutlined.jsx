import React from 'react';

const ButtonOutlined = ({ children, onClick, className = '', icon: Icon, size = 'lg', type = 'button', disabled = false }) => {
  const sizeClasses = {
    sm: 'px-6 py-2 text-base',
    md: 'px-7 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`bg-transparent border-2 border-white text-white rounded-lg font-bold hover:bg-white hover:text-slate-900 transition flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed ${sizeClasses[size]} ${className}`}
    >
      {children}
      {Icon && <Icon size={20} />}
    </button>
  );
};

export default ButtonOutlined;
