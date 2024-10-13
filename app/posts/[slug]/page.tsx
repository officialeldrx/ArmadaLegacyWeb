import { getPostData, getSortedPostsData } from '@/lib/posts'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
    const posts = getSortedPostsData()
    return posts.map((post) => ({
        slug: post.id,
    }))
    }

    export default async function Post({ params }: { params: { slug: string } }) {
    const postData = await getPostData(params.slug)
    
    if (!postData) {
        notFound()
    }

    return (
        <div className="min-h-full flex flex-col max-w-[960px] w-full p-2 post">
            <div className="text-gray-500 mb-2 flex justify-between">
                <span>{postData.title}</span>
                <span>{postData.date}</span>
            </div>
            {postData.image ? <img className="mb-2" src={postData.image} alt="" style={{width: '100%', objectFit: 'cover'}}/> : null}
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} className="prose lg:prose-xl" />
            <div className='pb-16'></div>
        </div>
    )
}