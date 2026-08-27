import { useReducedMotion } from 'framer-motion'

function SpeakerSlide({ speaker }) {
  return (
    <article className="w-[9.25rem] shrink-0 text-center sm:w-[10.5rem]">
      <div className="mx-auto size-[6.25rem] overflow-hidden rounded-full bg-canvas-soft sm:size-[7.25rem]">
        <img
          src={speaker.image}
          alt=""
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover"
        />
      </div>
      <p className="mt-3 truncate text-[15px] font-semibold tracking-[-0.02em] text-ink sm:text-[16px]">
        {speaker.name}
      </p>
      <p className="mt-0.5 line-clamp-2 min-h-[2.4em] text-[12px] leading-snug text-muted sm:text-[13px]">
        {speaker.role || '\u00a0'}
      </p>
    </article>
  )
}

export function SpeakersMarquee({ speakers }) {
  const reduce = useReducedMotion()
  const loop = [...speakers, ...speakers]

  return (
    <div className="speakers-marquee" aria-label="Past speakers">
      <div className={`speakers-marquee__track ${reduce ? '' : 'is-moving'}`}>
        {loop.map((speaker, index) => (
          <SpeakerSlide key={`${speaker.name}-${index}`} speaker={speaker} />
        ))}
      </div>
    </div>
  )
}

export default SpeakersMarquee
