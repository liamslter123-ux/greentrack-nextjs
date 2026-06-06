import Link from 'next/link'
import { ArrowRight, type LucideIcon } from 'lucide-react'

interface ServiceCardProps {
  Icon: LucideIcon
  title: string
  description: string
  href: string
}

export default function ServiceCard({ Icon, title, description, href }: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group flex flex-col h-full bg-white border border-green/10 rounded-sm p-8 hover:border-green/30 hover:shadow-lg transition-all duration-300"
    >
      <div className="w-12 h-12 rounded-sm bg-green/10 flex items-center justify-center mb-6 group-hover:bg-green/15 transition-colors duration-300">
        <Icon size={22} className="text-green" aria-hidden="true" />
      </div>
      <h3 className="font-display text-xl text-charcoal mb-3 group-hover:text-green transition-colors duration-200">
        {title}
      </h3>
      <p className="text-charcoal/65 text-sm leading-relaxed flex-1">{description}</p>
      <div className="flex items-center gap-2 mt-6 text-green text-sm font-medium">
        Learn more
        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true" />
      </div>
    </Link>
  )
}
