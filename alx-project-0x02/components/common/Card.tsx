import React from "react";
import { type CardProps } from "@/interfaces";

const Card = ({ title, content }: CardProps) => {
  return (
    <div className="w-full">
      <div className="bg-gray-100 rounded-xl overflow-hidden hover:shadow-lg transition-shadow cursor-pointer relative">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-gray-500">{content}</p>
      </div>
    </div>
  );
};

export default Card;
