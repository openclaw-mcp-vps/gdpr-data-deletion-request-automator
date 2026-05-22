import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'GDPR Deletion Automator – Automate GDPR deletion requests across platforms',
  description: 'Automate GDPR data deletion requests across multiple platforms. Track compliance, generate compliant requests, and ensure follow-up for privacy officers and compliance teams.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="1f1d8c6c-9e55-4a80-aa54-7bc0080c1d63"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
