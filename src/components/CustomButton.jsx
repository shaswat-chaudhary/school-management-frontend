import React from "react";

export const CustomButton = ({
  children,
    size = "md",
  disabled = false,
  onClick,
  type = "button",
  className = "",
}) => {
  const baseStyles =
    "inline-flex items-center justify-center text-white rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const disabledStyles = "opacity-50 cursor-not-allowed";

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${baseStyles} ${sizes[size]} ${
        disabled ? disabledStyles : ""
      } ${className}`}
    >
      {children}
    </button>
  );
};


