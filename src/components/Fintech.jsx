const forex = [
  'Currency pairs, bid/ask prices, spreads, pips and lot sizes',
  'Leverage, margin, free margin, equity, balance and margin level',
  'Stop-loss, take-profit and risk-to-reward ratios',
  'Placing and managing trades on MT5, including charts and open positions',
  'Basic MT4/MT5 troubleshooting',
]

const support = [
  'KYC and AML fundamentals',
  'Customer verification and proof-of-address requirements',
  'Deposit, withdrawal and transaction-status enquiries',
  'Account-access issues and trading-platform errors',
  'Customer-data confidentiality and security procedures',
]

const terms = [
  {
    term: 'Spread',
    plain:
      'The small gap between the buying and selling price of a currency pair. It is part of the cost of opening a trade.',
  },
  {
    term: 'Margin',
    plain:
      'The amount your broker sets aside from your account to keep a trade open while you use leverage.',
  },
  {
    term: 'Equity',
    plain:
      'Your account balance plus or minus the profit or loss on trades that are still open.',
  },
  {
    term: 'Free Margin',
    plain:
      'The money in your account that is still available to open new trades.',
  },
]

function Card({ title, items }) {
  return (
    <div className="p-6 rounded-xl bg-slate-800 border border-slate-700">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-slate-300">
            <span className="text-teal-400 mt-0.5">✓</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Fintech() {
  return (
    <section id="fintech" className="bg-slate-900 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white">Fintech & Forex Knowledge</h2>
        <div className="mt-2 h-1 w-16 bg-teal-500 rounded" />

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <Card title="Forex Fundamentals" items={forex} />
          <Card title="Financial Services Support" items={support} />
        </div>

        <h3 className="mt-16 text-xl font-semibold text-white">
          Explained Simply
        </h3>
        <p className="mt-2 text-slate-400">
          How I would explain common trading terms to a customer.
        </p>

        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {terms.map((t) => (
            <div
              key={t.term}
              className="p-5 rounded-xl bg-slate-800/60 border border-teal-500/30"
            >
              <p className="text-teal-400 font-semibold">{t.term}</p>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                {t.plain}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}