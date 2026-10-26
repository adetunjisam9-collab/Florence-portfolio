const facts = [
  { label: 'Location', value: 'Lagos, Nigeria' },
  { label: 'Focus', value: 'Fintech & Forex Customer Support' },
  { label: 'Education', value: 'B.Sc. Science Laboratory Technology, LAUTECH' },
  { label: 'Open to', value: 'Remote or hybrid roles' },
]

export default function About() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold text-slate-900">About Me</h2>
          <div className="mt-2 h-1 w-16 bg-teal-500 rounded" />

          <p className="mt-6 text-slate-600 leading-relaxed">
            I'm a customer-focused professional with experience in remote
            customer service, online marketing and customer communication. I
            enjoy listening to customers, working out what's really going
            wrong, and guiding them to a clear next step.
          </p>
          <p className="mt-4 text-slate-600 leading-relaxed">
            I'm also a personal forex trader on MT5, which helps me explain
            trading terms and platform issues in plain language. I'm building
            my skills in KYC/AML basics, account verification, and payment and
            withdrawal enquiries, and I'm looking for a support role in a
            fintech company or forex brokerage.
          </p>
        </div>

        <dl className="grid sm:grid-cols-2 gap-4 content-start">
          {facts.map((f) => (
            <div
              key={f.label}
              className="p-5 rounded-xl bg-slate-50 border border-slate-200"
            >
              <dt className="text-xs uppercase tracking-wide text-teal-600 font-semibold">
                {f.label}
              </dt>
              <dd className="mt-1 text-slate-800 font-medium">{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}