import PostHogClient from './posthog';
import Link from 'next/link';

interface PostCardProps {
    post: { id: number; title: string };
}

export default function PostCard({ post }: PostCardProps) {
    // Exemplo de evento PostHog
    const posthog = PostHogClient();
    posthog.capture({
        distinctId: 'user_distinct_id', // substitua pelo ID real do usuário
        event: 'post_viewed',
        properties: { postId: post.id, title: post.title },
    });
    posthog.shutdown();

    return (
        <li>
            <Link
                href={`/${post.id}`}
                className='block px-4 py-2 rounded hover:bg-gray-100 text-blue-600 hover:text-blue-800 transition'
            >
                {post.title}
            </Link>
        </li>
    );
}
