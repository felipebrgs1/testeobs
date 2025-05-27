// app/posthog.js
import { PostHog } from 'posthog-node'

export default function PostHogClient() {
    const posthogKey = process.env.NEXT_PUBLIC_POSTHOG_KEY ?? '';
    const posthogHost = process.env.NEXT_PUBLIC_POSTHOG_HOST ?? '';
    const posthogClient = new PostHog(posthogKey, {
        host: posthogHost,
        flushAt: 1,
        flushInterval: 0
    })
    return posthogClient
}