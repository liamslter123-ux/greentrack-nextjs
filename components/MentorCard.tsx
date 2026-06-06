import Image from 'next/image'

interface MentorCardProps {
  name: string
  title: string
  bio: string
  image: string
  imageFallback?: string
  areas: string[]
  linkedIn?: string
}

export default function MentorCard({ name, title, bio, image, areas, linkedIn }: MentorCardProps) {
  return (
    <div className="bg-white border border-green/10 rounded-sm overflow-hidden flex flex-col h-full">
      <div className="relative aspect-[4/3] overflow-hidden bg-green/5">
        <Image
          src={image}
          alt={`${name}, ${title}`}
          fill
          className="object-cover object-[center_20%]"
          loading="lazy"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="p-8 flex flex-col flex-1">
        <h3 className="font-display text-2xl text-charcoal mb-1">{name}</h3>
        <p className="text-green text-sm font-medium mb-5">{title}</p>
        <p className="text-charcoal/70 text-sm leading-relaxed mb-6 flex-1">{bio}</p>
        {areas.length > 0 && (
          <div>
            <p className="text-charcoal/50 text-xs font-medium uppercase tracking-widest mb-3">Areas</p>
            <ul className="flex flex-wrap gap-2" role="list">
              {areas.map((area) => (
                <li key={area} className="text-xs bg-green/10 text-green px-3 py-1.5 rounded-full">
                  {area}
                </li>
              ))}
            </ul>
          </div>
        )}
        {linkedIn && (
          <a
            href={linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 text-sm text-green hover:text-darkGreen font-medium transition-colors duration-200"
            aria-label={`${name} on LinkedIn`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            View LinkedIn Profile
          </a>
        )}
      </div>
    </div>
  )
}
