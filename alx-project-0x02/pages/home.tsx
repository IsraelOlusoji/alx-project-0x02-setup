import React from "react";
import Card from "@/components/common/Card";

const Home = () => {
  return (
    <div className="p-4 container mx-auto">
      <h1 className="text-4xl font-bold">Welcome to alx-project-2 🚀</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <Card title="Card 1" content="This is a card" />
        <Card title="Card 2" content="This is a card" />
        <Card title="Card 3" content="This is a card" />
        <Card title="Card 4" content="This is a card" />
        <Card title="Card 5" content="This is a card" />
        <Card title="Card 6" content="This is a card" />
        <Card title="Card 7" content="This is a card" />
        <Card title="Card 8" content="This is a card" />
        <Card title="Card 9" content="This is a card" />
        <Card title="Card 10" content="This is a card" />
      </div>
    </div>
  );
};

export default Home;
