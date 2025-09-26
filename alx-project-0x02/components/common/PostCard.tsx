import React from "react";
import { type PostProps } from "@/interfaces";

const PostCard = ({ title, content, userId }: PostProps) => {
  return (
    <div className="max-w-xl w-full container mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h1 className="text-2xl font-semibold text-gray-800">{title}</h1>
      <p className="text-gray-600">{content}</p>
      <p className="text-gray-500">User ID: {userId}</p>
    </div>
  );
};

export default PostCard;
