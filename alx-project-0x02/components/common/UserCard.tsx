import React from "react";
import { UserProps } from "@/interfaces";
const UserCard = ({ name, email, address }: UserProps) => {
  return (
    <div className="max-w-sm mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <h1 className="text-2xl font-semibold text-gray-800">{name}</h1>
      <p className="text-gray-500">{email}</p>
    
      <p className="text-gray-500">
        {address.city}, {address.zipcode}
      </p>
    </div>
  );
};

export default UserCard;
