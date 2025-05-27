import Link from 'next/link';

export default async function PostsPage() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();

    return (
        <main className='max-w-2xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg'>
            <h1 className='text-3xl font-bold mb-6 text-gray-800'>Posts</h1>
            <ul className='space-y-3'>
                {posts.map((post: any) => (
                    <li key={post.id}>
                        <Link
                            href={`/${post.id}`}
                            className='block px-4 py-2 rounded hover:bg-gray-100 text-blue-600 hover:text-blue-800 transition'
                        >
                            {post.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </main>
    );
}
