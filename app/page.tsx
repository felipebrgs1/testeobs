import posthog from 'posthog-js';

export default function Home() {
    return posthog.capture('my event', { property: 'value' });
}
