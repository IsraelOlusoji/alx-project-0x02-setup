import React, { useState, useEffect } from 'react'
import Header from '@/components/layout/Header'
import PostCard from '@/components/common/PostCard'
import { type PostProps } from '@/interfaces'

const Posts = () => {
  const [posts, setPosts] = useState<PostProps[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true)
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        
        if (!response.ok) {
          throw new Error('Failed to fetch posts')
        }
        
        const data = await response.json()
        // Map API data to our simplified structure
        const mappedPosts = data.map((post: any) => ({
          id: post.id,
          title: post.title,
          content: post.body,
          userId: post.userId
        }))
        setPosts(mappedPosts)
        setError(null)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  if (loading) {
    return (
      <div>
        <Header />
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-8">Posts</h1>
          <div className="flex justify-center items-center h-64">
            <div className="text-lg text-gray-600">Loading posts...</div>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div>
        <Header />
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-8">Posts</h1>
          <div className="flex justify-center items-center h-64">
            <div className="text-lg text-red-600">Error: {error}</div>
          </div>
        </div>
      </div>
    )
  }

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
  )
}

export default Posts