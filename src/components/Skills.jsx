const groups = [
  {
    title: 'Customer Support',
    items: [
      'Enquiry Handling',
      'Complaint Resolution',
      'Email & Chat Support',
      'Customer Follow-up',
      'Product Explanation',
      'Escalation & Documentation',
    ],
  },
  {
    title: 'Fintech & Forex',
    items: [
      'KYC/AML Fundamentals',
      'Account Verification',
      'Deposits & Withdrawals',
      'MT4/MT5 Troubleshooting',
      'Forex Terminology',
      'MT5 Trading Experience',
    ],
  },
  {
    title: 'Tools & Workflow',
    items: [
      'Zendesk Ticketing',
      'Microsoft Office',
      'Google Workspace',
      'Data Entry',
      'Record Keeping',
      'Remote Collaboration',
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="bg-slate-50 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-slate-900">Skills</h2>
        <div className="mt-2 h-1 w-16 bg-teal-500 rounded" />

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {groups.map((g) => (
            <div
              key={g.title}
              className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-slate-900">{g.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <li
                    key={item}
                    className="px-3 py-1 text-sm rounded-full bg-teal-50 text-teal-700 border border-teal-100"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}