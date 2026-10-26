const jobs = [
  {
    role: 'Customer Service Representative',
    company: 'Vielmax Group',
    type: 'Remote',
    period: '2021 – 2023',
    points: [
      'Responded to customer enquiries professionally with clear, relevant information.',
      'Communicated with customers online to understand concerns and identify the nature of each issue.',
      'Troubleshot basic service problems by asking clarifying questions and guiding customers through practical next steps.',
      'Documented customer concerns, actions taken and key details to support accurate follow-up.',
      'Escalated unresolved, sensitive or complex issues to the right team with clear supporting context.',
      'Followed up on escalated requests and kept customers updated to manage expectations.',
    ],
  },
  {
    role: 'Marketing Representative',
    company: 'Company Name', // TODO: replace with the real company name
    type: 'Remote',
    period: 'Month Year – Month Year', // TODO: replace with real dates
    points: [
      'Identified and engaged prospective customers online to introduce company products and services.',
      'Explained product features clearly so customers understood what was on offer.',
      'Answered customer questions and referred complex or specialised ones to the right person.',
      'Followed up with prospective and existing customers on their requirements and requested quantities.',
      'Maintained customer relationships through consistent communication and timely updates.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="bg-white py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-slate-900">Experience</h2>
        <div className="mt-2 h-1 w-16 bg-teal-500 rounded" />

        <ol className="mt-10 relative border-l-2 border-teal-200 ml-3 space-y-12">
          {jobs.map((job) => (
            <li key={job.role} className="pl-8 relative">
              <span className="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-teal-500 border-4 border-white" />

              <p className="text-sm font-semibold text-teal-600">{job.period}</p>
              <h3 className="mt-1 text-xl font-bold text-slate-900">
                {job.role}
              </h3>
              <p className="text-slate-500">
                {job.company} · {job.type}
              </p>

              <ul className="mt-4 space-y-2 text-slate-600 list-disc list-outside ml-5">
                {job.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}