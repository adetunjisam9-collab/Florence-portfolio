const projects = [
  {
    title: 'Personal MT5 Forex Trading',
    tag: 'Self-Directed Practice',
    points: [
      'Placed and monitored personal forex trades on the MT5 platform.',
      'Worked hands-on with charts, order types, trade volume, stop-loss and take-profit settings.',
      'Tracked balance, equity, margin and free margin to see how market movements affect an account.',
      'Built a strategy for executing trades, with risk awareness at the centre.',
      'Became familiar with common MT5 user questions and issues that need troubleshooting or escalation.',
    ],
  },
  {
    title: 'Forex Customer Support Simulation',
    tag: 'Practical Training',
    points: [
      'Practised answering simulated enquiries about deposits, pending withdrawals, account verification and platform access.',
      'Wrote structured replies for common MT4/MT5 issues such as connection problems, invalid account details and order-volume restrictions.',
      'Worked through escalation scenarios involving payment issues, verification concerns and account restrictions.',
      'Practised documenting issue details, actions taken, escalation reasons and follow-ups.',
      'Focused on clear communication, accurate explanations and protecting customer data.',
    ],
  },
]

const samples = [
  {
    issue: 'Pending Withdrawal',
    customer:
      'Hi, I requested a withdrawal two days ago and it still shows as pending. Can you tell me what is going on?',
    reply: `Hello, thank you for reaching out, and I'm sorry for the worry this has caused.

I can see how a pending withdrawal can be stressful, so let me help. Could you please confirm the email address on your account and the date and amount of the request? I will check its current status.

Withdrawals can stay pending while verification or processing checks are completed, and the timeframe depends on the payment method used. If your request is outside the stated processing time, I will escalate it to our payments team right away and update you as soon as I hear back.`,
  },
  {
    issue: 'MT5 Login Problem',
    customer:
      'I cannot log in to my MT5 account. It keeps saying "invalid account".',
    reply: `Hello, thanks for letting us know. Let's get you back into your account.

An "invalid account" message is often caused by a small mismatch in the login details. Could you please check the following?

1. That the account number (login) matches the one in your welcome email.
2. That you selected the correct trading server.
3. That the password is typed exactly as set, as it is case-sensitive.

If you have checked all three and still cannot log in, please send me a screenshot of the error (do not include your password) and I will look into it further or pass it to our technical team.`,
  },
]

export default function Projects() {
  return (
    <section id="projects" className="bg-slate-50 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-slate-900">Projects</h2>
        <div className="mt-2 h-1 w-16 bg-teal-500 rounded" />

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <article
              key={p.title}
              className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm"
            >
              <span className="text-xs font-semibold uppercase tracking-wide text-teal-600">
                {p.tag}
              </span>
              <h3 className="mt-2 text-xl font-bold text-slate-900">{p.title}</h3>
              <ul className="mt-4 space-y-2 text-slate-600 list-disc ml-5">
                {p.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <h3 className="mt-20 text-2xl font-bold text-slate-900">
          Sample Support Responses
        </h3>
        <p className="mt-2 text-slate-500">
          Simulated examples showing how I handle common customer enquiries.
        </p>

        <div className="mt-8 grid lg:grid-cols-2 gap-6">
          {samples.map((s) => (
            <div
              key={s.issue}
              className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm"
            >
              <p className="text-sm font-semibold text-teal-600">{s.issue}</p>

              <div className="mt-4 p-4 rounded-lg bg-slate-100 text-slate-700 text-sm">
                <p className="text-xs font-semibold text-slate-500 mb-1">
                  Customer
                </p>
                {s.customer}
              </div>

              <div className="mt-3 p-4 rounded-lg bg-teal-50 border border-teal-100 text-slate-700 text-sm whitespace-pre-line">
                <p className="text-xs font-semibold text-teal-700 mb-1">
                  My Reply
                </p>
                {s.reply}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}