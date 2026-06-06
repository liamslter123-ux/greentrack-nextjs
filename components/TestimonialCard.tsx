interface TestimonialCardProps {
  quote: string
  attribution: string
}

export default function TestimonialCard({ quote, attribution }: TestimonialCardProps) {
  return (
    <figure className="bg-white border border-green/10 rounded-sm p-8 flex flex-col h-full">
      <div className="font-display text-4xl text-gold/60 leading-none mb-4 select-none" aria-hidden="true">
        &ldquo;
      </div>
      <blockquote className="flex-1">
        <p className="text-charcoal/80 text-base leading-relaxed font-sans italic mb-6">
          {quote}
        </p>
      </blockquote>
      <figcaption className="text-charcoal/50 text-xs font-medium uppercase tracking-widest border-t border-charcoal/8 pt-4">
        {attribution}
      </figcaption>
    </figure>
  )
}
