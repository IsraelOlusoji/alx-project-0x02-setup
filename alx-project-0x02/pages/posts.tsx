import React from "react";
import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import { type PostProps } from "@/interfaces";
import { GetStaticProps } from "next";

interface PostsPageProps {
  posts: PostProps[];
}

const Posts = ({ posts }: PostsPageProps) => {
  return (
    <div>
      <Header />
      <div className="container text-center mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Posts</h1>
        <div className="grid grid-cols-3 gap-4">
          {posts.map((post) => (
            <PostCard
              key={post.id}
              title={post.title}
              content={post.content}
              userId={post.userId}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }

    const data = await response.json();

    // Map API data to our simplified structure
    const mappedPosts = data.map((post: any) => ({
      id: post.id,
      title: post.title,
      content: post.body,
      userId: post.userId,
    }));

    return {
      props: {
        posts: mappedPosts,
      },
      // Optional: Revalidate every 60 seconds for ISR (Incremental Static Regeneration)
      revalidate: 60,
    };
  } catch (error) {
    console.error("Error fetching posts:", error);

    // Return empty posts array on error
    return {
      props: {
        posts: [],
      },
    };
  }
};

export default Posts;
