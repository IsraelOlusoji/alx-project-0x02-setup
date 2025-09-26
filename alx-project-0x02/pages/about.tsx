import React from "react";
import Button from "@/components/common/Button";
import Header from "@/components/layout/Header";

const About = () => {
  return (
    <div>
      <Header />
      <h1 className="text-4xl font-bold">About Page</h1>
      <div className="flex gap-4">
        <Button
          title="Click me"
          styles="bg-blue-500 text-white hover:bg-blue-600 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition-colors"
          size="medium"
          shape="rounded-full"
        />

        <Button
          title="Click me"
          styles="bg-blue-500 text-white hover:bg-blue-600 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition-colors"
          size="large"
          shape="rounded-md"
        />

        <Button
          title="Click me"
          styles="bg-blue-500 text-white hover:bg-blue-600 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition-colors"
          size="small"
          shape="rounded-sm"
        />
      </div>
    </div>
  );
};

export default About;
