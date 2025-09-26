import React, { useState } from "react";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import Button from "@/components/common/Button";
import { type CardProps } from "@/interfaces";
import Header from "@/components/layout/Header";

const Home = () => {
  const [posts, setPosts] = useState<CardProps[]>([
    { id: 1, title: "Card 1", content: "This is a card" },
    { id: 2, title: "Card 2", content: "This is a card" },
    { id: 3, title: "Card 3", content: "This is a card" },
    { id: 4, title: "Card 4", content: "This is a card" },
    { id: 5, title: "Card 5", content: "This is a card" },
    { id: 6, title: "Card 6", content: "This is a card" },
    { id: 7, title: "Card 7", content: "This is a card" },
    { id: 8, title: "Card 8", content: "This is a card" },
    { id: 9, title: "Card 9", content: "This is a card" },
    { id: 10, title: "Card 10", content: "This is a card" },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddPost = (newPost: Omit<CardProps, 'id'>) => {
    const post: CardProps = {
      ...newPost,
      id: Math.max(...posts.map(p => p.id || 0), 0) + 1,
    };
    setPosts([...posts, post]);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="p-4 container mx-auto">
      <Header />
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold">Welcome to alx-project-2 🚀</h1>
        <Button
          title="Add New Post"
          styles="bg-blue-500 hover:bg-blue-600 text-white"
          size="medium"
          onClick={handleOpenModal}
        />
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {posts.map((post) => (
          <Card key={post.id} title={post.title} content={post.content} />
        ))}
      </div>

      <PostModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleAddPost}
      />
    </div>
  );
};

export default Home;
