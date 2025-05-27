'use client';
import React, { useEffect, useState } from 'react';
import { sendGAEvent } from '@next/third-parties/google';

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
                                className='ml-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
                                onClick={() =>
                                    sendGAEvent('event', 'Button Click', {
                                        value: post.id,
                                        label: post.title,
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
