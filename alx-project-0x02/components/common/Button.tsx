import React from 'react'
import { ButtonProps } from '@/interfaces'


const sizeClasses = {
  small: "text-sm px-2 py-1",
  medium: "text-base px-4 py-2",
  large: "text-lg px-6 py-3",
};

const shapeClasses = {
  "rounded-sm": "rounded-sm",
  "rounded-md": "rounded-md",
  "rounded-full": "rounded-full",
};

const Button = ({ title, styles, size = "medium", shape = "rounded-md", className = "" }: ButtonProps) => {
  return (
    <div>
        <button className={`${styles} ${sizeClasses[size]} ${shapeClasses[shape]} ${className}`}>{title}</button>
    </div>
  )
}

export default Button