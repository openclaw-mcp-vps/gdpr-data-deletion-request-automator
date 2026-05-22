export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold uppercase tracking-widest">
          GDPR Compliance
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Automate GDPR Deletion Requests<br />
          <span className="text-[#58a6ff]">Across Every Platform</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Generate, send, and track GDPR data deletion requests across dozens of services — automatically. Built for privacy officers and compliance teams who can't afford to miss a deadline.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start for $16/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">No setup fees. Cancel anytime.</p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">📋</div>
            <h3 className="font-semibold text-white mb-1">Platform Templates</h3>
            <p className="text-sm text-[#8b949e]">Pre-built deletion request templates for 50+ platforms including Google, Meta, Twitter, and more.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">📡</div>
            <h3 className="font-semibold text-white mb-1">Automated Tracking</h3>
            <p className="text-sm text-[#8b949e]">Track request status, deadlines, and follow-ups in one compliance dashboard.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">📊</div>
            <h3 className="font-semibold text-white mb-1">Compliance Reports</h3>
            <p className="text-sm text-[#8b949e]">Export audit-ready reports showing all deletion requests, responses, and timelines.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</p>
          <div className="text-5xl font-bold text-white mb-1">$16</div>
          <p className="text-[#8b949e] mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              'Unlimited deletion requests',
              '50+ platform templates',
              'Automated follow-up reminders',
              'Compliance audit reports',
              'Priority email support'
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-center"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-5">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">What is a GDPR deletion request?</h3>
            <p className="text-sm text-[#8b949e]">Under GDPR Article 17, individuals have the right to request that companies delete their personal data. This tool automates generating and sending those requests to platforms on your behalf.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Which platforms are supported?</h3>
            <p className="text-sm text-[#8b949e]">We support 50+ major platforms including Google, Meta, Twitter/X, LinkedIn, Amazon, Apple, and many more. New platforms are added regularly based on user requests.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How does follow-up tracking work?</h3>
            <p className="text-sm text-[#8b949e]">After a request is sent, the system tracks the 30-day GDPR response deadline and sends you reminders if a platform hasn't responded. All activity is logged for your compliance records.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#8b949e]">
        &copy; {new Date().getFullYear()} GDPR Deletion Automator. All rights reserved.
      </footer>
    </main>
  )
}
