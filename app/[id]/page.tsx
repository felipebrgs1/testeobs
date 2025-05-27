import PostHogClient from '../posthog';
import Link from 'next/link';

interface PostPageProps {
    params: { id: string };
}

export default async function PostPage({ params }: PostPageProps) {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${params.id}`,
    );
    const post = await res.json();

    // Exemplo de evento PostHog
    const posthog = PostHogClient();
    posthog.capture({
        distinctId: 'user_distinct_id', // substitua pelo ID real do usuário
        event: 'post_viewed',
        properties: { postId: post.id, title: post.title },
    });
    posthog.shutdown();

    return (
        <main className='max-w-2xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg'>
            <h1 className='text-3xl font-bold mb-6 text-gray-800'>
                {post.title}
            </h1>
            <p className='mb-4'>{post.body}</p>
            <Link
                href='/'
                className='text-blue-600 hover:text-blue-800'
            >
                Voltar
            </Link>
        </main>
    );
}
