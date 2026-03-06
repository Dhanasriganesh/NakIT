const testimonials = [
  {
    quote: 'Working with NAK IT Group has been a game-changer for our organization. Their strategic approach to digital transformation and commitment to excellence is unmatched in the industry.',
    author: 'Sarah Mitchell',
    role: 'CTO, Capital One',
    avatar: 'SM',
    accent: 'from-blue-500 to-blue-700',
  },
  {
    quote: "Their team is professional, knowledgeable, and truly understands our business needs. Whether it's a complex workflow or a lightweight self-service feature, the experience always feels effortless.",
    author: 'James Chen',
    role: 'VP Engineering, NVIDIA',
    avatar: 'JC',
    accent: 'from-blue-600 to-indigo-700',
  },
  {
    quote: "NAK IT Group delivered our cloud migration on time and under budget. The expertise they bring to every project is exceptional. We've seen 40% faster operations since deployment.",
    author: 'Priya Sharma',
    role: 'Director of Technology, TCS',
    avatar: 'PS',
    accent: 'from-cyan-500 to-blue-600',
  },
  {
    quote: 'The AI integration solutions they built transformed how we handle data analytics. Our team now makes decisions 3x faster with actionable insights delivered in real-time.',
    author: 'Michael Torres',
    role: 'Head of Data, Walmart',
    avatar: 'MT',
    accent: 'from-indigo-500 to-blue-700',
  },
  {
    quote: 'From initial consulting to final delivery, NAK IT Group maintained transparent communication and delivered a product that exceeded our expectations in every way.',
    author: 'Lisa Wang',
    role: 'SVP Digital, Apple',
    avatar: 'LW',
    accent: 'from-blue-500 to-cyan-600',
  },
  {
    quote: 'Outstanding cybersecurity solutions that gave us complete confidence in our infrastructure. Their 24/7 monitoring catches and resolves issues before they become problems.',
    author: 'David Kumar',
    role: 'CISO, Microsoft',
    avatar: 'DK',
    accent: 'from-sky-500 to-blue-700',
  },
]

export default function Testimonials() {
  return (
    <section className="bg-slate-50 py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-widest mb-4">
            Client Stories
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Trusted by{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              industry leaders
            </span>
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            See how NAK IT Group has helped global brands achieve digital excellence and drive transformation.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-100 transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              {/* Quote mark */}
              <div className="text-4xl text-blue-200 font-serif leading-none mb-4 select-none">"</div>

              {/* Quote */}
              <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">{t.quote}</p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.accent} flex items-center justify-center text-white text-xs font-bold flex-shrink-0 shadow-sm`}>
                  {t.avatar}
                </div>
                <div>
                  <div className="text-slate-900 font-semibold text-sm">{t.author}</div>
                  <div className="text-slate-400 text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
