import { Reveal, Stagger, StaggerItem } from './reveal'

function TestimonialCard({ item, featured = false }) {
  return (
    <figure
      className={`flex h-full flex-col justify-between rounded-[22px] bg-white shadow-[var(--sh-card)] ${
        featured ? 'p-7 md:p-10' : 'p-6 md:p-7'
      }`}
    >
      <blockquote className="text-[15px] leading-relaxed tracking-[-0.02em] text-ink md:text-[16px]">
        “{item.quote}”
      </blockquote>
      <figcaption className={`flex items-center gap-3 ${featured ? 'mt-10' : 'mt-6'}`}>
        <img
          src={item.image}
          alt=""
          loading="lazy"
          decoding="async"
          className={`rounded-full object-cover bg-canvas-soft ${
            featured ? 'h-14 w-14 md:h-16 md:w-16' : 'h-11 w-11'
          }`}
        />
        <div>
          <p className={`font-semibold text-ink ${featured ? 'text-[15px] md:text-[16px]' : 'text-[14px]'}`}>
            {item.name}
          </p>
          <p className="text-[13px] text-muted">{item.role}</p>
        </div>
      </figcaption>
    </figure>
  )
}

export function TestimonialsBento({ items }) {
  const [featured, ...rest] = items

  if (!featured) return null

  return (
    <section id="testimonials" className="band-lilac">
      <div className="site-wrap py-16 md:py-24">
        <Reveal>
          <h2 className="section-title text-section text-ink text-left mb-12">Testimonials</h2>
        </Reveal>
        <Stagger className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr] lg:gap-5">
          <StaggerItem className="h-full">
            <TestimonialCard item={featured} featured />
          </StaggerItem>
          <StaggerItem className="grid gap-4 lg:gap-5">
            {rest.map((item) => (
              <TestimonialCard key={item.name} item={item} />
            ))}
          </StaggerItem>
        </Stagger>
      </div>
    </section>
  )
}

export default TestimonialsBento
