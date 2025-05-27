'use client';
import { useCallback } from 'react';
import posthog from 'posthog-js';

export default function Home() {
    const handleClick = useCallback(() => {
        posthog.capture('my event', { property: 'value' });
        alert('Evento enviado para o PostHog!');
    }, []);

    return (
        <main
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: 40,
            }}
        >
            <h1>Teste PostHog</h1>
            <button
                onClick={handleClick}
                style={{ padding: '10px 20px', fontSize: 18 }}
            >
                Enviar evento para o PostHog
            </button>
        </main>
    );
}
