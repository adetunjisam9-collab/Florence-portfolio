const items = [
  {
    title: "B.Sc. Science Laboratory Technology",
    place: 'Ladoke Akintola University of Technology (LAUTECH), Oyo State',
    period: '2021 – 2026',
    badge: 'Education',
    note: null,
  },
  {
    title: 'BUS107: Customer Service',
    place: 'Saylor Academy',
    period: 'In progress',
    badge: 'Training',
    note: 'Customer-service principles, effective communication, service delivery, problem-solving and complaint resolution.',
  },
  {
    title: 'Forex Customer Support',
    place: 'Self-Directed Learning',
    period: 'Ongoing',
    badge: 'Training',
    note: 'Forex fundamentals, MT4/MT5 terminology, KYC/AML basics, issue documentation and support escalation.',
  },
]

export default function Education() {
  return (
    <section id="education" className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-slate-900">
          Education & Training
        </h2>
        <div className="mt-2 h-1 w-16 bg-teal-500 rounded" />

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {items.map((i) => (
            <div
              key={i.title}
              className="p-6 rounded-xl bg-slate-50 border border-slate-200"
            >
              <span className="text-xs font-semibold uppercase tracking-wide text-teal-600">
                {i.badge}
              </span>
              <h3 className="mt-2 text-lg font-bold text-slate-900">{i.title}</h3>
              <p className="text-slate-500 text-sm">{i.place}</p>
              <p className="mt-1 text-sm font-medium text-slate-700">{i.period}</p>
              {i.note && (
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  {i.note}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}