import { ChevronDown } from 'lucide-react'

interface FaqItem {
  question: string
  answer: string
}

/* CSS-only FAQ accordion using native <details>/<summary> — no client JS needed */
export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  return (
    <div className="divide-y divide-charcoal/10">
      {items.map((item, i) => (
        <details key={i} className="group">
          <summary className="flex w-full items-center justify-between py-5 text-left gap-4 cursor-pointer [list-style:none] [&::-webkit-details-marker]:hidden">
            <span className="font-display text-lg text-charcoal">{item.question}</span>
            <ChevronDown
              size={20}
              className="flex-shrink-0 text-green transition-transform duration-300 group-open:rotate-180"
              aria-hidden="true"
            />
          </summary>
          <div className="pb-5 pr-8 text-charcoal/70 text-base leading-relaxed font-sans">
            {item.answer}
          </div>
        </details>
      ))}
    </div>
  )
}
