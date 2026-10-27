const contacts = [
  {
    label: 'Email',
    value: 'mikeflorence883@gmail.com',
    href: 'mailto:mikeflorence883@gmail.com',
  },
  {
    label: 'Phone',
    value: '0703 515 2579',
    href: 'tel:+2347035152579',
  },
  {
    label: 'WhatsApp',
    value: 'Chat with me',
    href: 'https://wa.me/2347035152579',
  },
  {
    label: 'LinkedIn',
    value: 'View profile',
    href: 'https://www.linkedin.com/public-profile/settings/',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="bg-slate-900 py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-white">Let's Work Together</h2>
        <div className="mt-2 h-1 w-16 bg-teal-500 rounded mx-auto" />
        <p className="mt-6 text-slate-300 max-w-2xl mx-auto">
          I'm open to remote or hybrid customer support roles in fintech,
          forex brokerage and financial services. Reach out and I'll get back
          to you.
        </p>

        <div className="mt-10 grid sm:grid-cols-2 gap-4 text-left">
          {contacts.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              className="p-5 rounded-xl bg-slate-800 border border-slate-700 hover:border-teal-400 transition-colors"
            >
              <p className="text-xs uppercase tracking-wide text-teal-400 font-semibold">
                {c.label}
              </p>
              <p className="mt-1 text-white font-medium break-all">{c.value}</p>
            </a>
          ))}
        </div>

        <a
          href="/Florence-Mike-CV.pdf"
          download
          className="inline-block mt-10 px-8 py-3 rounded-lg bg-teal-500 hover:bg-teal-400 text-slate-900 font-semibold transition-colors"
        >
          Download CV
        </a>
      </div>
    </section>
  )
}