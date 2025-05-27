'use client';
import React, { useEffect, useState } from 'react';
import { event } from './gtag';

async function fetchData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    return data;
}

export default function Home() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [posts, setPosts] = useState<any[]>([]);

    useEffect(() => {
        fetchData().then(setPosts);
    }, []);

    return (
        <div className='p-4  mt-4 '>
            {posts.length === 0 ? (
                <div>Loading...</div>
            ) : (
                <ul>
                    {posts.map((post) => (
                        <li
                            key={post.id}
                            className='mb-2 p-2 border rounded'
                        >
                            {post.title}
                            <button
                                onClick={() =>
                                    event({
                                        action: 'view_post',
                                        category: 'Posts',
                                        label: post.id.toString(),
                                    })
                                }
                            >
                                View Details
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
