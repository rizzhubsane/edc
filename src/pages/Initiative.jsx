import React, { useEffect } from 'react'
import Section from '../components/Section'
import ScrollStack, { ScrollStackItem } from '../components/ScrollStack'
import initiatives from '../utility/initiative'
import { BackgroundGradientAnimation } from '../components/ui/background-gradient-animation'

const Initiative = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Helper to determine category and flagship based on title
  const getCategoryInfo = (title) => {
    const build = ['Venture Studio', 'Blueprint', 'Startup Clinic'];
    const compete = ['Moonshot', 'Regionals', 'Kinesis'];
    const flagship = ['Venture Studio', 'Moonshot', 'Regionals'];

    let category = 'Learn';
    if (build.includes(title)) category = 'Build';
    if (compete.includes(title)) category = 'Compete';

    return {
      category,
      isFlagship: flagship.includes(title)
    };
  };

  return (
    <BackgroundGradientAnimation
      gradientBackgroundStart="rgb(13, 11, 46)"
      gradientBackgroundEnd="rgb(26, 17, 69)"
      firstColor="45, 27, 105"
      secondColor="56, 189, 248"
      thirdColor="37, 99, 235"
      fourthColor="13, 11, 46"
      fifthColor="58, 31, 142"
      pointerColor="56, 189, 248"
      blendingValue="hard-light"
      size="70%"
      containerClassName="min-h-screen flex flex-col"
      className="w-full flex flex-col flex-grow"
    >
      {/* Page Header */}
      <div className="shrink-0 px-[clamp(1rem,4vw,6rem)] pt-32 lg:pt-40 pb-16">
        <div className="max-w-[800px]">
          <h1 className="font-heading font-bold text-text-primary text-[clamp(3.5rem,7vw,5.5rem)] mb-4">
            Initiatives
          </h1>
          <p className="font-body text-text-body text-lg md:text-xl mb-6">
            Programs designed to support every stage of your entrepreneurial journey.
          </p>
          <div className="w-[60px] h-1 bg-accent-cyan rounded-full"></div>
        </div>
      </div>

      <div className="flex-grow">
        <ScrollStack
          useWindowScroll={true}
          itemDistance={400}
          itemScale={0.03}
          itemStackDistance={20}
          stackPosition="3%"
          scaleEndPosition="1%"
          baseScale={0.85}
          scaleDuration={0.5}
          rotationAmount={0}
          blurAmount={0}
        >
          {initiatives.map((item, index) => {
            const { category, isFlagship } = getCategoryInfo(item.title);
            
            return (
              <ScrollStackItem
                key={index}
                itemClassName={`flex flex-col md:flex-row items-stretch overflow-hidden rounded-[28px] min-h-[260px] lg:min-h-[300px] bg-[rgba(255,255,255,0.04)] border ${isFlagship ? 'border-accent-gold/50 shadow-[0_0_20px_rgba(226,184,74,0.12)]' : 'border-[rgba(255,255,255,0.08)]'} backdrop-blur-[10px]`}
              >
                {/* Text — padded column */}
                <div className="flex-1 flex flex-col items-start justify-start text-left p-6 md:p-8 overflow-hidden">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                      category === 'Build' ? 'bg-accent-gold/20 text-accent-gold' :
                      category === 'Compete' ? 'bg-accent-cyan/20 text-accent-cyan' :
                      'bg-success/20 text-success'
                    }`}>
                      {category}
                    </span>
                    {isFlagship && (
                      <span className="text-[10px] uppercase tracking-wider font-bold bg-accent-gold/20 text-accent-gold px-3 py-1 rounded-full">
                        Flagship
                      </span>
                    )}
                  </div>

                  <h3 className="font-heading font-semibold text-xl lg:text-2xl text-text-primary mb-2">
                    {item.title}
                  </h3>

                  <p className="font-body text-sm text-text-body leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Image — fills exact card height, no padding, no gap */}
                <div className="hidden md:block md:w-[42%] shrink-0 h-full">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </ScrollStackItem>
            );
          })}
        </ScrollStack>
      </div>
    </BackgroundGradientAnimation>
  )
}

export default Initiative
