import Link from 'next/link'
import { getSortedPostsData } from '@/lib/posts'

interface Post {
  id: string
  title: string
  date: string
}

export default function PostList() {
    const posts = getSortedPostsData()

  return (
    <div className="min-h-full flex flex-col max-w-[1024px] w-full px-2">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {posts.map((post) => (
                <div key={post.id} className="w-full shadow-lg rounded-md overflow-clip bg-card lg:hover:scale-[1.01] transition duration-400 ease-in-out will-change-transform">
                    <a href={`/posts/${post.id}`}>
                        {post.image ? <img src={post.image} alt="" style={{width: '100%', height: 280, objectFit: 'cover'}}/> : null}
                        <h1 className="mx-4">{post.title}</h1>

                        <small className="text-gray-500 mx-4">{post.date}</small>
                        
                        <div className='mx-4 mb-2 line-clamp-3'>
                            {post.content}
                        </div>
                    </a>
                </div>
            ))}
        </div>
    </div>
  )
}