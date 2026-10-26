export default function Hero() {
  return (
    <section id="home" className="bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-6 py-24 md:py-32 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-teal-400 font-medium mb-3">Hello, I'm</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Florence Mike
          </h1>
          <p className="mt-4 text-xl text-slate-300">
            Customer Support Representative | Fintech & Forex Support
          </p>
          <p className="mt-6 text-slate-400 max-w-xl">
            I help customers resolve account, payment and trading-platform issues
            clearly and professionally, with hands-on knowledge of MT5, KYC/AML
            basics and proper escalation.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg bg-teal-500 hover:bg-teal-400 text-slate-900 font-semibold transition-colors"
            >
              Contact Me
            </a>
            <a
              href="/Florence-Mike-CV.pdf"
              download
              className="px-6 py-3 rounded-lg border border-slate-600 hover:border-teal-400 hover:text-teal-400 font-semibold transition-colors"
            >
              Download CV
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-56 h-56 md:w-72 md:h-72 rounded-full bg-gradient-to-br from-teal-400 to-teal-700 flex items-center justify-center text-6xl font-bold text-slate-900">
            FM
          </div>
        </div>
      </div>
    </section>
  )
}