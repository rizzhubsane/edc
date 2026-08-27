import { Reveal } from './reveal'
import { InitiativesCarousel } from './initiatives-carousel'
import alumniNews from '../../utility/alumni-news'
import campus from '../../assets/IIT.jpg'
import DeepinderGoyal from '../../assets/speakers/DeepinderGoyal.jpg'

const IMAGES = {
  campus,
  deepinder: DeepinderGoyal,
}

const items = alumniNews.map((item) => ({
  title: item.title,
  body: item.dek,
  href: item.href,
  image: item.image || IMAGES[item.imageKey],
}))

export function AlumniNews() {
  return (
    <section>
      <div className="site-wrap pt-4 pb-16 md:pt-6 md:pb-24">
        <Reveal className="mb-7">
          <h2 className="section-title text-section text-ink text-left">Alumni in the news</h2>
        </Reveal>
        <Reveal delay={0.08}>
          <InitiativesCarousel
            items={items}
            autoplay={6500}
            loop
            external
            ctaLabel="Read the story"
            label="Alumni in the news"
          />
        </Reveal>
      </div>
    </section>
  )
}

export default AlumniNews
