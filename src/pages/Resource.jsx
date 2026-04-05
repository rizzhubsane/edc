import React, { useEffect, useState } from 'react'
import Section from '../components/Section'
import tree from "../assets/Group.png";
import { BackgroundGradientAnimation } from '../components/ui/background-gradient-animation'

const Resource = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'Startups', 'Technology', 'Finance', 'eDC Weekly'];

  const blogs = [
    // ── Startups ──────────────────────────────────────────────────
    {
      id: 1,
      category: 'Startups',
      title: 'How to Build an MVP in 30 Days',
      date: 'Oct 12, 2025',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32d7?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 2,
      category: 'Startups',
      title: 'Finding Your First 100 Customers',
      date: 'Sep 15, 2025',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 3,
      category: 'Startups',
      title: 'From Idea to Product-Market Fit: A Student Founder\'s Roadmap',
      date: 'Aug 20, 2025',
      readTime: '9 min read',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 4,
      category: 'Startups',
      title: 'Why Most Campus Startups Fail in Year One — and How to Beat the Odds',
      date: 'Jul 30, 2025',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 5,
      category: 'Startups',
      title: 'Co-founder Chemistry: How to Choose the Right Partner',
      date: 'Jul 10, 2025',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 6,
      category: 'Startups',
      title: 'Pitching to Investors: Lessons from Moonshot 2025',
      date: 'Jun 18, 2025',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=800&q=80',
    },

    // ── Technology ────────────────────────────────────────────────
    {
      id: 7,
      category: 'Technology',
      title: 'The Rise of AI Agents in DeepTech',
      date: 'Oct 05, 2025',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 8,
      category: 'Technology',
      title: 'How Generative AI is Reshaping the Indian Startup Ecosystem',
      date: 'Sep 05, 2025',
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 9,
      category: 'Technology',
      title: 'Building for Bharat: Tech Solutions for the Next Billion Users',
      date: 'Aug 10, 2025',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 10,
      category: 'Technology',
      title: 'Open Source as a Go-to-Market Strategy for Deep Tech Startups',
      date: 'Jul 22, 2025',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
    },

    // ── Finance ───────────────────────────────────────────────────
    {
      id: 11,
      category: 'Finance',
      title: 'Understanding Term Sheets: A Founder\'s Guide',
      date: 'Sep 28, 2025',
      readTime: '12 min read',
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 12,
      category: 'Finance',
      title: 'Pre-Seed to Series A: Understanding Indian VC Funding Stages',
      date: 'Aug 28, 2025',
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 13,
      category: 'Finance',
      title: 'Cap Tables 101: What Every Student Founder Must Know',
      date: 'Aug 05, 2025',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 14,
      category: 'Finance',
      title: 'Revenue Models that Scale: SaaS, Marketplace, and Beyond',
      date: 'Jul 05, 2025',
      readTime: '9 min read',
      image: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=800&q=80',
    },

    // ── eDC Weekly ────────────────────────────────────────────────
    {
      id: 15,
      category: 'eDC Weekly',
      title: 'Recap: Moonshot Pitch Day Highlights',
      date: 'Sep 20, 2025',
      readTime: '4 min read',
      image: 'https://images.unsplash.com/photo-1540317580384-e5d43867caa6?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 16,
      category: 'eDC Weekly',
      title: 'Founder Spotlight: Building in Stealth',
      date: 'Sep 08, 2025',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 17,
      category: 'eDC Weekly',
      title: 'BECon Regionals Mumbai — What We Learned',
      date: 'Aug 15, 2025',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 18,
      category: 'eDC Weekly',
      title: 'Venture Studio Cohort 3: Meet the Founders',
      date: 'Jul 28, 2025',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1543269664-76bc3997d9ea?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 19,
      category: 'eDC Weekly',
      title: 'Anastomosis 2025: School Innovators Take the Stage',
      date: 'Jul 15, 2025',
      readTime: '4 min read',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 20,
      category: 'eDC Weekly',
      title: 'Industry Connect: Inside Our Startup Visits This Semester',
      date: 'Jun 30, 2025',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    },
  ];

  const filteredBlogs = activeFilter === 'All' 
    ? blogs 
    : blogs.filter(blog => blog.category === activeFilter);

  const handleClick = () => {
    window.open("https://edciitd.notion.site/?v=d74695ec05bb4e98a9395ee263346b16", "_blank");
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
      containerClassName="min-h-screen"
      className="w-full"
    >
      {/* Page Header */}
      <div className="relative w-full min-h-screen bg-[#2D1B66]/50 overflow-hidden flex items-end">
        <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-end justify-between px-6 sm:px-8 md:px-12 lg:px-20 pt-32 pb-0 min-h-screen w-full">
          
          {/* Left Side - Heading & Content */}
          <div className="w-full lg:w-1/2 space-y-6 sm:space-y-8 lg:space-y-10 mt-16 lg:mt-0 pb-16 lg:pb-32 z-20 flex flex-col justify-center h-full">
            
            {/* Heading with underline */}
            <div>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-3 sm:mb-4">
                RESOURCES
              </h1>
              <div className="h-[2px] sm:h-[3px] bg-white w-full max-w-[850px]"></div>
            </div>

            {/* Subtext */}
            <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed max-w-xl">
              Explore a curated list of resources to help you on your entrepreneurial journey.
            </p>

            {/* Notion Link Button */}
            <div>
              <button onClick={handleClick} className="border-2 border-white text-white px-6 sm:px-8 py-3 rounded-2xl text-sm sm:text-base lg:text-lg font-medium hover:bg-white hover:text-[#2D1B66] transition-all duration-300 transform hover:scale-105">
                KNOWLEDGE BASE
              </button>
            </div>
          </div>

          {/* Right Side - Tree Image */}
          <div className="w-full lg:w-1/2 flex items-end justify-center lg:justify-end mt-12 lg:mt-0 h-full absolute bottom-0 right-0 lg:relative opacity-30 lg:opacity-100 pointer-events-none lg:pointer-events-auto">
            <img src={tree} alt="Resources Tree" className="w-full max-w-md sm:max-w-lg lg:max-w-xl object-contain object-bottom h-full max-h-[70vh] lg:max-h-[85vh]" />
          </div>
        </div>
      </div>

      {/* Blogs Section */}
      <Section variant="dark" className="!bg-transparent pt-20 pb-20">
        <div className="max-w-[1200px] mx-auto">
          {/* Blogs Heading */}
          <div className="text-center mb-10">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-text-primary mb-4">
              Blogs
            </h2>
            <div className="w-[60px] h-1 bg-accent-cyan rounded-full mx-auto"></div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2 rounded-full font-body text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-white/20 text-white border border-white/30 shadow-md'
                    : 'bg-transparent border border-white/15 text-text-body hover:border-white/40 hover:text-white'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBlogs.map((blog) => (
              <div
                key={blog.id}
                className="bg-[rgba(255,255,255,0.05)] rounded-[16px] overflow-hidden border border-white/10 backdrop-blur-[10px] hover:border-white/25 hover:-translate-y-2 transition-all duration-300 group flex flex-col"
              >
                <div className="w-full aspect-[16/9] overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="mb-3">
                    <span className="inline-block bg-accent-cyan/15 text-accent-cyan font-body text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                      {blog.category}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-text-primary text-lg mb-3 line-clamp-2">
                    {blog.title}
                  </h3>
                  <div className="flex items-center text-text-body/70 text-xs font-body mb-5 mt-auto">
                    <span>{blog.date}</span>
                    <span className="mx-2">•</span>
                    <span>{blog.readTime}</span>
                  </div>
                  <button className="text-accent-cyan font-body font-medium text-sm inline-flex items-center group-hover:text-white transition-colors">
                    Read More <span className="ml-1 transform group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

    </BackgroundGradientAnimation>
  )
}

export default Resource
